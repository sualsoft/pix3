<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('dashboard')->group(function () {

    // General
    Route::get('/general', function () { return Inertia::render('dashboard/General'); })->name('dashboard.general');
    Route::get('/social-links', function () { return Inertia::render('dashboard/SocialLinks'); })->name('dashboard.social-links');
    Route::get('/footer-menu', function () { return Inertia::render('dashboard/FooterMenu'); })->name('dashboard.footer-menu');
    Route::get('/navbar-menu', function () { return Inertia::render('dashboard/NavbarMenu'); })->name('dashboard.navbar-menu');
    Route::get('/general/cta', function () { return Inertia::render('dashboard/CtaSettings'); })->name('dashboard.general.cta');

    Route::get('/home', function () { return Inertia::render('dashboard/Home'); })->name('dashboard.home');
    
    Route::prefix('home')->group(function () {
        Route::get('/hero', function () { return Inertia::render('dashboard/home/Hero'); })->name('dashboard.home.hero');
        Route::get('/about', function () { return Inertia::render('dashboard/home/About'); })->name('dashboard.home.about');
        Route::get('/services', function () { return Inertia::render('dashboard/home/Services'); })->name('dashboard.home.services');
        Route::get('/testimonials', function () { return Inertia::render('dashboard/home/Testimonials'); })->name('dashboard.home.testimonials');
        Route::get('/why-pix3', function () { return Inertia::render('dashboard/home/WhyPix3'); })->name('dashboard.home.why-pix3');
        Route::get('/gallery', function () { return Inertia::render('dashboard/home/Gallery'); })->name('dashboard.home.gallery');
        Route::get('/cta', function () { return Inertia::render('dashboard/home/Cta'); })->name('dashboard.home.cta');
    });

    Route::get('/timelapse', function () { return Inertia::render('dashboard/Timelapse'); })->name('dashboard.timelapse');
    Route::get('/drone', function () { return Inertia::render('dashboard/Drone'); })->name('dashboard.drone');
    Route::get('/portfolio', function () { return Inertia::render('dashboard/Portfolio'); })->name('dashboard.portfolio');

    // Portfolio Group
    Route::prefix('portfolio')->group(function () {
        Route::get('/innerhero', function () { return Inertia::render('dashboard/portfolio/InnerHero'); })->name('dashboard.portfolio.innerhero');
        Route::get('/items', function () { return Inertia::render('dashboard/portfolio/Items'); })->name('dashboard.portfolio.items');
    }); 

    // Contact Group
    Route::prefix('contact')->group(function () {
        Route::get('/innerhero', function () { return Inertia::render('dashboard/contact/InnerHero'); })->name('dashboard.contact.innerhero');
        Route::get('/map', function () { return Inertia::render('dashboard/contact/Map'); })->name('dashboard.contact.map');
    });

    // Timelapse Group
    Route::prefix('timelapse')->group(function () {
        Route::get('/innerhero', function () { return Inertia::render('dashboard/timelapse/InnerHero'); })->name('dashboard.timelapse.innerhero');
        Route::get('/detailsection', function () { return Inertia::render('dashboard/timelapse/DetailSection'); })->name('dashboard.timelapse.detailsection');
        Route::get('/videosection', function () { return Inertia::render('dashboard/timelapse/VideoSection'); })->name('dashboard.timelapse.videosection');
        Route::get('/pagemanager', function () { return Inertia::render('dashboard/timelapse/PageManager'); })->name('dashboard.timelapse.pagemanager');
    });

    // Drone Group
    Route::prefix('drone')->group(function () {
        Route::get('/innerhero', function () { return Inertia::render('dashboard/drone/InnerHero'); })->name('dashboard.drone.innerhero');
        Route::get('/detailsection', function () { return Inertia::render('dashboard/drone/DetailSection'); })->name('dashboard.drone.detailsection');
        Route::get('/videosection', function () { return Inertia::render('dashboard/drone/VideoSection'); })->name('dashboard.drone.videosection');
        Route::get('/pagemanager', function () { return Inertia::render('dashboard/drone/PageManager'); })->name('dashboard.drone.pagemanager');
    });

    // User Group - KEPT EXACTLY AS YOU WANTED
    Route::get('/user', function () {
        return Inertia::render('dashboard/user/User');
    })->name('dashboard.user.user');

    // User Group - KEPT EXACTLY AS YOU WANTED
    Route::get('/setting', function () {
        return Inertia::render('dashboard/setting/Setting');
    })->name('dashboard.setting.setting');

});