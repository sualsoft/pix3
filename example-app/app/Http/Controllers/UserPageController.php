<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\ProjectFile; // Import this!
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserPageController extends Controller
{
    public function index()
    {
        $project = Project::with('files')->first();
        
        // --- DEBUG TEST ---
        // Uncomment the line below, save, and refresh your User Page.
        // dd($project); 
        // ------------------

        if (!$project) {
            // If this runs, your database is EMPTY.
            // We create a default one so the page doesn't crash.
            $project = Project::create([
                'client_name' => 'Jean (Défaut)', 
                'title' => 'Projet Demo'
            ]);
        }

        $totalFiles = $project->files->count();
        $newTimelapses = $project->files->where('type', 'video')->count();

        return Inertia::render('User', [
            'project' => $project,
            'files' => $project->files,
            'stats' => [
                'total_files' => $totalFiles,
                'new_timelapses' => $newTimelapses
            ]
        ]);
    }

    // --- API FOR CMS ---

    // 2. GET DATA (For Admin)
    public function getProjectData()
    {
        $project = Project::with('files')->first();
        if (!$project) {
            $project = Project::create(['client_name' => 'Client', 'title' => 'Projet']);
        }
        return response()->json($project);
    }

    // 3. UPDATE PROJECT INFO (Name/Title)
    public function updateProject(Request $request)
    {
        $project = Project::first();
        $project->update([
            'client_name' => $request->client_name,
            'title' => $request->title
        ]);
        return response()->json(['message' => 'Projet mis à jour !']);
    }

    // 4. ADD NEW FILE (Updated for Drive Links)
    public function storeFile(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'type' => 'required',
            'date' => 'required'
        ]);

        $project = Project::first();
        $data = $request->all();

        // 1. Handle Thumbnail (Always an image upload)
        if ($request->hasFile('thumbnail_file')) {
            $path = $request->file('thumbnail_file')->store('projects', 'public');
            $data['thumbnail'] = '/storage/' . $path;
        }

        // 2. Handle Main File: UPLOAD vs LINK
        if ($request->filled('external_link')) {
            // Case A: It is a Google Drive / External Link
            $data['download_url'] = $request->external_link;
            $data['size'] = 'Lien Externe'; // We can't calculate size of links easily
        } 
        elseif ($request->hasFile('download_file')) {
            // Case B: It is a Local Upload
            $path = $request->file('download_file')->store('projects', 'public');
            $data['download_url'] = '/storage/' . $path;
            
            // Calculate size (MB)
            $size = $request->file('download_file')->getSize();
            $data['size'] = round($size / 1048576, 2) . ' MB';
        }

        $project->files()->create($data);

        return response()->json(['message' => 'Fichier ajouté avec succès !']);
    }

    // 5. DELETE FILE
    public function destroyFile($id)
    {
        $file = ProjectFile::find($id);
        if ($file) {
            $file->delete();
            return response()->json(['message' => 'Fichier supprimé']);
        }
        return response()->json(['message' => 'Erreur'], 404);
    }
}