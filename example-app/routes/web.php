<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Controllers\ServicePageController;
use App\Http\Controllers\UserPageController;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/timelapse', function () {
    return Inertia::render('Timelapse');
})->name('timelapse');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::get('/portfolio', function () {
    return Inertia::render('Portfolio');
})->name('portfolio');

Route::get('/drone', function () {
    return Inertia::render('Drone');
})->name('drone');

Route::get('/login', function () {
    return Inertia::render('Login');
})->name('login');

Route::get('/register', function () {
    return Inertia::render('Register');
})->name('register');

Route::get('/user', [UserPageController::class, 'index'])->name('user');

Route::get('/singlepage', function () {
    return Inertia::render('SinglePage');
})->name('singlepage');
 
Route::get('/dashboard', [UserPageController::class, 'index'])->name('dashboard');

// This wildcard route catches links like /timelapse/my-page or /drone/my-page
Route::get('/{category}/{slug}', [ServicePageController::class, 'show'])
    ->where('category', 'drone|timelapse');
    

require __DIR__.'/dashboard.php';
require __DIR__.'/settings.php';

