<?php

namespace App\Http\Controllers;

use App\Models\PortfolioItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage; // Important for deleting files

class PortfolioController extends Controller
{
    // 1. GET ALL ITEMS
    public function index()
    {
        return PortfolioItem::latest()->get(); // 'latest' shows newest first
    }

    // 2. SAVE NEW ITEM (Upload or YouTube)
    public function store(Request $request)
    {
        // Validate inputs
        $request->validate([
            'title' => 'required',
            'category' => 'required',
            'type' => 'required',
        ]);

        $finalPath = '';

        // --- LOGIC: HANDLE YOUTUBE ---
        if ($request->type === 'youtube') {
            $url = $request->input('url');
            // Convert "watch?v=" to "embed/" so it plays in iframe
            if (str_contains($url, 'watch?v=')) {
                $url = str_replace('watch?v=', 'embed/', $url);
                // Clean up extra garbage in URL
                if (str_contains($url, '&')) {
                    $url = substr($url, 0, strpos($url, '&'));
                }
            }
            $finalPath = $url;
        } 
        
        // --- LOGIC: HANDLE FILE UPLOAD (Image/Video) ---
        else if ($request->hasFile('file')) {
            // Save file to "storage/app/public/portfolio"
            $path = $request->file('file')->store('portfolio', 'public');
            // Add '/storage/' so the frontend can read it
            $finalPath = '/storage/' . $path;
        } 
        
        // --- LOGIC: ERROR (No file and No URL) ---
        else {
             return response()->json(['message' => 'No file or URL provided'], 400);
        }

        // Create Database Record
        $item = PortfolioItem::create([
            'title' => $request->title,
            'category' => $request->category,
            'type' => $request->type,
            'src' => $finalPath
        ]);

        return response()->json(['message' => 'Saved!', 'data' => $item]);
    }

    // 3. DELETE ITEM
    public function destroy($id)
    {
        $item = PortfolioItem::find($id);

        if (!$item) {
            return response()->json(['message' => 'Item not found'], 404);
        }

        // Optional: Delete the file from folder if it's not YouTube
        if ($item->type !== 'youtube') {
            // Remove '/storage/' to get the real path
            $relativePath = str_replace('/storage/', '', $item->src);
            Storage::disk('public')->delete($relativePath);
        }

        $item->delete();
        return response()->json(['message' => 'Deleted successfully']);
    }
}