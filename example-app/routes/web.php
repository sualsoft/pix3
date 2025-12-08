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

require __DIR__.'/dashboard.php';
require __DIR__.'/settings.php';

