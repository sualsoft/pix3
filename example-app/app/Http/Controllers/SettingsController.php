<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SiteSetting;


class SettingsController extends Controller
{
    

    // 1. UPDATE GENERAL SETTINGS (Without CTA)
    public function updateGeneral(Request $request)
    {
        $setting = SiteSetting::where('key', 'general')->first();

        if (!$setting) {
            $setting = new SiteSetting();
            $setting->key = 'general';
        }

        // Saves Phone, Email, Address, Logo, Description
        $setting->content = $request->all();
        $setting->save();

        return response()->json(['message' => 'Settings updated successfully!']);
    }

    // 2. UPLOAD LOGO (Directly to Public Folder)
    public function uploadLogo(Request $request)
    {
        if ($request->hasFile('logo')) {
            $file = $request->file('logo');
            
            // 1. Clean Filename
            $filename = 'logo-' . time() . '.' . $file->getClientOriginalExtension();
            
            // 2. Move to Public Folder
            $file->move(public_path('images'), $filename);
            
            // 3. Return URL
            $logoUrl = '/images/' . $filename;
            
            return response()->json(['logo_url' => $logoUrl]);
        }

        return response()->json(['error' => 'No file uploaded'], 400);
    }

    // 3. UPDATE SOCIAL LINKS
    public function updateSocial(Request $request)
    {
        // Find the 'social' box in the database
        $setting = SiteSetting::where('key', 'social')->first();

        if (!$setting) {
            // Create if it doesn't exist
            $setting = new SiteSetting();
            $setting->key = 'social';
        }

        // Update the content with what came from the form
        $setting->content = $request->all();
        $setting->save();

        return response()->json(['message' => 'Social links updated successfully!']);
    }

    // 4. UPDATE FOOTER MENU
    public function updateFooter(Request $request)
    {
        // Find the 'footer' box in the database
        $setting = SiteSetting::where('key', 'footer')->first();

        if (!$setting) {
            // Create if it doesn't exist
            $setting = new SiteSetting();
            $setting->key = 'footer';
        }

        // Update the content with what came from the form
        $setting->content = $request->all();
        $setting->save();

        return response()->json(['message' => 'Footer menu updated successfully!']);
    }

    // 5. UPDATE NAVBAR MENU
    public function updateNavbar(Request $request)
    {
        // Find the 'navbar' box in the database
        $setting = SiteSetting::where('key', 'navbar')->first();

        if (!$setting) {
            // Create if it doesn't exist
            $setting = new SiteSetting();
            $setting->key = 'navbar';
        }

        // Update the content with what came from the form
        $setting->content = $request->all();
        $setting->save();

        return response()->json(['message' => 'Navbar menu updated successfully!']);
    }

    // 6. UPDATE CTA SETTINGS
    public function updateCta(Request $request)
    {
    // Find the 'cta' box
    $setting = SiteSetting::where('key', 'cta')->first();

    if ($setting) {
        // Save the new data (Title, Button Text, Link)
        $setting->content = $request->all();
        $setting->save();
        return response()->json(['message' => 'CTA updated successfully!']);
    }

    return response()->json(['message' => 'Error: CTA setting not found'], 404);
    }

    // 7. UPDATE HERO SECTION

    public function updateHero(Request $request)
    {
    $data = $request->all();
    
    if (isset($data['bg_image']) && str_contains($data['bg_image'], 'data:image')) {
        
        // 1. Decode the Base64 image
        $image_64 = $data['bg_image']; 
        $extension = explode('/', explode(':', substr($image_64, 0, strpos($image_64, ';')))[1])[1];
        $replace = substr($image_64, 0, strpos($image_64, ',')+1); 
        $image = str_replace($replace, '', $image_64); 
        $image = str_replace(' ', '+', $image); 
        
        
        $imageName = 'hero-bg-' . time() . '.' . $extension;
        // Ensure the images directory exists
        if (!file_exists(public_path('images'))) {
            mkdir(public_path('images'), 0755, true);
        }
        file_put_contents(public_path('images/' . $imageName), base64_decode($image));

        
        $data['bg_image'] = '/images/' . $imageName;
    }

   
    $setting = \App\Models\SiteSetting::where('key', 'home_hero')->first();
    if ($setting) {
        $setting->content = $data;
        $setting->save();
        return response()->json(['message' => 'Hero updated successfully!', 'data' => $data]);
    }

    return response()->json(['message' => 'Error: Hero setting not found'], 404);
    }

