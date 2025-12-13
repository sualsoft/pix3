<?php

namespace App\Http\Controllers;

use App\Models\SiteSetting;
use Illuminate\Http\Request;

class LayoutController extends Controller
{
    public function index()
    {
        // 1. Get ALL settings from Database
        $navbar = SiteSetting::where('key', 'navbar')->first();
        $footer = SiteSetting::where('key', 'footer')->first();
        $general = SiteSetting::where('key', 'general')->first();
        $social = SiteSetting::where('key', 'social')->first();
        $cta = SiteSetting::where('key', 'cta')->first();
        $home_hero = SiteSetting::where('key', 'home_hero')->first();
        $home_services = SiteSetting::where('key', 'home_services')->first();
        $home_why = SiteSetting::where('key', 'home_why')->first();
        $home_about = SiteSetting::where('key', 'home_about')->first();
        $home_gallery = SiteSetting::where('key', 'home_gallery')->first();
        $home_seo = SiteSetting::where('key', 'home_seo')->first();
        $contact_hero = SiteSetting::where('key', 'contact_hero')->first();
        $contact_map = SiteSetting::where('key', 'contact_map')->first();
        $contact_seo = SiteSetting::where('key', 'contact_seo')->first();
        $portfolio_hero = SiteSetting::where('key', 'portfolio_hero')->first();
        $portfolio_seo = SiteSetting::where('key', 'portfolio_seo')->first();
        $timelapse_hero = SiteSetting::where('key', 'timelapse_hero')->first();
        $timelapse_seo = SiteSetting::where('key', 'timelapse_seo')->first();
        $drone_hero = SiteSetting::where('key', 'drone_hero')->first();
        $drone_seo = SiteSetting::where('key', 'drone_seo')->first();
        $timelapse_detail = SiteSetting::where('key', 'timelapse_detail')->first();
        $timelapse_videos = SiteSetting::where('key', 'timelapse_videos')->first();
        $drone_detail = SiteSetting::where('key', 'drone_detail')->first();
        $drone_videos = SiteSetting::where('key', 'drone_videos')->first();

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
            'home_seo'      => $home_seo ? $home_seo->content : [],
            'contact_hero'  => $contact_hero ? $contact_hero->content : [],
            'contact_map'   => $contact_map ? $contact_map->content : [],
            'contact_seo'   => $contact_seo ? $contact_seo->content : [],
            'portfolio_hero'  => $portfolio_hero ? $portfolio_hero->content : [],
            'portfolio_seo'   => $portfolio_seo ? $portfolio_seo->content : [],
            'timelapse_hero'  => $timelapse_hero ? $timelapse_hero->content : [],
            'timelapse_seo'   => $timelapse_seo ? $timelapse_seo->content : [],
            'drone_hero'  => $drone_hero ? $drone_hero->content : [],
            'drone_seo'   => $drone_seo ? $drone_seo->content : [],
            'timelapse_detail' => $timelapse_detail ? $timelapse_detail->content : [],
            'timelapse_videos' => $timelapse_videos ? $timelapse_videos->content : [],
            'drone_detail' => $drone_detail ? $drone_detail->content : [],
            'drone_videos' => $drone_videos ? $drone_videos->content : [],
        ]);
    }
}