<?php

namespace App\Http\Controllers;

use App\Models\ServicePage;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Services\ImageService;

class ServicePageController extends Controller
{
    protected $imageService;

    public function __construct(ImageService $imageService)
    {
        $this->imageService = $imageService;
    }
    public function index(Request $request)
    {
        // Check if a category is specified in the request
        $category = $request->query('category');
        
        // If category is specified, filter by it; otherwise, return all
        if ($category) {
            return ServicePage::where('category', $category)
                           ->orderBy('sort_order')
                           ->orderBy('title')
                           ->get();
        }
        
        return ServicePage::orderBy('sort_order')
                           ->orderBy('title')
                           ->get();
    }

    /**
     * Default hero background image path (used when service page has no thumbnail).
     * Must exist in public/images/ and be deployed to production.
     */
    protected const DEFAULT_HERO_IMAGE = '/images/hero-bg-1765171683.png';

    public function show($category, $slug)
    {
        // Find the service page by category and slug
        $page = ServicePage::where('category', $category)
                          ->where('slug', $slug)
                          ->firstOrFail();
        
        // Ensure thumbnail is always a valid absolute URL for production (APP_URL, CDN, etc.)
        $thumbnail = $page->thumbnail
            ? (str_starts_with($page->thumbnail, 'http') ? $page->thumbnail : asset(ltrim($page->thumbnail, '/')))
            : asset(ltrim(self::DEFAULT_HERO_IMAGE, '/'));
        
        $page = $page->toArray();
        $page['thumbnail'] = $thumbnail;
        
        // Get all timelapse and drone pages for the sidebar, ordered by sort_order
        $timelapseLinks = ServicePage::where('category', 'timelapse')
                                   ->orderBy('sort_order')
                                   ->orderBy('title')
                                   ->get(['id', 'title', 'slug']);
        
        $droneLinks = ServicePage::where('category', 'drone')
                               ->orderBy('sort_order')
                               ->orderBy('title')
                               ->get(['id', 'title', 'slug']);
        
        // Return the Inertia view with the page data and sidebar links
        return Inertia::render('Services/Single', [
            'page' => $page,
            'timelapseLinks' => $timelapseLinks,
            'droneLinks' => $droneLinks,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'category' => 'required',
            'sort_order' => 'nullable|integer|min:0',
            'content' => 'required',
            'meta_title' => 'nullable|string|max:255',
            'meta_description' => 'nullable|string|max:1000',
            'keywords' => 'nullable|string|max:1000',
            'og_title' => 'nullable|string|max:255',
            'og_description' => 'nullable|string|max:1000',
            'og_image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'og_type' => 'nullable|string|max:255',
            'twitter_card' => 'nullable|string|max:255',
            'twitter_title' => 'nullable|string|max:255',
            'twitter_description' => 'nullable|string|max:1000',
            'twitter_image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $data = $request->all();
        // Set default sort_order if not provided
        if (!isset($data['sort_order']) || $data['sort_order'] === null) {
            $data['sort_order'] = 0;
        }
        
        // Process content to preserve line breaks
        if (isset($data['content'])) {
            $data['content'] = preg_replace('/\r\n|\r|\n/', '<br>', $data['content']);
        }
        
        if (isset($data['seo_content'])) {
            $data['seo_content'] = preg_replace('/\r\n|\r|\n/', '<br>', $data['seo_content']);
        }
        
        $data['slug'] = \Illuminate\Support\Str::slug($request->title);

        // Handle thumbnail upload
        if ($request->hasFile('thumbnail')) {
            $file = $request->file('thumbnail');
            $fileName = 'service-' . time() . '-' . $file->getClientOriginalName();
            
            // Create directory if it doesn't exist - follow the same pattern as other images
            $uploadPath = 'images/services';
            if (!file_exists(public_path($uploadPath))) {
                mkdir(public_path($uploadPath), 0755, true);
            }
            
            // Move the file to the images directory
            $file->move(public_path($uploadPath), $fileName);
            $data['thumbnail'] = '/' . $uploadPath . '/' . $fileName;
        }

        // Handle OG image upload
        if ($request->hasFile('og_image')) {
            $file = $request->file('og_image');
            $fileName = 'og-' . time() . '-' . $file->getClientOriginalName();
            
            // Create directory if it doesn't exist - follow the same pattern as other images
            $uploadPath = 'images/seo';
            if (!file_exists(public_path($uploadPath))) {
                mkdir(public_path($uploadPath), 0755, true);
            }
            
            // Move the file to the images directory
            $file->move(public_path($uploadPath), $fileName);
            $data['og_image'] = '/' . $uploadPath . '/' . $fileName;
        }

        // Handle Twitter image upload
        if ($request->hasFile('twitter_image')) {
            $file = $request->file('twitter_image');
            $fileName = 'twitter-' . time() . '-' . $file->getClientOriginalName();
            
            // Create directory if it doesn't exist - follow the same pattern as other images
            $uploadPath = 'images/seo';
            if (!file_exists(public_path($uploadPath))) {
                mkdir(public_path($uploadPath), 0755, true);
            }
            
            // Move the file to the images directory
            $file->move(public_path($uploadPath), $fileName);
            $data['twitter_image'] = '/' . $uploadPath . '/' . $fileName;
        }

        ServicePage::create($data);

        return response()->json(['message' => 'Page créée avec succès !']);
    }

    // NEW: UPDATE FUNCTION
    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required',
            'category' => 'required',
            'sort_order' => 'nullable|integer|min:0',
            'content' => 'required',
            'meta_title' => 'nullable|string|max:255',
            'meta_description' => 'nullable|string|max:1000',
            'keywords' => 'nullable|string|max:1000',
            'og_title' => 'nullable|string|max:255',
            'og_description' => 'nullable|string|max:1000',
            'og_image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'og_type' => 'nullable|string|max:255',
            'twitter_card' => 'nullable|string|max:255',
            'twitter_title' => 'nullable|string|max:255',
            'twitter_description' => 'nullable|string|max:1000',
            'twitter_image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $page = ServicePage::findOrFail($id);

        $data = $request->all();
        // Set default sort_order if not provided
        if (!isset($data['sort_order']) || $data['sort_order'] === null) {
            $data['sort_order'] = 0;
        }
        
        // Process content to preserve line breaks
        if (isset($data['content'])) {
            $data['content'] = preg_replace('/\r\n|\r|\n/', '<br>', $data['content']);
        }
        
        if (isset($data['seo_content'])) {
            $data['seo_content'] = preg_replace('/\r\n|\r|\n/', '<br>', $data['seo_content']);
        }
        
        // Only update slug if title changed
        if ($request->title !== $page->title) {
            $data['slug'] = \Illuminate\Support\Str::slug($request->title);
        }

        // Handle thumbnail update
        if ($request->hasFile('thumbnail')) {
            try {
                $result = $this->imageService->processImage(
                    $request->file('thumbnail'),
                    'images/services',
                    'service-',
                    ['width' => 800, 'height' => 600, 'quality' => 85]
                );
                $data['thumbnail'] = $result['path'];
                $data['thumbnail_meta_description'] = $result['meta_description'];
            } catch (\Exception $e) {
                return response()->json(['message' => 'Thumbnail processing failed: ' . $e->getMessage()], 500);
            }
        }

        // Handle OG image update
        if ($request->hasFile('og_image')) {
            try {
                $result = $this->imageService->processImage(
                    $request->file('og_image'),
                    'images/seo',
                    'og-',
                    ['width' => 1200, 'height' => 630, 'quality' => 85]
                );
                $data['og_image'] = $result['path'];
                $data['og_image_meta_description'] = $result['meta_description'];
            } catch (\Exception $e) {
                return response()->json(['message' => 'OG image processing failed: ' . $e->getMessage()], 500);
            }
        }

        // Handle Twitter image update
        if ($request->hasFile('twitter_image')) {
            try {
                $result = $this->imageService->processImage(
                    $request->file('twitter_image'),
                    'images/seo',
                    'twitter-',
                    ['width' => 1200, 'height' => 600, 'quality' => 85]
                );
                $data['twitter_image'] = $result['path'];
                $data['twitter_image_meta_description'] = $result['meta_description'];
            } catch (\Exception $e) {
                return response()->json(['message' => 'Twitter image processing failed: ' . $e->getMessage()], 500);
            }
        }

        $page->update($data);

        return response()->json(['message' => 'Page mise à jour !']);
    }

    public function destroy($id)
    {
        $page = ServicePage::find($id);
        if ($page) {
            $page->delete();
            return response()->json(['message' => 'Page supprimée !']);
        }
        return response()->json(['message' => 'Page non trouvée !'], 404);
    }
}