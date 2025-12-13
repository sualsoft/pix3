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

        // Handle OG image upload
        $ogImagePath = null;
        if ($request->hasFile('og_image')) {
            $path = $request->file('og_image')->store('seo', 'public');
            $ogImagePath = '/storage/' . $path;
        }

        // Handle Twitter image upload
        $twitterImagePath = null;
        if ($request->hasFile('twitter_image')) {
            $path = $request->file('twitter_image')->store('seo', 'public');
            $twitterImagePath = '/storage/' . $path;
        }

        // Save to Database
        $item = PortfolioItem::create([
            'title'       => $request->title,
            'category'    => $request->category,
            'type'        => $request->type,
            'src'         => $finalPath,
            'seo_content' => $request->seo_content ?? '',
            'meta_title' => $request->meta_title ?? '',
            'meta_description' => $request->meta_description ?? '',
            'keywords' => $request->keywords ?? '',
            'og_title' => $request->og_title ?? '',
            'og_description' => $request->og_description ?? '',
            'og_image' => $ogImagePath,
            'og_type' => $request->og_type ?? 'website',
            'twitter_card' => $request->twitter_card ?? 'summary_large_image',
            'twitter_title' => $request->twitter_title ?? '',
            'twitter_description' => $request->twitter_description ?? '',
            'twitter_image' => $twitterImagePath,
        ]);

        return response()->json(['message' => '✅ Élément ajouté avec succès !', 'item' => $item]);
    }

    // 3. DELETE ITEM
    public function destroy($id)
    {
        $item = PortfolioItem::find($id);
        if (!$item) {
            return response()->json(['message' => 'Item not found'], 404);
        }

        // If item has a file (not YouTube), delete it from storage
        if ($item->type !== 'youtube' && $item->src) {
            // Remove '/storage/' prefix to get the actual path
            $filePath = str_replace('/storage/', '', $item->src);
            Storage::disk('public')->delete($filePath);
        }

        // Delete OG image if it exists
        if ($item->og_image) {
            $filePath = str_replace('/storage/', '', $item->og_image);
            Storage::disk('public')->delete($filePath);
        }

        // Delete Twitter image if it exists
        if ($item->twitter_image) {
            $filePath = str_replace('/storage/', '', $item->twitter_image);
            Storage::disk('public')->delete($filePath);
        }

        $item->delete();
        return response()->json(['message' => 'Item deleted successfully']);
    }

    // 4. UPDATE ITEM
    public function update(Request $request, $id)
    {
        // Validate inputs
        $request->validate([
            'title' => 'required',
            'category' => 'required',
            'type' => 'required',
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

        $item = PortfolioItem::findOrFail($id);

        $data = $request->all();
        
        // Handle file update if a new file is uploaded
        if ($request->hasFile('file')) {
            // Delete old file if it exists and is not a YouTube link
            if ($item->type !== 'youtube' && $item->src) {
                $oldFilePath = str_replace('/storage/', '', $item->src);
                Storage::disk('public')->delete($oldFilePath);
            }
            
            // Save new file
            $path = $request->file('file')->store('portfolio', 'public');
            $data['src'] = '/storage/' . $path;
        } 
        // Handle YouTube URL update
        else if ($request->type === 'youtube' && $request->filled('url')) {
            $url = $request->input('url');
            // Convert "watch?v=" to "embed/" so it plays in iframe
            if (str_contains($url, 'watch?v=')) {
                $url = str_replace('watch?v=', 'embed/', $url);
                // Clean up extra garbage in URL
                if (str_contains($url, '&')) {
                    $url = substr($url, 0, strpos($url, '&'));
                }
            }
            $data['src'] = $url;
        }

        // Handle OG image update
        if ($request->hasFile('og_image')) {
            // Delete old OG image if it exists
            if ($item->og_image) {
                $oldFilePath = str_replace('/storage/', '', $item->og_image);
                Storage::disk('public')->delete($oldFilePath);
            }
            
            // Save new OG image
            $path = $request->file('og_image')->store('seo', 'public');
            $data['og_image'] = '/storage/' . $path;
        }

        // Handle Twitter image update
        if ($request->hasFile('twitter_image')) {
            // Delete old Twitter image if it exists
            if ($item->twitter_image) {
                $oldFilePath = str_replace('/storage/', '', $item->twitter_image);
                Storage::disk('public')->delete($oldFilePath);
            }
            
            // Save new Twitter image
            $path = $request->file('twitter_image')->store('seo', 'public');
            $data['twitter_image'] = '/storage/' . $path;
        }

        $item->update($data);

        return response()->json(['message' => 'Item updated successfully']);
    }
}