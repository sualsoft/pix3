<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SiteSetting;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class SettingsController extends Controller
{
    // 1. UPDATE GENERAL SETTINGS
    public function updateGeneral(Request $request)
    {
        // Find the 'general' box in the database
        $setting = SiteSetting::where('key', 'general')->first();

        // Update the content with what came from the form
        if ($setting) {
            $setting->content = $request->all(); // Save everything sent
            $setting->save();
            return response()->json(['message' => 'Settings updated successfully!']);
        }

        return response()->json(['message' => 'Error: Setting not found'], 404);
    }

    // 2. UPLOAD LOGO
    public function uploadLogo(Request $request)
    {
        $request->validate([
            'logo' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        if ($request->hasFile('logo')) {
            $file = $request->file('logo');
            
            // Generate a unique filename
            $filename = 'logo_' . Str::random(10) . '.' . $file->getClientOriginalExtension();
            
            // Store the file in the public disk
            $path = $file->storeAs('logos', $filename, 'public');
            
            // Return the URL to the uploaded file
            $logoUrl = Storage::url($path);
            
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


}