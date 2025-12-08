<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LayoutController;
use App\Http\Controllers\SettingsController;

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
