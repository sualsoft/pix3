<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('dashboard')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/general', function () {
        return Inertia::render('dashboard/General');
    })->name('dashboard.general');

    Route::get('/social-links', function () {
        return Inertia::render('dashboard/SocialLinks');
    })->name('dashboard.social-links');

    Route::get('/footer-menu', function () {
        return Inertia::render('dashboard/FooterMenu');
    })->name('dashboard.footer-menu');

    Route::get('/navbar-menu', function () {
        return Inertia::render('dashboard/NavbarMenu');
    })->name('dashboard.navbar-menu');

    Route::get('/general/cta', function () {
        return Inertia::render('dashboard/CtaSettings');
    })->name('dashboard.general.cta');

    Route::get('/home', function () {
        return Inertia::render('dashboard/Home');
    })->name('dashboard.home');
    
    Route::prefix('home')->group(function () {
        Route::get('/hero', function () {
            return Inertia::render('dashboard/home/Hero');
        })->name('dashboard.home.hero');
        
        Route::get('/about', function () {
            return Inertia::render('dashboard/home/About');
        })->name('dashboard.home.about');
        
        Route::get('/services', function () {
            return Inertia::render('dashboard/home/Services');
        })->name('dashboard.home.services');
        
        Route::get('/testimonials', function () {
            return Inertia::render('dashboard/home/Testimonials');
        })->name('dashboard.home.testimonials');
        
        Route::get('/why-pix3', function () {
            return Inertia::render('dashboard/home/WhyPix3');
        })->name('dashboard.home.why-pix3');
        
        Route::get('/gallery', function () {
            return Inertia::render('dashboard/home/Gallery');
        })->name('dashboard.home.gallery');
        
        Route::get('/cta', function () {
            return Inertia::render('dashboard/home/Cta');
        })->name('dashboard.home.cta');
    });

    Route::get('/timelapse', function () {
        return Inertia::render('dashboard/Timelapse');
    })->name('dashboard.timelapse');

    Route::get('/drone', function () {
        return Inertia::render('dashboard/Drone');
    })->name('dashboard.drone');

    Route::get('/portfolio', function () {
        return Inertia::render('dashboard/Portfolio');
    })->name('dashboard.portfolio');

    Route::get('/contact', function () {
        return Inertia::render('dashboard/Contact');
    })->name('dashboard.contact');
});