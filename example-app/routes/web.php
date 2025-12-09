<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\UserPageController;
use App\Http\Controllers\ServicePageController;

/*
|--------------------------------------------------------------------------
| 1. PUBLIC ROUTES
|--------------------------------------------------------------------------
*/
Route::get('/', function () { return Inertia::render('Home'); })->name('home');
Route::get('/timelapse', function () { return Inertia::render('Timelapse'); })->name('timelapse');
Route::get('/drone', function () { return Inertia::render('Drone'); })->name('drone');
Route::get('/portfolio', function () { return Inertia::render('Portfolio'); })->name('portfolio');
Route::get('/contact', function () { return Inertia::render('Contact'); })->name('contact');

// Dynamic Pages
Route::get('/{category}/{slug}', [ServicePageController::class, 'show'])
    ->where('category', 'drone|timelapse');

/*
|--------------------------------------------------------------------------
| 2. AUTH ROUTES
|--------------------------------------------------------------------------
*/
Route::get('/login', function () { return Inertia::render('Login'); })->name('login');
Route::get('/register', function () { return Inertia::render('Register'); })->name('register');

/*
|--------------------------------------------------------------------------
| 3. PROTECTED ROUTES
|--------------------------------------------------------------------------
*/
Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {

    // --- TRAFFIC CONTROLLER ---
    Route::get('/dashboard', function (Request $request) {
        
        // 1. Check the Role
        if ($request->user()->role === 'user') {
            return redirect()->route('user.index');
        }
        
        // 2. If Admin, show the Main Dashboard (As you requested)
        return Inertia::render('Dashboard'); 
        
    })->name('dashboard');


    // --- ADMIN ROUTES (Loads your Sidebar items) ---
    Route::middleware(['role:admin'])->group(function () {
        
        // This is the ONLY line needed to make your sidebar links work
        require __DIR__.'/dashboard.php';

    });


    // --- USER ROUTES ---
    Route::get('/user', [UserPageController::class, 'index'])->name('user.index');

});