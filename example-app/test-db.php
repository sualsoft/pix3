<?php
require_once 'vendor/autoload.php';

use Illuminate\Container\Container;
use Illuminate\Database\Capsule\Manager as Capsule;

// Load .env file
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

// Configure database
$capsule = new Capsule;
$capsule->addConnection([
    'driver'    => 'mysql',
    'host'      => $_ENV['DB_HOST'] ?? '127.0.0.1',
    'port'      => $_ENV['DB_PORT'] ?? '3306',
    'database'  => $_ENV['DB_DATABASE'] ?? 'laravel',
    'username'  => $_ENV['DB_USERNAME'] ?? 'root',
    'password' => $_ENV['DB_PASSWORD'] ?? '',
    'charset'   => 'utf8mb4',
    'collation' => 'utf8mb4_unicode_ci',
    'prefix'    => '',
]);

try {
    $capsule->getConnection()->select('SELECT 1');
    echo "Database connection successful!\n";
    
    // Test if we can access projects table
    $projects = $capsule->getConnection()->select('SELECT COUNT(*) as count FROM projects');
    echo "Projects count: " . $projects[0]->count . "\n";
    
    if ($projects[0]->count > 0) {
        $firstProject = $capsule->getConnection()->select('SELECT * FROM projects LIMIT 1');
        echo "First project: ";
        print_r($firstProject[0]);
    }
} catch (Exception $e) {
    echo "Database connection failed: " . $e->getMessage() . "\n";
}