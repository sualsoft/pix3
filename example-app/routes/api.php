<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LayoutController;
use App\Http\Controllers\SettingsController;
use App\Http\Controllers\HomeController;

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

// home page data
Route::get('/home', [HomeController::class, 'index']);