    // 8. UPDATE HOME service SECTION
    public function updateServices(Request $request)
{
    $services = $request->all(); // This gets the array of services

    $cleanServices = [];

    foreach ($services as $service) {
        // IMAGE HANDLING LOGIC
        // If it's a Base64 string (New Upload)
        if (isset($service['image']) && str_contains($service['image'], 'data:image')) {
            
            // 1. Decode Image
            $image_64 = $service['image']; 
            $extension = explode('/', explode(':', substr($image_64, 0, strpos($image_64, ';')))[1])[1];
            $replace = substr($image_64, 0, strpos($image_64, ',')+1); 
            $image = str_replace($replace, '', $image_64); 
            $image = str_replace(' ', '+', $image); 
            
            // 2. Create Unique Name
            $imageName = 'service-' . uniqid() . '.' . $extension;
            
            // 3. Save to Public Folder
            file_put_contents(public_path('images/' . $imageName), base64_decode($image));

            // 4. Update the array with the new path
            $service['image'] = '/images/' . $imageName;
        }
        
        // If it's just a text URL (from internet), we do nothing and keep it as is.

        $cleanServices[] = $service;
    }

    // SAVE TO DATABASE
    $setting = \App\Models\SiteSetting::where('key', 'home_services')->first();
    if (!$setting) {
        $setting = new \App\Models\SiteSetting();
        $setting->key = 'home_services';
    }
    
    $setting->content = $cleanServices;
    $setting->save();

    return response()->json(['message' => 'Services updated successfully!', 'data' => $cleanServices]);
    }

    // 9. UPDATE HOME WHY SECTION

    public function updateWhy(Request $request)
{
    $data = $request->all(); // This is the array of feature cards

    // Save directly to DB
    $setting = \App\Models\SiteSetting::where('key', 'home_why')->first();
    
    if (!$setting) {
        $setting = new \App\Models\SiteSetting();
        $setting->key = 'home_why';
    }
    
    $setting->content = $data;
    $setting->save();

    return response()->json(['message' => 'Features updated successfully!']);
    }

    // 10. UPDATE ABOUT SECTION
    public function updateAbout(Request $request)
    {
        $setting = SiteSetting::where('key', 'home_about')->first();
        if (!$setting) {
            $setting = new SiteSetting();
            $setting->key = 'home_about';
        }
        $setting->content = $request->all();
        $setting->save();
        return response()->json(['message' => 'About section updated!']);
    }

    // 11. UPDATE GALLERY SECTION
    public function updateGallery(Request $request)
    {
        $data = $request->all(); // { title: '...', images: [...] }
        $cleanImages = [];

        if (isset($data['images']) && is_array($data['images'])) {
            foreach ($data['images'] as $img) {
                // Check if it's a NEW Base64 upload
                if (str_contains($img, 'data:image')) {
                    // Decode and Save
                    $image_64 = $img; 
                    $extension = explode('/', explode(':', substr($image_64, 0, strpos($image_64, ';')))[1])[1];
                    $replace = substr($image_64, 0, strpos($image_64, ',')+1); 
                    $image = str_replace($replace, '', $image_64); 
                    $image = str_replace(' ', '+', $image); 
                    
                    $imageName = 'gallery-' . uniqid() . '.' . $extension;
                    
                    if (!file_exists(public_path('images/gallery'))) {
                        mkdir(public_path('images/gallery'), 0755, true);
                    }
                    
                    file_put_contents(public_path('images/gallery/' . $imageName), base64_decode($image));
                    $cleanImages[] = '/images/gallery/' . $imageName;
                } else {
                    // It's already a URL, keep it
                    $cleanImages[] = $img;
                }
            }
        }

        $setting = SiteSetting::where('key', 'home_gallery')->first();
        if (!$setting) {
            $setting = new SiteSetting();
            $setting->key = 'home_gallery';
        }
        
        // Save structure
        $setting->content = [
            'title' => $data['title'] ?? 'Prises de vue',
            'images' => $cleanImages
        ];
        $setting->save();

        return response()->json(['message' => 'Gallery updated!', 'data' => $setting->content]);
    }

