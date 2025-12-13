<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ServicePage;

class ServicePageSeeder extends Seeder
{
    public function run()
    {
        ServicePage::truncate(); // Clear old data

        // --- TIMELAPSE PAGES ---
        $timelapsePages = [
            'Timelapse Suivi de Chantier',
            'Timelapse Événementiel',
            'Notre interface de Suivi Timelapse',
            'Mise en Place d’un Timelapse'
        ];

        foreach ($timelapsePages as $title) {
            ServicePage::create([
                'title' => $title,
                'slug' => \Illuminate\Support\Str::slug($title), // Auto-generates 'timelapse-suivi-de-chantier'
                'category' => 'timelapse',
                'content' => '<p>Ceci est le contenu par défaut pour ' . $title . '.</p>',
                'thumbnail' => '/images/hero-bg-1765171683.png',
                'video_url' => 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            ]);
        }

        // --- DRONE PAGES ---
        $dronePages = [
            'Prises de Vue Aériennes et Audiovisuel',
            'Inspection d’Installation Photovoltaïque',
            'Inspection Thermique par Drone',
            'Constat de Sinistre par Drone',
            'Inspection Technique par Drone',
            'Suivi de Chantier par Drone'
        ];

        foreach ($dronePages as $title) {
            ServicePage::create([
                'title' => $title,
                'slug' => \Illuminate\Support\Str::slug($title),
                'category' => 'drone',
                'content' => '<p>Ceci est le contenu par défaut pour ' . $title . '.</p>',
                'thumbnail' => '/images/hero-bg-1765171683.png',
                'video_url' => 'https://www.youtube.com/watch?v=uBgFTIYy5eU'
            ]);
        }
    }
}