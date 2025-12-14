<?php
// clear-cache.php - Temporary cache clearing script for production

// Only allow access from localhost or with a secret key
$secret_key = 'pix3i_cache_clear_2025';
if (!isset($_GET['key']) || $_GET['key'] !== $secret_key) {
    // Allow localhost access
    if ($_SERVER['REMOTE_ADDR'] !== '127.0.0.1' && $_SERVER['REMOTE_ADDR'] !== '::1') {
        header('HTTP/1.0 403 Forbidden');
        die('Access denied');
    }
}

echo "<!DOCTYPE html>
<html>
<head>
    <title>Cache Clearing Tool</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; background: #f5f5f5; }
        .container { max-width: 800px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .success { color: #2e7d32; background: #c8e6c9; padding: 15px; border-radius: 4px; margin: 10px 0; }
        .info { color: #01579b; background: #b3e5fc; padding: 15px; border-radius: 4px; margin: 10px 0; }
        .warning { color: #e65100; background: #ffe0b2; padding: 15px; border-radius: 4px; margin: 10px 0; }
        h1 { color: #333; }
        ul { line-height: 1.6; }
        .btn { display: inline-block; background: #2196f3; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin: 10px 0; }
    </style>
</head>
<body>
<div class='container'>
<h1>Cache Clearing Tool</h1>";

function clearDirectory($dir) {
    if (!is_dir($dir)) {
        return "Directory not found: $dir<br>";
    }
    
    $files = glob($dir . '/*');
    $count = 0;
    foreach ($files as $file) {
        if (is_file($file)) {
            unlink($file);
            $count++;
        }
    }
    return "Cleared $count files from $dir<br>";
}

function clearRecursiveDirectory($dir) {
    if (!is_dir($dir)) {
        return "Directory not found: $dir<br>";
    }
    
    $count = 0;
    $files = new RecursiveIteratorIterator(
        new RecursiveDirectoryIterator($dir, RecursiveDirectoryIterator::SKIP_DOTS),
        RecursiveIteratorIterator::CHILD_FIRST
    );
    
    foreach ($files as $fileinfo) {
        $todo = ($fileinfo->isDir() ? 'rmdir' : 'unlink');
        $todo($fileinfo->getRealPath());
        $count++;
    }
    return "Cleared $count items from $dir<br>";
}

echo "<div class='info'>Clearing application caches...</div>";

// Clear config cache
$configCache = __DIR__ . '/../bootstrap/cache/config.php';
if (file_exists($configCache)) {
    unlink($configCache);
    echo "<div class='success'>✓ Config cache cleared</div>";
} else {
    echo "<div class='info'>○ No config cache found</div>";
}

// Clear route cache
$routeCachePattern = __DIR__ . '/../bootstrap/cache/routes*.php';
$routeCacheFiles = glob($routeCachePattern);
$cleared = 0;
foreach ($routeCacheFiles as $file) {
    unlink($file);
    $cleared++;
    echo "<div class='success'>✓ Route cache cleared: " . basename($file) . "</div>";
}
if ($cleared == 0) {
    echo "<div class='info'>○ No route cache files found</div>";
}

// Clear view cache
$viewCacheDir = __DIR__ . '/../storage/framework/views';
echo "<div class='info'>" . clearDirectory($viewCacheDir) . "</div>";

// Clear cache storage
$cacheDir = __DIR__ . '/../storage/framework/cache/data';
echo "<div class='info'>" . clearRecursiveDirectory($cacheDir) . "</div>";

echo "<div class='success'>
    <h2>All caches cleared successfully!</h2>
    <p><strong>Important:</strong> For security reasons, please delete this file after use.</p>
    <p><a href='/' class='btn'>Go to Homepage</a></p>
</div>

<h3>Next Steps:</h3>
<ul>
    <li>Test the contact form again</li>
    <li>If issues persist, check the Laravel log file at <code>/storage/logs/laravel.log</code></li>
    <li>Verify your email configuration in the <code>.env</code> file</li>
    <li>Delete this file for security: <code>" . __FILE__ . "</code></li>
</ul>
</div>
</body>
</html>";
?>