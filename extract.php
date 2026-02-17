<?php
// Define the path to your zip file
// Assuming 'www' and 'pix3i_core' are siblings in the root
$zipFile = __DIR__ . '/../pix3i_core/archive.zip';
$extractTo = __DIR__ . '/../pix3i_core/';

$zip = new ZipArchive;

if ($zip->open($zipFile) === TRUE) {
    $zip->extractTo($extractTo);
    $zip->close();
    echo "Successfully extracted archive.zip to pix3i_core!";
} else {
    echo "Failed to open archive.zip. Check if the path is correct.";
}
?>