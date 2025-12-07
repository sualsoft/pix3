<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\SiteSetting;

class SiteSettingSeeder extends Seeder
{
    public function run()
    {
        // 1. EFFACER LES ANCIENNES DONNÉES
        SiteSetting::truncate();

        // 2. GENERAL INFO (Avec le nouveau CTA)
        SiteSetting::create([
            'key' => 'general',
            'content' => [
                'phone' => '0667132459',
                'email' => 'agence.pix3i@gmail.com',
                'address' => '18230 SAINT DOULCHARD',
                'description' => 'PIX3i garantit des prestations conformes et sécurisées grâce à ses télépilotes certifiés CATS, formés pour intervenir en zones réglementées. Grâce à ses technologies avancées, PIX3i offre une vision précise et une analyse approfondie des projets, optimisant la gestion des sinistres et des travaux du bâtiment.',
                'logo_url' => '/images/logo.png',
                
                // 👇 NOUVELLE SECTION CTA (CALL TO ACTION)
                'cta' => [
                    'title' => 'Réservez dès maintenant une consultation gratuite.',
                    'btn_text' => 'Appelez maintenant',
                    'link' => '/'
                ]
            ]
        ]);

        // 3. NAVBAR
        SiteSetting::create([
            'key' => 'navbar',
            'content' => [
                ['name' => 'Accueil', 'link' => '/', 'is_button' => false],
                ['name' => 'Timelapse', 'link' => '/timelapse', 'is_button' => false],
                ['name' => 'Drone', 'link' => '/drone', 'is_button' => false],
                ['name' => 'Portefeuille', 'link' => '/portfolio', 'is_button' => false],
                ['name' => 'Contact', 'link' => '/contact', 'is_button' => false],
                ['name' => 'Se connecter', 'link' => '/login', 'is_button' => true],
            ]
        ]);

        // 4. FOOTER
        SiteSetting::create([
            'key' => 'footer',
            'content' => [
                ['name' => 'Conditions générales', 'link' => '/conditions'],
                ['name' => 'Politique de Confidentialité', 'link' => '/privacy'],
            ]
        ]);

        // 5. SOCIAL LINKS
        SiteSetting::create([
            'key' => 'social',
            'content' => [
               ['media' => 'facebook', 'icon' => 'fa-brands fa-facebook-f', 'link' => 'https://facebook.com'],
                ['media' => 'instagram', 'icon' => 'fa-brands fa-instagram', 'link' => 'https://instagram.com'],
                ['media' => 'linkedin', 'icon' => 'fa-brands fa-linkedin-in', 'link' => 'https://linkedin.com'],
            ]
        ]);

        //6. CTA section
        SiteSetting::create([
            'key' => 'cta',
            'content' => [
                'title' => 'Réservez dès maintenant une consultation gratuite.',
                'btn_text' => 'Appelez maintenant',
                'link' => '/'
            ]
        ]);
    }
}