    // 12. UPDATE CONTACT HERO SECTION
    public function updateContactHero(Request $request)
    {
        $data = $request->all(); // Expects: { title: '...', bg_image: '...' }
        
        // Retrieve existing setting or create new
        $setting = SiteSetting::where('key', 'contact_hero')->first();
        if (!$setting) {
            $setting = new SiteSetting();
            $setting->key = 'contact_hero';
            $setting->content = ['title' => '', 'bg_image' => '']; // Initialize to avoid null errors
        }

        $currentContent = $setting->content;
        $finalImage = $currentContent['bg_image'] ?? null; // Default to existing image

        // Handle Image Upload
        if (isset($data['bg_image'])) {
            $img = $data['bg_image'];

            // Check if it is a Base64 string (New Upload)
            if (str_contains($img, 'data:image')) {
                $image_64 = $img;
                
                // Extract extension
                $extension = explode('/', explode(':', substr($image_64, 0, strpos($image_64, ';')))[1])[1];
                
                // Clean the string
                $replace = substr($image_64, 0, strpos($image_64, ',') + 1);
                $image = str_replace($replace, '', $image_64);
                $image = str_replace(' ', '+', $image);
                
                // Generate name and path
                $imageName = 'Contact-hero-' . uniqid() . '.' . $extension;
                $path = public_path('images/hero');

                // Create folder if not exists
                if (!file_exists($path)) {
                    mkdir($path, 0755, true);
                }

                // Save File
                file_put_contents($path . '/' . $imageName, base64_decode($image));
                
                // Set the public path for the database
                $finalImage = '/images/hero/' . $imageName;
            } else {
                // If it's not base64, assume it's an existing URL or text
                $finalImage = $img;
            }
        }

        // Save structure
        $setting->content = [
            'title'    => $data['title'] ?? ($currentContent['title'] ?? 'Nous Contacter'),
            'bg_image' => $finalImage
        ];
        
        $setting->save();

        return response()->json(['message' => 'Hero section updated!', 'data' => $setting->content]);
    }

    // 13. Update Portfolio Hero
    public function updatePortfolioHero(Request $request)
    {
        $data = $request->all(); // Expects: { title: '...', bg_image: '...' }
        
        // Retrieve existing setting or create new
        $setting = SiteSetting::where('key', 'portfolio_hero')->first();
        if (!$setting) {
            $setting = new SiteSetting();
            $setting->key = 'portfolio_hero';
            $setting->content = ['title' => '', 'bg_image' => '']; // Initialize to avoid null errors
        }

        $currentContent = $setting->content;
        $finalImage = $currentContent['bg_image'] ?? null; // Default to existing image

        // Handle Image Upload
        if (isset($data['bg_image'])) {
            $img = $data['bg_image'];

            // Check if it is a Base64 string (New Upload)
            if (str_contains($img, 'data:image')) {
                $image_64 = $img;
                
                // Extract extension
                $extension = explode('/', explode(':', substr($image_64, 0, strpos($image_64, ';')))[1])[1];
                
                // Clean the string
                $replace = substr($image_64, 0, strpos($image_64, ',') + 1);
                $image = str_replace($replace, '', $image_64);
                $image = str_replace(' ', '+', $image);
                
                // Generate name and path
                $imageName = 'portfolio-hero-' . uniqid() . '.' . $extension;
                $path = public_path('images/hero');

                // Create folder if not exists
                if (!file_exists($path)) {
                    mkdir($path, 0755, true);
                }

                // Save File
                file_put_contents($path . '/' . $imageName, base64_decode($image));
                
                // Set the public path for the database
                $finalImage = '/images/hero/' . $imageName;
            } else {
                // If it's not base64, assume it's an existing URL or text
                $finalImage = $img;
            }
        }

        // Save structure
        $setting->content = [
            'title'    => $data['title'] ?? ($currentContent['title'] ?? 'Nous Contacter'),
            'bg_image' => $finalImage
        ];
        
        $setting->save();

        return response()->json(['message' => 'Hero section updated!', 'data' => $setting->content]);
    }

    // 14. Update timelapse Hero
    public function updateTimelapseHero(Request $request)
    {
        $data = $request->all(); // Expects: { title: '...', bg_image: '...' }
        
        // Retrieve existing setting or create new
        $setting = SiteSetting::where('key', 'timelapse_hero')->first();
        if (!$setting) {
            $setting = new SiteSetting();
            $setting->key = 'timelapse_hero';
            $setting->content = ['title' => '', 'bg_image' => '']; // Initialize to avoid null errors
        }

        $currentContent = $setting->content;
        $finalImage = $currentContent['bg_image'] ?? null; // Default to existing image

        // Handle Image Upload
        if (isset($data['bg_image'])) {
            $img = $data['bg_image'];

            // Check if it is a Base64 string (New Upload)
            if (str_contains($img, 'data:image')) {
                $image_64 = $img;
                
                // Extract extension
                $extension = explode('/', explode(':', substr($image_64, 0, strpos($image_64, ';')))[1])[1];
                
                // Clean the string
                $replace = substr($image_64, 0, strpos($image_64, ',') + 1);
                $image = str_replace($replace, '', $image_64);
                $image = str_replace(' ', '+', $image);
                
                // Generate name and path
                $imageName = 'timelapse-hero-' . uniqid() . '.' . $extension;
                $path = public_path('images/hero');

                // Create folder if not exists
                if (!file_exists($path)) {
                    mkdir($path, 0755, true);
                }

                // Save File
                file_put_contents($path . '/' . $imageName, base64_decode($image));
                
                // Set the public path for the database
                $finalImage = '/images/hero/' . $imageName;
            } else {
                // If it's not base64, assume it's an existing URL or text
                $finalImage = $img;
            }
        }

        // Save structure
        $setting->content = [
            'title'    => $data['title'] ?? ($currentContent['title'] ?? 'Nous Contacter'),
            'bg_image' => $finalImage
        ];
        
        $setting->save();

        return response()->json(['message' => 'Hero section updated!', 'data' => $setting->content]);
    }

