<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

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

Route::get('/user', function () {
    return Inertia::render('User');
})->name('user');

require __DIR__.'/dashboard.php';
require __DIR__.'/settings.php';

