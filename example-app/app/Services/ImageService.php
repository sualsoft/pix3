<?php

namespace App\Services;

use Intervention\Image\ImageManager;
use Illuminate\Support\Str;

class ImageService
{
    protected $manager;
    
    public function __construct()
    {
        $this->manager = new ImageManager(
            driver: new \Intervention\Image\Drivers\Gd\Driver()
        );
    }
    
    /**
     * Process and save an image with Intervention Image
     * 
     * @param mixed $file - File object or base64 string
     * @param string $directory - Directory to save the image
     * @param string $prefix - Prefix for filename
     * @param array $options - Processing options (width, height, quality, etc.)
     * @return string - Public path to the saved image
     */
    public function processImage($file, $directory, $prefix = '', $options = [])
    {
        // Default options
        $defaultOptions = [
            'width' => null,
            'height' => null,
            'quality' => 85,
            'crop' => false,
            'generate_meta' => true
        ];
        
        $options = array_merge($defaultOptions, $options);
        
        // Create directory if it doesn't exist
        $publicPath = public_path($directory);
        if (!file_exists($publicPath)) {
            mkdir($publicPath, 0755, true);
        }
        
        // Handle different input types
        if (is_string($file) && str_starts_with($file, 'data:image')) {
            // Base64 string
            $image = $this->manager->read($this->base64ToImage($file));
        } elseif (is_object($file) && method_exists($file, 'getRealPath')) {
            // Uploaded file
            $image = $this->manager->read($file->getRealPath());
        } else {
            throw new \Exception('Invalid image input');
        }
        
        // Get original dimensions
        $originalWidth = $image->width();
        $originalHeight = $image->height();
        
        // Process image based on options
        if ($options['width'] && $options['height']) {
            if ($options['crop']) {
                $image->cover($options['width'], $options['height']);
            } else {
                $image->resize($options['width'], $options['height'], function ($constraint) {
                    $constraint->aspectRatio();
                    $constraint->upsize();
                });
            }
        } elseif ($options['width']) {
            $image->resize($options['width'], null, function ($constraint) {
                $constraint->aspectRatio();
                $constraint->upsize();
            });
        } elseif ($options['height']) {
            $image->resize(null, $options['height'], function ($constraint) {
                $constraint->aspectRatio();
                $constraint->upsize();
            });
        }
        
        // Generate filename
        $extension = $this->getImageExtension($file);
        $filename = $prefix . uniqid() . '.' . $extension;
        $fullPath = $publicPath . '/' . $filename;
        
        // Save image
        $image->toJpeg($options['quality'])->save($fullPath);
        
        // Generate meta description
        $metaDescription = '';
        if ($options['generate_meta']) {
            $metaDescription = $this->generateImageMeta(
                $filename, 
                $originalWidth, 
                $originalHeight, 
                $image->width(), 
                $image->height()
            );
        }
        
        return [
            'path' => '/' . $directory . '/' . $filename,
            'meta_description' => $metaDescription,
            'width' => $image->width(),
            'height' => $image->height(),
            'size' => filesize($fullPath)
        ];
    }
    
    /**
     * Create multiple image sizes for responsive design
     */
    public function createResponsiveImages($file, $directory, $prefix = '', $sizes = [])
    {
        $results = [];
        
        foreach ($sizes as $sizeName => $dimensions) {
            $options = [
                'width' => $dimensions['width'] ?? null,
                'height' => $dimensions['height'] ?? null,
                'quality' => $dimensions['quality'] ?? 85,
                'crop' => $dimensions['crop'] ?? false
            ];
            
            $result = $this->processImage($file, $directory, $prefix . $sizeName . '-', $options);
            $results[$sizeName] = $result;
        }
        
        return $results;
    }
    
    /**
     * Generate meta description for an image
     */
    public function generateImageMeta($filename, $originalWidth, $originalHeight, $finalWidth, $finalHeight)
    {
        $name = pathinfo($filename, PATHINFO_FILENAME);
        $name = str_replace(['-', '_'], ' ', $name);
        $name = ucwords($name);
        
        if ($originalWidth != $finalWidth || $originalHeight != $finalHeight) {
            return "{$name} - Optimized image ({$finalWidth}x{$finalHeight}px, originally {$originalWidth}x{$originalHeight}px)";
        }
        
        return "{$name} - High quality image ({$originalWidth}x{$originalHeight}px)";
    }
    
    /**
     * Convert base64 to image resource
     */
    private function base64ToImage($base64String)
    {
        $image = str_replace('data:image/', '', $base64String);
        $extension = explode(';', $image)[0];
        $image = explode(',', $image)[1];
        $image = str_replace(' ', '+', $image);
        
        return base64_decode($image);
    }
    
    /**
     * Get image extension from file or base64 string
     */
    private function getImageExtension($file)
    {
        if (is_string($file) && str_starts_with($file, 'data:image')) {
            $extension = explode('/', explode(':', substr($file, 0, strpos($file, ';')))[1])[1];
            return $extension === 'jpeg' ? 'jpg' : $extension;
        } elseif (is_object($file) && method_exists($file, 'getClientOriginalExtension')) {
            return $file->getClientOriginalExtension();
        }
        
        return 'jpg';
    }
    
    /**
     * Optimize existing image
     */
    public function optimizeImage($imagePath, $quality = 85)
    {
        $fullPath = public_path($imagePath);
        if (!file_exists($fullPath)) {
            throw new \Exception('Image not found: ' . $imagePath);
        }
        
        $image = $this->manager->read($fullPath);
        $image->toJpeg($quality)->save($fullPath);
        
        return [
            'path' => $imagePath,
            'size' => filesize($fullPath)
        ];
    }
}