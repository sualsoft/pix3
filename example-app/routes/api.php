<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LayoutController;
use App\Http\Controllers\SettingsController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\PortfolioController;
use App\Http\Controllers\ServicePageController;
use App\Http\Controllers\UserPageController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// genaral details received
Route::get('/layout', [LayoutController::class, 'index']);

// genaral details update
Route::post('/settings/general', [SettingsController::class, 'updateGeneral']);

// logo upload
Route::post('/settings/upload-logo', [SettingsController::class, 'uploadLogo']);

// social links update
Route::post('/settings/social', [SettingsController::class, 'updateSocial']);

// footer menu update
Route::post('/settings/footer', [SettingsController::class, 'updateFooter']);

// navbar menu update
Route::post('/settings/navbar', [SettingsController::class, 'updateNavbar']);

// CTA update
Route::post('/settings/cta', [SettingsController::class, 'updateCta']);

// hero section update
Route::post('/settings/hero', [SettingsController::class, 'updateHero']);

// services section update
Route::post('/settings/services', [SettingsController::class, 'updateServices']);

// why section update
Route::post('/settings/why', [SettingsController::class, 'updateWhy']);

// about section update
Route::post('/settings/about', [SettingsController::class, 'updateAbout']);

// gallery section update
Route::post('/settings/gallery', [SettingsController::class, 'updateGallery']);

//Home SEO update
Route::post('/settings/home-seo', [SettingsController::class, 'updateHomeSeo']);

//Contact hero section update
Route::post('/settings/contact-hero', [SettingsController::class, 'updateContactHero']);

//Contact map update
Route::post('/settings/contact-map', [SettingsController::class, 'updateContactMap']);

//Contact SEO update
Route::post('/settings/contact-seo', [SettingsController::class, 'updateContactSeo']);

//Portfolio SEO update
Route::post('/settings/portfolio-seo', [SettingsController::class, 'updatePortfolioSeo']);

//Drone SEO update
Route::post('/settings/drone-seo', [SettingsController::class, 'updateDroneSeo']);

//Timelapse SEO update
Route::post('/settings/timelapse-seo', [SettingsController::class, 'updateTimelapseSeo']);

//Email
Route::post('/contact-send', [ContactController::class, 'sendEmail']);


// PORTFOLIO ITEMS MANAGER
Route::get('/portfolio', [PortfolioController::class, 'index']);
Route::post('/portfolio', [PortfolioController::class, 'store']);
Route::post('/portfolio/{id}', [PortfolioController::class, 'update']);
Route::delete('/portfolio/{id}', [PortfolioController::class, 'destroy']);


//Portfolio hero section update
Route::post('/settings/portfolio-hero', [SettingsController::class, 'updatePortfolioHero']);

//Timelapse hero section update
Route::post('/settings/timelapse-hero', [SettingsController::class, 'updateTimelapseHero']);

//Drone hero section update
Route::post('/settings/drone-hero', [SettingsController::class, 'updateDroneHero']);


// Service Pages CMS
Route::get('/service-pages', [ServicePageController::class, 'index']);
Route::post('/service-pages', [ServicePageController::class, 'store']);
// NEW: Route for updating (We use POST because files are involved)
Route::post('/service-pages/{id}', [ServicePageController::class, 'update']);
Route::delete('/service-pages/{id}', [ServicePageController::class, 'destroy']);

//service
Route::post('/settings/timelapse-detail', [SettingsController::class, 'updateTimelapseDetail']);
Route::post('/settings/timelapse-videos', [SettingsController::class, 'updateTimelapseVideos']);
Route::post('/settings/drone-detail', [SettingsController::class, 'updateDroneDetail']);

// User Project CMS
Route::get('/user-project', [UserPageController::class, 'getProjectData']);
Route::post('/user-project/info', [UserPageController::class, 'updateProject']);
Route::post('/user-project/file', [UserPageController::class, 'storeFile']);
Route::delete('/user-project/file/{id}', [UserPageController::class, 'destroyFile']);

Route::get('/dashboard', [UserPageController::class, 'index'])->name('user.dashboard');

// Settings Page Routes
Route::post('/settings/profile', [SettingsController::class, 'updateProfile']);
Route::post('/settings/new-admin', [SettingsController::class, 'storeAdmin']);