<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\PortfolioItem; // We import your PortfolioItem model

class PortfolioItemSeeder extends Seeder
{
    public function run()
    {
        
        PortfolioItem::truncate();

       
        
        $items = [
            // --- Item 1: Drone Image ---
            [
                'title'    => 'Vue Aérienne Panoramique',
                'category' => 'Drone',
                'type'     => 'image',
                'src'      => 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            ],

            // --- Item 2: Construction Timelapse ---
            [
                'title'    => 'Suivi de Chantier 2024',
                'category' => 'Timelapse Suivi de Chantier',
                'type'     => 'image',
                'src'      => 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            ],

            // --- Item 3: Event Timelapse ---
            [
                'title'    => 'Festival de Musique',
                'category' => 'Timelapse Événementiel',
                'type'     => 'image',
                'src'      => 'https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            ],

            // --- Item 4: A YOUTUBE Video ---
            [
                'title'    => 'Vidéo de Présentation',
                'category' => 'Drone',
                'type'     => 'youtube',
                // IMPORTANT: For YouTube, use the "/embed/" link, not the "watch" link.
                'src'      => 'https://www.youtube.com/embed/uBgFTIYy5eU', 
            ],
        ];

        // 3. SAVE TO DATABASE
        // This loop goes through every item above and saves it to your database.
        foreach ($items as $item) {
            PortfolioItem::create($item);
        }
    }
}