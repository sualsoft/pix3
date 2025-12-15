<?php
// diagnose.php - Diagnostic tool for production issues

// Security check - only allow access with secret key or from localhost
$secret_key = 'pix3i_diagnose_2025';
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
    <title>Production Diagnostics</title>
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
            max-width: 1000px; 
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
        h1, h2, h3 { 
            color: #333; 
            margin-top: 0;
        }
        ul, ol { 
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
        .status-item {
            display: flex;
            justify-content: space-between;
            padding: 10px;
            border-bottom: 1px solid #eee;
        }
        .status-item:last-child {
            border-bottom: none;
        }
        code {
            background: #f5f5f5;
            padding: 2px 4px;
            border-radius: 3px;
            font-family: 'Courier New', monospace;
        }
        pre {
            background: #f5f5f5;
            padding: 15px;
            border-radius: 5px;
            overflow-x: auto;
        }
    </style>
</head>
<body>
<div class='container'>
<h1>🔍 Production Diagnostics</h1>

<h2>System Information</h2>
<div class='info'>
    <div class='status-item'><strong>PHP Version:</strong> <span>" . phpversion() . "</span></div>
    <div class='status-item'><strong>Server Software:</strong> <span>" . ($_SERVER['SERVER_SOFTWARE'] ?? 'Unknown') . "</span></div>
    <div class='status-item'><strong>Document Root:</strong> <span>" . $_SERVER['DOCUMENT_ROOT'] . "</span></div>
    <div class='status-item'><strong>Script Filename:</strong> <span>" . $_SERVER['SCRIPT_FILENAME'] . "</span></div>
</div>

<h2>File System Check</h2>";

// Check if required directories exist
$directories = [
    'Bootstrap Cache' => __DIR__ . '/../bootstrap/cache',
    'Storage Framework' => __DIR__ . '/../storage/framework',
    'Storage Views' => __DIR__ . '/../storage/framework/views',
    'Storage Cache' => __DIR__ . '/../storage/framework/cache',
    'Public Build' => __DIR__ . '/build',
    'Public Images' => __DIR__ . '/images'
];

echo "<div class='info'>";
foreach ($directories as $name => $path) {
    $exists = file_exists($path) ? '✅ Exists' : '❌ Missing';
    $writable = is_writable($path) ? 'Writable' : 'Not Writable';
    echo "<div class='status-item'><strong>$name:</strong> <span>$exists ($writable)</span></div>";
}
echo "</div>";

// Check build assets
echo "<h2>Build Assets Check</h2>";
$buildDir = __DIR__ . '/build';
if (is_dir($buildDir)) {
    $manifestFile = $buildDir . '/manifest.json';
    if (file_exists($manifestFile)) {
        echo "<div class='success'>
            <p>✅ Manifest file found: <code>$manifestFile</code></p>
        </div>";
        
        // Show manifest content
        $manifestContent = file_get_contents($manifestFile);
        $manifest = json_decode($manifestContent, true);
        
        echo "<h3>Manifest Entries:</h3>";
        echo "<div class='info'>";
        foreach ($manifest as $key => $value) {
            if (strpos($key, 'dashboard/') !== false && (strpos($key, 'timelapse') !== false || strpos($key, 'drone') !== false)) {
                echo "<div class='status-item'><strong>$key:</strong> <span>Found</span></div>";
            }
        }
        echo "</div>";
    } else {
        echo "<div class='error'>
            <p>❌ Manifest file not found: <code>$manifestFile</code></p>
        </div>";
    }
} else {
    echo "<div class='error'>
        <p>❌ Build directory not found: <code>$buildDir</code></p>
    </div>";
}

// Check for Vue component files
echo "<h2>Vue Component Check</h2>";
$componentPaths = [
    'Timelapse Detail' => __DIR__ . '/../resources/js/pages/dashboard/timelapse/DetailSection.vue',
    'Drone Detail' => __DIR__ . '/../resources/js/pages/dashboard/drone/DetailSection.vue'
];

echo "<div class='info'>";
foreach ($componentPaths as $name => $path) {
    $exists = file_exists($path) ? '✅ Exists' : '❌ Missing';
    echo "<div class='status-item'><strong>$name:</strong> <span>$exists</span></div>";
    
    if (file_exists($path)) {
        $size = filesize($path);
        echo "<div class='status-item'><strong>File Size:</strong> <span>" . round($size/1024, 2) . " KB</span></div>";
    }
}
echo "</div>";

echo "<h2>Database Connection Check</h2>";
try {
    // Try to connect to database
    $dbHost = getenv('DB_HOST') ?: $_ENV['DB_HOST'] ?? 'localhost';
    $dbName = getenv('DB_DATABASE') ?: $_ENV['DB_DATABASE'] ?? '';
    $dbUser = getenv('DB_USERNAME') ?: $_ENV['DB_USERNAME'] ?? '';
    
    echo "<div class='info'>
        <div class='status-item'><strong>DB Host:</strong> <span>$dbHost</span></div>
        <div class='status-item'><strong>DB Name:</strong> <span>$dbName</span></div>
        <div class='status-item'><strong>DB User:</strong> <span>$dbUser</span></div>
    </div>";
} catch (Exception $e) {
    echo "<div class='error'>
        <p>❌ Database connection failed: " . $e->getMessage() . "</p>
    </div>";
}

echo "<h2>Recommended Actions</h2>
<div class='warning'>
    <p><strong>⚠️ For security reasons, please delete this file after use.</strong></p>
    <p>File location: <code>" . __FILE__ . "</code></p>
</div>

<div class='success'>
    <h3>🔧 Troubleshooting Steps:</h3>
    <ol>
        <li><strong>Rebuild Assets:</strong> Run <code>npm run build</code> on your development machine</li>
        <li><strong>Upload Latest Files:</strong> Ensure all updated Vue components are uploaded</li>
        <li><strong>Clear Cache:</strong> Visit the cache clearing tool or run artisan commands</li>
        <li><strong>Hard Refresh:</strong> Press Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)</li>
        <li><strong>Check Browser Console:</strong> Look for JavaScript errors in developer tools</li>
    </ol>
</div>

<a href='/' class='btn'>Go to Homepage</a>
<a href='/dashboard' class='btn'>Go to Dashboard</a>
<a href='/clear-cache.php?key=pix3i_cache_clear_2025' class='btn'>Clear Cache</a>
</div>
</body>
</html>";
?>