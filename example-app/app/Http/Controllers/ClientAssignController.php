<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class ClientAssignController extends Controller
{
    /**
     * Assign an existing user to a project
     */
    public function assignUserToProject(Request $request)
    {
        $validatedData = $request->validate([
            'project_id' => 'required|exists:projects,id',
            'user_id' => 'required|exists:users,id'
        ]);

        // Get the project and user
        $project = Project::findOrFail($validatedData['project_id']);
        $user = User::findOrFail($validatedData['user_id']);

        // Associate the user with the project
        $project->users()->attach($user->id);
        
        return response()->json([
            'message' => 'User assigned to project successfully!',
            'project' => $project,
            'user' => $user
        ]);
    }

    /**
     * Create a new user and assign to a project
     */
    public function createAndAssignUser(Request $request)
    {
        $validatedData = $request->validate([
            'project_id' => 'required|exists:projects,id',
            'new_user_name' => 'required|string|max:255',
            'new_user_email' => 'required|email|unique:users,email',
            'new_user_password' => ['required', Password::min(8)]
        ]);

        // Create the new user
        $user = User::create([
            'name' => $validatedData['new_user_name'],
            'email' => $validatedData['new_user_email'],
            'password' => Hash::make($validatedData['new_user_password'])
        ]);

        // Get the project
        $project = Project::findOrFail($validatedData['project_id']);

        // Associate the user with the project
        $project->users()->attach($user->id);
        
        return response()->json([
            'message' => 'New user created and assigned to project successfully!',
            'project' => $project,
            'user' => $user
        ]);
    }

    /**
     * Get assigned users for a project
     */
    public function getAssignedUsers($projectId)
    {
        $project = Project::with('users')->findOrFail($projectId);
        
        return response()->json([
            'users' => $project->users
        ]);
    }
}