    // 15. Update drone Hero
    public function updateDroneHero(Request $request)
    {
        $data = $request->all(); // Expects: { title: '...', bg_image: '...' }
        
        // Retrieve existing setting or create new
        $setting = SiteSetting::where('key', 'drone_hero')->first();
        if (!$setting) {
            $setting = new SiteSetting();
            $setting->key = 'drone_hero';
            $setting->content = ['title' => '', 'bg_image' => '']; // Initialize to avoid null errors
        }

        $currentContent = $setting->content;
        $finalImage = $currentContent['bg_image'] ?? null; // Default to existing image

        // Handle Image Upload
        if (isset($data['bg_image'])) {
            $img = $data['bg_image'];

            // Check if it is a Base64 string (New Upload)
            if (str_contains($img, 'data:image')) {
                $image_64 = $img;
                
                // Extract extension
                $extension = explode('/', explode(':', substr($image_64, 0, strpos($image_64, ';')))[1])[1];
                
                // Clean the string
                $replace = substr($image_64, 0, strpos($image_64, ',') + 1);
                $image = str_replace($replace, '', $image_64);
                $image = str_replace(' ', '+', $image);
                
                // Generate name and path
                $imageName = 'drone-hero-' . uniqid() . '.' . $extension;
                $path = public_path('images/hero');

                // Create folder if not exists
                if (!file_exists($path)) {
                    mkdir($path, 0755, true);
                }

                // Save File
                file_put_contents($path . '/' . $imageName, base64_decode($image));
                
                // Set the public path for the database
                $finalImage = '/images/hero/' . $imageName;
            } else {
                // If it's not base64, assume it's an existing URL or text
                $finalImage = $img;
            }
        }

        // Save structure
        $setting->content = [
            'title'    => $data['title'] ?? ($currentContent['title'] ?? 'Nous Contacter'),
            'bg_image' => $finalImage
        ];
        
        $setting->save();

        return response()->json(['message' => 'Hero section updated!', 'data' => $setting->content]);
    }

    // 16. UPDATE CONTACT MAP
    public function updateContactMap(Request $request)
    {
        // Validate that we received an iframe string
        $request->validate([
            'iframe' => 'required|string',
        ]);

        $setting = SiteSetting::where('key', 'contact_map')->first();
        if (!$setting) {
            $setting = new SiteSetting();
            $setting->key = 'contact_map';
        }

        // Save exactly what the user pasted
        $setting->content = ['iframe' => $request->iframe];
        $setting->save();

        return response()->json(['message' => 'Map updated successfully!', 'data' => $setting->content]);
    }

    // 17. UPDATE TIMELAPSE DETAILS (Text + 3 Images)
    public function updateTimelapseDetail(Request $request)
    {
        $data = $request->all();
        $cleanImages = [];

        // Handle the 3 Images
        if (isset($data['images']) && is_array($data['images'])) {
            foreach ($data['images'] as $img) {
                // Check if New Image Upload (Base64)
                if (str_contains($img, 'data:image')) {
                    $image_64 = $img; 
                    $extension = explode('/', explode(':', substr($image_64, 0, strpos($image_64, ';')))[1])[1];
                    $replace = substr($image_64, 0, strpos($image_64, ',')+1); 
                    $image = str_replace($replace, '', $image_64); 
                    $image = str_replace(' ', '+', $image); 
                    
                    $imageName = 'tl-detail-' . uniqid() . '.' . $extension;
                    if (!file_exists(public_path('images/timelapse'))) {
                        mkdir(public_path('images/timelapse'), 0755, true);
                    }
                    file_put_contents(public_path('images/timelapse/' . $imageName), base64_decode($image));
                    
                    $cleanImages[] = '/images/timelapse/' . $imageName;
                } else {
                    // Keep existing URL
                    $cleanImages[] = $img;
                }
            }
        }

        $setting = SiteSetting::firstOrNew(['key' => 'timelapse_detail']);
        $setting->content = [
            'title' => $data['title'],
            'description' => $data['description'],
            'images' => $cleanImages
        ];
        $setting->save();

        return response()->json(['message' => 'Détails mis à jour !']);
    }

