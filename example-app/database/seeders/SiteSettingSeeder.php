<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\SiteSetting;

class SiteSettingSeeder extends Seeder
{
    public function run()
    {
        // 1. CLEAR OLD DATA
        SiteSetting::truncate();

        // 2. GENERAL INFO (Removed the CTA from here to avoid duplicates)
        SiteSetting::create([
            'key' => 'general',
            'content' => [
                'phone' => '0667132459',
                'email' => 'agence.pix3i@gmail.com',
                'address' => '18230 SAINT DOULCHARD',
                'description' => 'PIX3i garantit des prestations conformes et sécurisées grâce à ses télépilotes certifiés CATS...',
                'logo_url' => '/images/logo.png',
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

        // 6. CTA SECTION (Dedicated Section)
        SiteSetting::create([
            'key' => 'cta',
            'content' => [
                'title' => 'Réservez dès maintenant une consultation gratuite.',
                'btn_text' => 'Appelez maintenant',
                'link' => '/contact' // Updated to /contact as it makes more sense
            ]
        ]);

        // ==========================================
        //  🏠 HOME PAGE SECTIONS
        // ==========================================

        // 1. HERO SECTION
        SiteSetting::create([
            'key' => 'home_hero',
            'content' => [
                'title' => 'Valorisez, Inspectez et Optimisez avec PIX3i',
                'description' => 'Votre partenaire de confiance pour les prestations drone et timelapse à Bourges (18).',
                'btn_text' => 'Regarder une vidéo',
                'video_link' => 'https://www.youtube.com/watch?v=uBgFTIYy5eU',
                'bg_image' => 'images/hero-bg.png'
            ]
        ]);

        // 2. SERVICES SECTION
        SiteSetting::create([
            'key' => 'home_services',
            'content' => [
                [
                    'title' => 'Timelapse',
                    'description' => 'Capture et valorisation de vos chantiers, vos événements, vos monuments: des solutions efficaces et dynamiques pour communiquer et conserver une mémoire visuelle.',
                    'image' => 'https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=2000&auto=format&fit=crop',
                    'span' => 'md:col-span-2',
                    'link' => '/timelapse',
                ],
                [
                    'title' => 'Prises de vue aériennes et Audiovisuel',
                    'description' => 'Valorisation de vos biens immobiliers et suivi de chantier grâce à des prises de vues aériennes en haute définition, idéales pour la documentation et la promotion de projets.',
                    'image' => 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2000&auto=format&fit=crop',
                    'span' => 'lg:col-span-1',
                    'link' => '/drone',
                ],
                [
                    'title' => 'Inspection de systèmes solaires',
                    'description' => 'Inspections de vos installations photovoltaïques avec des drones équipés de caméras thermiques pour détecter les anomalies et améliorer la performance.',
                    'image' => 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2000&auto=format&fit=crop',
                    'span' => 'lg:col-span-1',
                    'link' => '/drone',
                ],
                [
                    'title' => 'Inspection thermique par drone',
                    'description' => 'Identification des pertes de chaleur, ponts thermiques et défauts d\'isolation grâce à la thermographie, pour améliorer la performance énergétique de vos bâtiments.',
                    'image' => 'https://images.unsplash.com/photo-1581092921461-eab62e97a783?q=80&w=2000&auto=format&fit=crop',
                    'span' => 'lg:col-span-1',
                    'link' => '/drone',
                ],
                [
                    'title' => 'Constat de sinistre par drone',
                    'description' => 'Documentation visuelle précise pour faciliter vos démarches auprès des assurances en cas de sinistre, avec des prises de vues aériennes détaillées des dommages.',
                    'image' => 'https://images.unsplash.com/photo-1552951792-74d1a01c40f5?q=80&w=2000&auto=format&fit=crop',
                    'span' => 'lg:col-span-1',
                    'link' => '/drone',
                ],
                [
                    'title' => 'Inspection technique par drone',
                    'description' => 'Évaluation de l\'état de vos infrastructures difficiles d\'accès (toitures, façades, ponts, etc.) de manière rapide, sécurisée et efficace.',
                    'image' => 'https://images.unsplash.com/photo-1506947411487-a56738267384?q=80&w=2000&auto=format&fit=crop',
                    'span' => 'lg:col-span-1',
                    'link' => '/drone',
                ],
                [
                    'title' => 'Suivi de chantier par drone',
                    'description' => 'Suivi régulier de l\'avancement des travaux sur vos chantiers grâce à des prises de vues aériennes, assurant un contrôle optimal de la qualité et des délais.',
                    'image' => 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop',
                    'span' => 'lg:col-span-2',
                    'link' => '/drone',
                ],
            ]
        ]);

        // 3. WHY PIX3I SECTION
        SiteSetting::create([
            'key' => 'home_why',
            'content' => [
                ['title' => 'Expertise Reconnue', 'description' => 'Avec PIX3i, vous bénéficiez d’une expertise reconnue dans le domaine des services par drone pour le BTP et l’immobilier.', 'icon' => 'fa-solid fa-certificate'],
                ['title' => 'Solutions Innovantes', 'description' => 'Nous mettons à votre disposition des solutions innovantes pour optimiser vos projets et améliorer la gestion de vos inspections.', 'icon' => 'fa-solid fa-lightbulb'],
                ['title' => 'Télépilotes Certifiés', 'description' => 'Nos télépilotes certifiés sont formés pour garantir la sécurité et la conformité des missions en zones réglementées.', 'icon' => 'fa-solid fa-user-shield'],
                ['title' => 'Gain de Temps', 'description' => 'Nos services par drone permettent de gagner un temps précieux dans l’inspection et la documentation de vos projets.', 'icon' => 'fa-solid fa-clock'],
                ['title' => 'Réduction des Coûts', 'description' => 'L’utilisation de drones réduit les coûts d’inspection en éliminant le besoin de matériel lourd ou de structures temporaires.', 'icon' => 'fa-solid fa-euro-sign'],
                ['title' => 'Sécurité Optimisée', 'description' => 'L’inspection par drone minimise les risques pour les équipes techniques, surtout dans les zones difficiles d’accès.', 'icon' => 'fa-solid fa-shield-halved'],
                ['title' => 'Accompagnement Personnalisé', 'description' => 'Nous vous accompagnons tout au long de vos projets de construction et immobilier pour répondre à vos besoins spécifiques.', 'icon' => 'fa-solid fa-handshake'],
            ]
        ]);

        // 4. ABOUT SECTION
        SiteSetting::create([
            'key' => 'home_about',
            'content' => [
                'title' => 'À propos de nous',
                'description' => "PIX3i s’engage à fournir des prestations de qualité, en respectant les réglementations en vigueur. Les télépilotes, titulaires du CATS, sont formés pour intervenir dans les zones réglementées et urbaines, garantissant ainsi la sécurité et la conformité des missions réalisées.\n\nEn intégrant des technologies avancées, PIX3i permet à ses clients de bénéficier d’une vision précise et d’une compréhension approfondie de leurs projets, tout en optimisant la gestion des sinistres et des travaux dans le bâtiment."
            ]
        ]);

        // 5. GALLERY SECTION
        SiteSetting::create([
            'key' => 'home_gallery',
            'content' => [
                'title' => 'Prises de vue',
                'images' => [
                    "https://images.unsplash.com/photo-1564513294021-d1c9533f81e6?q=80&w=800",
                    "https://images.unsplash.com/photo-1599557022207-6b80155b414e?q=80&w=800",
                    "https://plus.unsplash.com/premium_photo-1661962360580-2a544747768e?q=80&w=800",
                    "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800",
                    "https://images.unsplash.com/photo-1622543925917-091a13e2f520?q=80&w=800",
                    "https://images.unsplash.com/photo-1581092921461-eab62e97a783?q=80&w=800"
                ]
            ]
        ]);
    }
}