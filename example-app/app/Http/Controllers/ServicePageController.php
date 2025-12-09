<?php

namespace App\Http\Controllers;

use App\Models\ServicePage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServicePageController extends Controller
{
    // This function handles the Single Page view
    public function show($category, $slug)
    {
        // 1. Find the specific page the user requested
        $page = ServicePage::where('category', $category)
                           ->where('slug', $slug)
                           ->firstOrFail();

        // 2. Get the lists for the Sidebar (Auto-Navigation)
        $timelapseLinks = ServicePage::where('category', 'timelapse')->get(['title', 'slug', 'category']);
        $droneLinks = ServicePage::where('category', 'drone')->get(['title', 'slug', 'category']);

        // 3. Send everything to Vue
        return Inertia::render('Services/Single', [
            'page' => $page,
            'timelapseLinks' => $timelapseLinks,
            'droneLinks' => $droneLinks
        ]);
    }
    // --- API FOR CMS ---

    public function index(Request $request)
    {
        // If the Frontend asks for ?category=timelapse, filter the results
        if ($request->has('category')) {
            return ServicePage::where('category', $request->category)->get();
        }
        
        // Otherwise return everything (for the Admin Panel list)
        return ServicePage::latest()->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'category' => 'required',
            'content' => 'required',
        ]);

        $data = $request->all();
        $data['slug'] = \Illuminate\Support\Str::slug($request->title);

        if ($request->hasFile('thumbnail')) {
            $path = $request->file('thumbnail')->store('services', 'public');
            $data['thumbnail'] = '/storage/' . $path;
        }

        ServicePage::create($data);

        return response()->json(['message' => 'Page créée avec succès !']);
    }

    // NEW: UPDATE FUNCTION
    public function update(Request $request, $id)
    {
        $page = ServicePage::findOrFail($id);

        $data = $request->all();
        
        // Only update slug if title changed
        if ($request->title !== $page->title) {
            $data['slug'] = \Illuminate\Support\Str::slug($request->title);
        }

        // Handle Image Update
        if ($request->hasFile('thumbnail')) {
            $path = $request->file('thumbnail')->store('services', 'public');
            $data['thumbnail'] = '/storage/' . $path;
        }

        $page->update($data);

        return response()->json(['message' => 'Page mise à jour !']);
    }

    public function destroy($id)
    {
        $page = ServicePage::find($id);
        if ($page) {
            $page->delete();
            return response()->json(['message' => 'Page supprimée']);
        }
        return response()->json(['message' => 'Erreur'], 404);
    }

    
}