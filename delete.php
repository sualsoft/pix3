<?php
/**
 * Script to delete the pix3i_core directory and all its contents
 * Usage: Run this script via command line or web browser
 */

// Set maximum execution time to handle large directories
ini_set('max_execution_time', 300); // 5 minutes

// Define the path to the pix3i_core directory (at root level)
$coreDir = '/home/pixicoq/pix3i_core';

/**
 * Recursively delete a directory and all its contents
 * @param string $dir Path to directory
 * @return bool True on success, false on failure
 */
function deleteDirectory($dir) {
    // Check if directory exists
    if (!file_exists($dir)) {
        echo "Directory does not exist: $dir\n";
        return false;
    }
    
    // Check if it's actually a directory
    if (!is_dir($dir)) {
        echo "Path is not a directory: $dir\n";
        return false;
    }
    
    // Open directory
    $files = array_diff(scandir($dir), array('.', '..'));
    
    foreach ($files as $file) {
        $path = $dir . DIRECTORY_SEPARATOR . $file;
        
        // If it's a directory, recursively delete it
        if (is_dir($path)) {
            if (!deleteDirectory($path)) {
                echo "Failed to delete directory: $path\n";
                return false;
            }
        } else {
            // If it's a file, delete it
            if (!unlink($path)) {
                echo "Failed to delete file: $path\n";
                return false;
            }
            echo "Deleted file: $path\n";
        }
    }
    
    // Finally, delete the empty directory
    if (rmdir($dir)) {
        echo "Deleted directory: $dir\n";
        return true;
    } else {
        echo "Failed to delete directory: $dir\n";
        return false;
    }
}

// Security check - only allow execution from command line or with specific parameter
if (php_sapi_name() !== 'cli') {
    // For web execution, require a confirmation parameter
    if (!isset($_GET['confirm']) || $_GET['confirm'] !== 'yes') {
        echo "<h2>Danger: This script deletes the entire pix3i_core directory!</h2>";
        echo "<p>To proceed, add ?confirm=yes to the URL</p>";
        echo "<p><strong>Warning:</strong> This action cannot be undone!</p>";
        exit;
    }
}

echo "<pre>\n";
echo "Starting deletion of pix3i_core directory...\n";
echo "Target directory: $coreDir\n\n";

// Check if directory exists before attempting deletion
if (file_exists($coreDir)) {
    echo "Directory found. Starting deletion process...\n";
    
    // Attempt to delete the directory
    if (deleteDirectory($coreDir)) {
        echo "\nSUCCESS: pix3i_core directory and all contents have been deleted.\n";
    } else {
        echo "\nERROR: Failed to delete pix3i_core directory completely.\n";
    }
} else {
    echo "Directory does not exist: $coreDir\n";
    echo "Nothing to delete.\n";
}

echo "</pre>";

// For CLI usage
if (php_sapi_name() === 'cli') {
    echo "Script completed.\n";
}
?>