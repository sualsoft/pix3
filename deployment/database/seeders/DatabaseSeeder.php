<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // 1. CREATE THE ADMIN (You)
        // Access: /dashboard (CMS)
        User::factory()->create([
            'name' => 'Admin Pix3i',
            'email' => 'admin@pix3i.com',
            'password' => Hash::make('password'), // Change this later!
            'role' => 'admin', // <--- IMPORTANT
        ]);

        // 2. CREATE THE CLIENT (Jean)
        // Access: /user (Files)
        User::factory()->create([
            'name' => 'Jean Client',
            'email' => 'jean@client.com',
            'password' => Hash::make('password'),
            'role' => 'user', // <--- IMPORTANT
        ]);

        // Run your other seeders
        $this->call([
            SiteSettingSeeder::class,
            PortfolioItemSeeder::class,
            ServicePageSeeder::class,
            UserPageSeeder::class,
        ]);
    }
}