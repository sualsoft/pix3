<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Project;
use App\Models\ProjectFile;

class UserPageSeeder extends Seeder
{
    public function run()
    {
        // 1. Create the Main Project Context
        $project = Project::create([
            'client_name' => 'Jean',
            'title' => 'Résidence Les Pins'
        ]);

        // 2. Add the Files (Your Mock Data)
        $files = [
            [
                'name' => 'Timelapse Chantier - Semaine 42',
                'date' => '2025-12-08',
                'size' => '1.2 GB',
                'type' => 'video',
                'badge' => '4K VIDEO',
                'thumbnail' => 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&w=600&q=80',
                'youtube_id' => 'dQw4w9WgXcQ',
            ],
            [
                'name' => 'Inspection Toiture - Drone Shot 004',
                'date' => '2025-12-07',
                'size' => '24 MB',
                'type' => 'image',
                'badge' => 'DRONE RAW',
                'thumbnail' => 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&w=600&q=80',
                'download_url' => 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&w=1600&q=80',
            ],
            [
                'name' => 'Vue Aérienne Global - Décembre',
                'date' => '2025-12-06',
                'size' => '450 MB',
                'type' => 'video',
                'badge' => '1080P PREVIEW',
                'thumbnail' => 'https://images.unsplash.com/photo-1590644365607-1c5a2e9e3b70?ixlib=rb-4.0.3&w=600&q=80',
                'youtube_id' => 'LXb3EKWsInQ',
            ],
            [
                'name' => 'Panorama 360 - Zone Nord',
                'date' => '2025-12-05',
                'size' => '18 MB',
                'type' => 'image',
                'badge' => '360° PHOTO',
                'thumbnail' => 'https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?ixlib=rb-4.0.3&w=600&q=80',
                'download_url' => 'https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?ixlib=rb-4.0.3&w=1600&q=80',
            ]
        ];

        foreach ($files as $file) {
            $project->files()->create($file);
        }
    }
}