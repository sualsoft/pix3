<?php

namespace App\Http\Controllers;

use App\Models\ServicePage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServicePageController extends Controller
{
    public function index(Request $request)
    {
        // Check if a category is specified in the request
        $category = $request->query('category');
        
        // If category is specified, filter by it; otherwise, return all
        if ($category) {
            return ServicePage::where('category', $category)->latest()->get();
        }
        
        return ServicePage::latest()->get();
    }

    public function show($category, $slug)
    {
        // Find the service page by category and slug
        $page = ServicePage::where('category', $category)
                          ->where('slug', $slug)
                          ->firstOrFail();
        
        // Get all timelapse and drone pages for the sidebar
        $timelapseLinks = ServicePage::where('category', 'timelapse')
                                   ->orderBy('title')
                                   ->get(['id', 'title', 'slug']);
        
        $droneLinks = ServicePage::where('category', 'drone')
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
        $data['slug'] = \Illuminate\Support\Str::slug($request->title);

        // Handle thumbnail upload
        if ($request->hasFile('thumbnail')) {
            $path = $request->file('thumbnail')->store('services', 'public');
            $data['thumbnail'] = '/storage/' . $path;
        }

        // Handle OG image upload
        if ($request->hasFile('og_image')) {
            $path = $request->file('og_image')->store('seo', 'public');
            $data['og_image'] = '/storage/' . $path;
        }

        // Handle Twitter image upload
        if ($request->hasFile('twitter_image')) {
            $path = $request->file('twitter_image')->store('seo', 'public');
            $data['twitter_image'] = '/storage/' . $path;
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
        
        // Only update slug if title changed
        if ($request->title !== $page->title) {
            $data['slug'] = \Illuminate\Support\Str::slug($request->title);
        }

        // Handle thumbnail update
        if ($request->hasFile('thumbnail')) {
            $path = $request->file('thumbnail')->store('services', 'public');
            $data['thumbnail'] = '/storage/' . $path;
        }

        // Handle OG image update
        if ($request->hasFile('og_image')) {
            $path = $request->file('og_image')->store('seo', 'public');
            $data['og_image'] = '/storage/' . $path;
        }

        // Handle Twitter image update
        if ($request->hasFile('twitter_image')) {
            $path = $request->file('twitter_image')->store('seo', 'public');
            $data['twitter_image'] = '/storage/' . $path;
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