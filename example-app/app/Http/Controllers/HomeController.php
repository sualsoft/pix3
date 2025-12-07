<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Home;

class HomeController extends Controller
{
    public function index()
    {
        // Retrieve all active home sections ordered by sort_order
        $sections = Home::where('is_active', true)
            ->orderBy('sort_order')
            ->get();
        
        // Organize data by section
        $homeData = [];
        foreach ($sections as $section) {
            $homeData[$section->section] = [
                'title' => $section->title,
                'description' => $section->description,
                'image_url' => $section->image_url,
                'link_url' => $section->link_url,
                'content' => $section->content,
                'sort_order' => $section->sort_order
            ];
        }
        
        return response()->json($homeData);
    }
}