    // 18. UPDATE TIMELAPSE VIDEOS (List of Videos)
    public function updateTimelapseVideos(Request $request)
    {
        $data = $request->all(); // { title: '...', videos: [...] }
        $cleanVideos = [];

        if (isset($data['videos']) && is_array($data['videos'])) {
            foreach ($data['videos'] as $video) {
                // Handle Thumbnail Upload
                if (isset($video['thumbnail']) && str_contains($video['thumbnail'], 'data:image')) {
                    $image_64 = $video['thumbnail'];
                    $extension = explode('/', explode(':', substr($image_64, 0, strpos($image_64, ';')))[1])[1];
                    $replace = substr($image_64, 0, strpos($image_64, ',')+1); 
                    $image = str_replace($replace, '', $image_64); 
                    $image = str_replace(' ', '+', $image); 
                    
                    $imageName = 'tl-video-' . uniqid() . '.' . $extension;
                     if (!file_exists(public_path('images/timelapse'))) {
                        mkdir(public_path('images/timelapse'), 0755, true);
                    }
                    file_put_contents(public_path('images/timelapse/' . $imageName), base64_decode($image));
                    
                    $video['thumbnail'] = '/images/timelapse/' . $imageName;
                }
                
                $cleanVideos[] = $video;
            }
        }

        $setting = SiteSetting::firstOrNew(['key' => 'timelapse_videos']);
        $setting->content = [
            'title' => $data['title'],
            'videos' => $cleanVideos
        ];
        $setting->save();

        return response()->json(['message' => 'Vidéos mises à jour !']);
    }
    // 19. UPDATE DRONE DETAILS
    public function updateDroneDetail(Request $request)
    {
        $data = $request->all();
        $cleanImages = [];

        if (isset($data['images']) && is_array($data['images'])) {
            foreach ($data['images'] as $img) {
                if (str_contains($img, 'data:image')) {
                    $image_64 = $img; 
                    $extension = explode('/', explode(':', substr($image_64, 0, strpos($image_64, ';')))[1])[1];
                    $replace = substr($image_64, 0, strpos($image_64, ',')+1); 
                    $image = str_replace($replace, '', $image_64); 
                    $image = str_replace(' ', '+', $image); 
                    
                    $imageName = 'drone-detail-' . uniqid() . '.' . $extension;
                    if (!file_exists(public_path('images/drone'))) {
                        mkdir(public_path('images/drone'), 0755, true);
                    }
                    file_put_contents(public_path('images/drone/' . $imageName), base64_decode($image));
                    $cleanImages[] = '/images/drone/' . $imageName;
                } else {
                    $cleanImages[] = $img;
                }
            }
        }

        $setting = SiteSetting::firstOrNew(['key' => 'drone_detail']);
        $setting->content = [
            'title' => $data['title'],
            'description' => $data['description'],
            'images' => $cleanImages
        ];
        $setting->save();

        return response()->json(['message' => 'Détails Drone mis à jour !']);
    }

    // 20. UPDATE DRONE VIDEOS
    public function updateDroneVideos(Request $request)
    {
        $data = $request->all();
        $cleanVideos = [];

        if (isset($data['videos']) && is_array($data['videos'])) {
            foreach ($data['videos'] as $video) {
                if (isset($video['thumbnail']) && str_contains($video['thumbnail'], 'data:image')) {
                    $image_64 = $video['thumbnail'];
                    $extension = explode('/', explode(':', substr($image_64, 0, strpos($image_64, ';')))[1])[1];
                    $replace = substr($image_64, 0, strpos($image_64, ',')+1); 
                    $image = str_replace($replace, '', $image_64); 
                    $image = str_replace(' ', '+', $image); 
                    
                    $imageName = 'drone-video-' . uniqid() . '.' . $extension;
                    if (!file_exists(public_path('images/drone'))) {
                        mkdir(public_path('images/drone'), 0755, true);
                    }
                    file_put_contents(public_path('images/drone/' . $imageName), base64_decode($image));
                    
                    $video['thumbnail'] = '/images/drone/' . $imageName;
                }
                $cleanVideos[] = $video;
            }
        }

        $setting = SiteSetting::firstOrNew(['key' => 'drone_videos']);
        $setting->content = [
            'title' => $data['title'],
            'videos' => $cleanVideos
        ];
        $setting->save();

        return response()->json(['message' => 'Vidéos Drone mises à jour !']);
    }

}