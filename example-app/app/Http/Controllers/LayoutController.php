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
        $cta = SiteSetting::where('key', 'cta')->first();
        $home_hero = SiteSetting::where('key', 'home_hero')->first();
        $home_services = SiteSetting::where('key', 'home_services')->first();
        $home_why = SiteSetting::where('key', 'home_why')->first();
        $home_about = SiteSetting::where('key', 'home_about')->first();
        $home_gallery = SiteSetting::where('key', 'home_gallery')->first();
        $contact_hero = SiteSetting::where('key', 'contact_hero')->first();
        $contact_map = SiteSetting::where('key', 'contact_map')->first();
        $portfolio_hero = SiteSetting::where('key', 'portfolio_hero')->first();
        $timelapse_hero = SiteSetting::where('key', 'timelapse_hero')->first();
        $drone_hero = SiteSetting::where('key', 'drone_hero')->first();

        // 2. Send it all to Vue as JSON
        return response()->json([
            'navbar'  => $navbar ? $navbar->content : [],
            'footer'  => $footer ? $footer->content : [],
            'general' => $general ? $general->content : [],
            'social' => $social ? $social->content : [],
            'cta'     => $cta ? $cta->content : [],
            'home_hero'     => $home_hero ? $home_hero->content : [],
            'home_services' => $home_services ? $home_services->content : [],
            'home_why'      => $home_why ? $home_why->content : [],
            'home_about'    => $home_about ? $home_about->content : [],
            'home_gallery'  => $home_gallery ? $home_gallery->content : [],
            'contact_hero'  => $contact_hero ? $contact_hero->content : [],
            'contact_map'   => $contact_map ? $contact_map->content : [],
            'portfolio_hero'  => $portfolio_hero ? $portfolio_hero->content : [],
            'timelapse_hero'  => $timelapse_hero ? $timelapse_hero->content : [],
            'drone_hero'  => $drone_hero ? $drone_hero->content : [],
        ]);
    }
}