<?php
// clear-cache.php - Enhanced cache clearing script for production

// Security check - only allow access with secret key or from localhost
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
    <title>Enhanced Cache Clearing Tool</title>
    <meta charset='utf-8'>
    <style>
        body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            margin: 0; 
            padding: 20px; 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }
        .container { 
            max-width: 800px; 
            margin: 0 auto; 
            background: white; 
            padding: 30px; 
            border-radius: 10px; 
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        .success { 
            color: #2e7d32; 
            background: #c8e6c9; 
            padding: 15px; 
            border-radius: 5px; 
            margin: 10px 0; 
            border-left: 4px solid #4caf50;
        }
        .info { 
            color: #01579b; 
            background: #b3e5fc; 
            padding: 15px; 
            border-radius: 5px; 
            margin: 10px 0; 
            border-left: 4px solid #03a9f4;
        }
        .warning { 
            color: #e65100; 
            background: #ffe0b2; 
            padding: 15px; 
            border-radius: 5px; 
            margin: 10px 0; 
            border-left: 4px solid #ff9800;
        }
        .error { 
            color: #c62828; 
            background: #ffcdd2; 
            padding: 15px; 
            border-radius: 5px; 
            margin: 10px 0; 
            border-left: 4px solid #f44336;
        }
        h1, h2 { 
            color: #333; 
            margin-top: 0;
        }
        ul { 
            line-height: 1.6; 
        }
        .btn { 
            display: inline-block; 
            background: #2196f3; 
            color: white; 
            padding: 12px 24px; 
            text-decoration: none; 
            border-radius: 5px; 
            margin: 10px 0; 
            font-weight: bold;
            border: none;
            cursor: pointer;
            transition: background 0.3s;
        }
        .btn:hover {
            background: #1976d2;
        }
        .btn-success {
            background: #4caf50;
        }
        .btn-success:hover {
            background: #388e3c;
        }
        .status-item {
            display: flex;
            justify-content: space-between;
            padding: 10px;
            border-bottom: 1px solid #eee;
        }
        .status-item:last-child {
            border-bottom: none;
        }
    </style>
</head>
<body>
<div class='container'>
<h1>🔧 Enhanced Cache Clearing Tool</h1>
<h2>Clearing Application Caches...</h2>";

function clearDirectory($dir) {
    if (!is_dir($dir)) {
        return "Directory not found: $dir";
    }
    
    $files = glob($dir . '/*');
    $count = 0;
    foreach ($files as $file) {
        if (is_file($file)) {
            unlink($file);
            $count++;
        }
    }
    return "Cleared $count files from $dir";
}

function clearRecursiveDirectory($dir) {
    if (!is_dir($dir)) {
        return "Directory not found: $dir";
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
    return "Cleared $count items from $dir";
}

// Function to clear Laravel caches
function clearLaravelCaches() {
    $results = [];
    
    // Clear config cache
    $configCache = __DIR__ . '/../bootstrap/cache/config.php';
    if (file_exists($configCache)) {
        unlink($configCache);
        $results[] = ['Config cache', '✅ Cleared'];
    } else {
        $results[] = ['Config cache', 'ℹ️ Not found'];
    }

    // Clear route cache
    $routeCachePattern = __DIR__ . '/../bootstrap/cache/routes*.php';
    $routeCacheFiles = glob($routeCachePattern);
    $cleared = 0;
    foreach ($routeCacheFiles as $file) {
        unlink($file);
        $cleared++;
    }
    $results[] = ['Route cache', $cleared > 0 ? "✅ Cleared $cleared files" : 'ℹ️ No files found'];

    // Clear view cache
    $viewCacheDir = __DIR__ . '/../storage/framework/views';
    $viewResult = clearDirectory($viewCacheDir);
    $results[] = ['View cache', $viewResult];

    // Clear cache storage
    $cacheDir = __DIR__ . '/../storage/framework/cache/data';
    $cacheResult = clearRecursiveDirectory($cacheDir);
    $results[] = ['Cache storage', $cacheResult];

    return $results;
}

// Clear Laravel caches
$cacheResults = clearLaravelCaches();

echo "<div class='info'>";
foreach ($cacheResults as $result) {
    echo "<div class='status-item'>";
    echo "<span><strong>{$result[0]}:</strong></span>";
    echo "<span>{$result[1]}</span>";
    echo "</div>";
}
echo "</div>";

echo "<h2>Additional Actions</h2>";
echo "<div class='warning'>
    <p><strong>⚠️ Important:</strong> For security reasons, please delete this file after use.</p>
    <p>File location: <code>" . __FILE__ . "</code></p>
</div>";

echo "<div class='success'>
    <h3>✅ All caches cleared successfully!</h3>
    <p><strong>Next Steps:</strong></p>
    <ul>
        <li>Refresh your dashboard in the browser</li>
        <li>If issues persist, try hard refreshing (Ctrl+F5 or Cmd+Shift+R)</li>
        <li>Check browser developer tools for any JavaScript errors</li>
        <li>Verify that the updated Vue components are loaded</li>
    </ul>
    <a href='/' class='btn btn-success'>Go to Homepage</a>
    <a href='/dashboard' class='btn'>Go to Dashboard</a>
</div>

<h3>Troubleshooting Tips:</h3>
<ul>
    <li><strong>Hard Refresh:</strong> Press Ctrl+F5 (Windows) or Cmd+Shift+R (Mac) to bypass browser cache</li>
    <li><strong>Check Network Tab:</strong> In browser dev tools, verify that the latest JS/CSS files are loaded</li>
    <li><strong>Clear Browser Cache:</strong> Manually clear your browser cache for this site</li>
    <li><strong>Check File Permissions:</strong> Ensure web server has write permissions to storage directories</li>
</ul>
</div>
</body>
</html>";
?>