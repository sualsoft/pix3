<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\UserPageController;
use App\Http\Controllers\ServicePageController;
use App\Http\Controllers\SitemapController;

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
Route::get('/legal-privacy-policy', function () { return Inertia::render('LegalPrivacyPolicy'); })->name('legal-privacy-policy');

// Sitemap route
Route::get('/sitemap.xml', [SitemapController::class, 'index']);

// Robots.txt route
Route::get('/robots.txt', function () {
    $sitemapUrl = url('/sitemap.xml');
    $content = "User-agent: *\nDisallow:\n\nSitemap: {$sitemapUrl}\n";
    
    return response($content, 200, [
        'Content-Type' => 'text/plain'
    ]);
});

// TEMPORARY: Route to clear caches in production
Route::get('/clear-cache', function () {
    // Clear config cache
    if (file_exists(app()->bootstrapPath().'/cache/config.php')) {
        unlink(app()->bootstrapPath().'/cache/config.php');
    }
    
    // Clear route cache
    $routeCacheFiles = glob(app()->bootstrapPath().'/cache/routes-*.php');
    foreach ($routeCacheFiles as $file) {
        if (file_exists($file)) {
            unlink($file);
        }
    }
    
    // Clear view cache
    $viewCacheDir = app()->storagePath().'/framework/views';
    if (is_dir($viewCacheDir)) {
        $files = glob($viewCacheDir.'/*');
        foreach ($files as $file) {
            if (is_file($file)) {
                unlink($file);
            }
        }
    }
    
    return 'Caches cleared!';
});

// Add this to your routes/web.php file (temporary for testing)
Route::get('/test-email', function () {
    try {
        // Fetch email from database like the contact controller does
        $setting = \App\Models\SiteSetting::where('key', 'general')->first();
        $adminEmail = 'agence.pix3i@pix3i.com'; // Default fallback
        
        if ($setting) {
            // Since content is already cast to array in the model, we don't need to decode it
            $content = $setting->content;
            if (isset($content['email']) && !empty($content['email'])) {
                $adminEmail = $content['email'];
            }
        }
        
        // Try to send a test email
        \Illuminate\Support\Facades\Mail::raw('Test email from PIX3i website', function ($message) use ($adminEmail) {
            $message->to($adminEmail)
                    ->subject('Test Email from PIX3i');
        });
        
        return 'Test email sent successfully to: ' . $adminEmail;
    } catch (\Exception $e) {
        return 'Error sending test email: ' . $e->getMessage();
    }
});

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