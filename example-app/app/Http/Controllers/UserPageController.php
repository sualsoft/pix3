<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\ProjectFile; // Import this!
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
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

    // New method to handle slug-based routing
    public function show($slug)
    {
        $project = Project::where('slug', $slug)->with('files')->first();
        
        if (!$project) {
            abort(404);
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

    // Get all projects for listing
    public function getAllProjects()
    {
        $projects = Project::withCount('files')->get();
        
        return response()->json([
            'projects' => $projects
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

    // 6. CREATE NEW PROJECT
    public function createProject(Request $request)
    {
        $validatedData = $request->validate([
            'client_name' => 'required',
            'title' => 'required',
            'slug' => 'required|unique:projects'
        ]);

        $project = Project::create($validatedData);

        return response()->json([
            'message' => 'Projet créé avec succès !',
            'project' => $project
        ]);
    }

    // 7. UPDATE PROJECT
    public function updateProjectDetails(Request $request, $id)
    {
        $project = Project::findOrFail($id);
        
        $validatedData = $request->validate([
            'client_name' => 'required',
            'title' => 'required',
            'slug' => 'required|unique:projects,slug,'.$id
        ]);

        $project->update($validatedData);

        return response()->json([
            'message' => 'Projet mis à jour avec succès !',
            'project' => $project
        ]);
    }

    // 8. DELETE PROJECT
    public function deleteProject($id)
    {
        $project = Project::findOrFail($id);
        
        // Delete all associated files first
        $project->files()->delete();
        
        // Delete the project
        $project->delete();

        return response()->json([
            'message' => 'Projet supprimé avec succès !'
        ]);
    }

    // 9. GET SINGLE PROJECT DATA
    public function getSingleProject($id)
    {
        $project = Project::with('files')->findOrFail($id);
        
        return response()->json($project);
    }

    // Get project by slug for public view
    public function getProjectBySlug($slug)
    {
        $project = Project::where('slug', $slug)->with('files')->firstOrFail();
        
        return response()->json($project);
    }

    // 10. GET MAIN DASHBOARD CONTENT
    public function getMainDashboardContent()
    {
        // For now, we'll use the first project as our main dashboard content
        $project = Project::with('files')->first();
        
        if (!$project) {
            $project = Project::create([
                'client_name' => 'Main Dashboard', 
                'title' => 'Main Content Area',
                'slug' => 'main-dashboard'
            ]);
        }
        
        return response()->json($project);
    }

    // 11. UPDATE MAIN DASHBOARD CONTENT
    public function updateMainDashboardContent(Request $request)
    {
        // Get or create the main dashboard project
        $project = Project::first();
        
        if (!$project) {
            $project = Project::create([
                'client_name' => 'Main Dashboard', 
                'title' => 'Main Content Area',
                'slug' => 'main-dashboard'
            ]);
        }
        
        // Update the project with new content
        $project->update([
            'client_name' => $request->client_name ?? $project->client_name,
            'title' => $request->title ?? $project->title
        ]);
        
        return response()->json([
            'message' => 'Main dashboard content updated successfully!',
            'project' => $project
        ]);
    }

    // 12. ADD CONTENT SECTION TO MAIN DASHBOARD
    public function addMainDashboardSection(Request $request)
    {
        // For now, we'll add content as files to the main project
        $project = Project::first();
        
        if (!$project) {
            $project = Project::create([
                'client_name' => 'Main Dashboard', 
                'title' => 'Main Content Area',
                'slug' => 'main-dashboard'
            ]);
        }
        
        // Validate request
        $validatedData = $request->validate([
            'name' => 'required',
            'type' => 'required',
            'date' => 'required',
            'badge' => 'nullable',
            'youtube_id' => 'nullable',
            'thumbnail_file' => 'nullable|image|max:2048',
            'download_file' => 'nullable|file|max:102400',
            'external_link' => 'nullable|url'
        ]);
        
        // Handle file upload
        $data = [
            'project_id' => $project->id,
            'name' => $validatedData['name'],
            'type' => $validatedData['type'],
            'date' => $validatedData['date'],
            'badge' => $validatedData['badge'] ?? null,
            'youtube_id' => $validatedData['youtube_id'] ?? null
        ];
        
        // Handle Thumbnail
        if ($request->hasFile('thumbnail_file')) {
            $path = $request->file('thumbnail_file')->store('dashboard', 'public');
            $data['thumbnail'] = '/storage/' . $path;
        }
        
        // Handle Main File
        if ($request->filled('external_link')) {
            $data['download_url'] = $request->external_link;
            $data['size'] = 'External Link';
        } elseif ($request->hasFile('download_file')) {
            $path = $request->file('download_file')->store('dashboard', 'public');
            $data['download_url'] = '/storage/' . $path;
            
            $size = $request->file('download_file')->getSize();
            $data['size'] = round($size / 1048576, 2) . ' MB';
        }
        
        // Create the file entry
        $file = ProjectFile::create($data);
        
        return response()->json([
            'message' => 'Content section added successfully!',
            'file' => $file->load('project')
        ]);
    }

    // 13. REFRESH/RESET PROJECT PAGE WITH NEW CONTENT
    public function refreshProjectPage(Request $request, $id)
    {
        $project = Project::findOrFail($id);
        
        // Validate request
        $validatedData = $request->validate([
            'client_name' => 'required',
            'title' => 'required',
            'slug' => 'required|unique:projects,slug,'.$id,
            'reset_content' => 'boolean'
        ]);
        
        // Update project details
        $project->update([
            'client_name' => $validatedData['client_name'],
            'title' => $validatedData['title'],
            'slug' => $validatedData['slug']
        ]);
        
        // If reset_content is true, delete all existing files
        if ($request->reset_content) {
            $project->files()->delete();
        }
        
        return response()->json([
            'message' => 'Project page refreshed successfully!',
            'project' => $project->fresh()->load('files')
        ]);
    }

    // 14. CREATE NEW PAGE FROM TEMPLATE
    public function createPageFromTemplate(Request $request)
    {
        // Validate request
        $validatedData = $request->validate([
            'client_name' => 'required',
            'title' => 'required',
            'slug' => 'required|unique:projects',
            'template_page_id' => 'nullable|exists:projects,id'
        ]);
        
        // Create new project
        $newProject = Project::create([
            'client_name' => $validatedData['client_name'],
            'title' => $validatedData['title'],
            'slug' => $validatedData['slug']
        ]);
        
        // If a template page is specified, copy its content
        if ($request->template_page_id) {
            $templateProject = Project::with('files')->find($request->template_page_id);
            
            if ($templateProject) {
                // Copy all files from template to new project
                foreach ($templateProject->files as $file) {
                    ProjectFile::create([
                        'project_id' => $newProject->id,
                        'name' => $file->name,
                        'type' => $file->type,
                        'date' => $file->date,
                        'badge' => $file->badge,
                        'youtube_id' => $file->youtube_id,
                        'thumbnail' => $file->thumbnail,
                        'download_url' => $file->download_url,
                        'size' => $file->size
                    ]);
                }
            }
        }
        
        return response()->json([
            'message' => 'New page created successfully from template!',
            'project' => $newProject->load('files')
        ]);
    }
}