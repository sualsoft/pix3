<?php

namespace App\Http\Controllers;

use App\Models\SiteSetting;
use Illuminate\Http\Request;

class LayoutController extends Controller
{
    public function index()
    {
        // 1. Fetch the data from the database
        $navbar  = SiteSetting::where('key', 'navbar')->first();
        $footer  = SiteSetting::where('key', 'footer')->first();
        $general = SiteSetting::where('key', 'general')->first(); 
        $social  = SiteSetting::where('key', 'social')->first(); 

        // 2. Send it all to Vue as JSON
        return response()->json([
            'navbar'  => $navbar ? $navbar->content : [],
            'footer'  => $footer ? $footer->content : [],
            'general' => $general ? $general->content : [],
            'social' => $social ? $social->content : [],
        ]);
    }
}