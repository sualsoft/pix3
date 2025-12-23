<?php
/**
 * Script to unzip the backend files
 * Unzips be.zip file to the current directory
 */

// Set maximum execution time to handle large files
ini_set('max_execution_time', 300); // 5 minutes

// Define paths
$zipFile = '/home/pixicoq/pix3i_core/be.zip';
$extractPath = '/home/pixicoq/pix3i_core/';

/**
 * Extract ZIP file to specified directory
 * @param string $zipFile Path to ZIP file
 * @param string $extractPath Path to extract to
 * @return bool True on success, false on failure
 */
function extractZip($zipFile, $extractPath) {
    // Check if ZIP file exists
    if (!file_exists($zipFile)) {
        echo "ZIP file does not exist: $zipFile\n";
        return false;
    }
    
    // Check if extract path exists, create if not
    if (!is_dir($extractPath)) {
        if (!mkdir($extractPath, 0755, true)) {
            echo "Failed to create extraction directory: $extractPath\n";
            return false;
        }
        echo "Created extraction directory: $extractPath\n";
    }
    
    // Create ZIP archive object
    $zip = new ZipArchive;
    
    // Open ZIP file
    if ($zip->open($zipFile) === TRUE) {
        echo "Opened ZIP file: $zipFile\n";
        echo "Extracting files to: $extractPath\n";
        
        // Extract files
        if ($zip->extractTo($extractPath)) {
            echo "Successfully extracted files!\n";
            $zip->close();
            return true;
        } else {
            echo "Failed to extract files!\n";
            $zip->close();
            return false;
        }
    } else {
        echo "Failed to open ZIP file: $zipFile\n";
        return false;
    }
}

// Security check - only allow execution from command line or with specific parameter
if (php_sapi_name() !== 'cli') {
    // For web execution, require a confirmation parameter
    if (!isset($_GET['confirm']) || $_GET['confirm'] !== 'yes') {
        echo "<h2>Unzip Backend Files</h2>";
        echo "<p>To proceed with extraction, add ?confirm=yes to the URL</p>";
        echo "<p>Source: $zipFile</p>";
        echo "<p>Destination: $extractPath</p>";
        exit;
    }
}

echo "<pre>\n";
echo "Starting backend file extraction...\n";
echo "Source ZIP file: $zipFile\n";
echo "Extraction path: $extractPath\n\n";

// Check if ZipArchive extension is available
if (!class_exists('ZipArchive')) {
    echo "ERROR: ZipArchive extension is not installed or enabled!\n";
    echo "Please enable the zip extension in your PHP configuration.\n";
    exit(1);
}

// Attempt to extract the ZIP file
if (extractZip($zipFile, $extractPath)) {
    echo "\nSUCCESS: Backend files have been extracted successfully!\n";
    echo "You can now proceed with setting up your application.\n";
    
    // Optional: Delete the ZIP file after extraction
    // if (unlink($zipFile)) {
    //     echo "Deleted ZIP file: $zipFile\n";
    // } else {
    //     echo "Note: Could not delete ZIP file: $zipFile\n";
    // }
} else {
    echo "\nERROR: Failed to extract backend files.\n";
    echo "Please check the file paths and permissions.\n";
}

echo "</pre>";

// For CLI usage
if (php_sapi_name() === 'cli') {
    echo "Script completed.\n";
}
?>