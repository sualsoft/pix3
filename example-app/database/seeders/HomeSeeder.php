<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Home;

class HomeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Clear existing data
        Home::truncate();

        // Hero Section
        Home::create([
            'section' => 'hero',
            'title' => 'Valorisez, Inspectez et Optimisez avec PIX3i',
            'description' => 'Votre partenaire de confiance pour les prestations drone et timelapse à Bourges (18).',
            'image_url' => '/images/hero-bg.png',
            'link_url' => null,
            'content' => [
                'video_id' => 'IumYMCllMsM',
                'button_text' => 'Regarder une vidéo'
            ],
            'sort_order' => 1,
            'is_active' => true
        ]);

        // About Section
        Home::create([
            'section' => 'about',
            'title' => 'À propos de nous',
            'description' => "PIX3i s'engage à fournir des prestations de qualité, en respectant les réglementations en vigueur. Les télépilotes, titulaires du CATS, sont formés pour intervenir dans les zones réglementées et urbaines, garantissant ainsi la sécurité et la conformité des missions réalisées.\n\nEn intégrant des technologies avancées, PIX3i permet à ses clients de bénéficier d'une vision précise et d'une compréhension approfondie de leurs projets, tout en optimisant la gestion des sinistres et des travaux dans le bâtiment.",
            'image_url' => null,
            'link_url' => null,
            'content' => [
                'gallery_images' => [
                    'https://images.unsplash.com/photo-1564513294021-d1c9533f81e6?q=80&w=800&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1599557022207-6b80155b414e?q=80&w=800&auto=format&fit=crop',
                    'https://plus.unsplash.com/premium_photo-1661962360580-2a544747768e?q=80&w=800&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1622543925917-091a13e2f520?q=80&w=800&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1581092921461-eab62e97a783?q=80&w=800&auto=format&fit=crop'
                ]
            ],
            'sort_order' => 2,
            'is_active' => true
        ]);

        // Services Section (data from Services.vue)
        Home::create([
            'section' => 'services',
            'title' => 'Voici nos services clés',
            'description' => null,
            'image_url' => null,
            'link_url' => null,
            'content' => [
                [
                    'title' => 'Timelapse',
                    'description' => 'Capture et valorisation de vos chantiers, vos événements, vos monuments: des solutions efficaces et dynamiques pour communiquer et conserver une mémoire visuelle.',
                    'image' => 'https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=2000&auto=format&fit=crop',
                    'span' => 'md:col-span-2',
                    'link' => '/timelapse'
                ],
                [
                    'title' => 'Prises de vue aériennes et Audiovisuel',
                    'description' => 'Valorisation de vos biens immobiliers et suivi de chantier grâce à des prises de vues aériennes en haute définition, idéales pour la documentation et la promotion de projets.',
                    'image' => 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2000&auto=format&fit=crop',
                    'span' => 'lg:col-span-1',
                    'link' => '/drone'
                ],
                [
                    'title' => 'Inspection de systèmes solaires',
                    'description' => 'Inspections de vos installations photovoltaïques avec des drones équipés de caméras thermiques pour détecter les anomalies et améliorer la performance.',
                    'image' => 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2000&auto=format&fit=crop',
                    'span' => 'lg:col-span-1',
                    'link' => '/drone'
                ],
                [
                    'title' => 'Inspection thermique par drone',
                    'description' => "Identification des pertes de chaleur, ponts thermiques et défauts d'isolation grâce à la thermographie, pour améliorer la performance énergétique de vos bâtiments.",
                    'image' => 'https://images.unsplash.com/photo-1581092921461-eab62e97a783?q=80&w=2000&auto=format&fit=crop',
                    'span' => 'lg:col-span-1',
                    'link' => '/drone'
                ],
                [
                    'title' => 'Constat de sinistre par drone',
                    'description' => 'Documentation visuelle précise pour faciliter vos démarches auprès des assurances en cas de sinistre, avec des prises de vues aériennes détaillées des dommages.',
                    'image' => 'https://images.unsplash.com/photo-1552951792-74d1a01c40f5?q=80&w=2000&auto=format&fit=crop',
                    'span' => 'lg:col-span-1',
                    'link' => '/drone'
                ],
                [
                    'title' => 'Inspection technique par drone',
                    'description' => "Évaluation de l'état de vos infrastructures difficiles d'accès (toitures, façades, ponts, etc.) de manière rapide, sécurisée et efficace.",
                    'image' => 'https://images.unsplash.com/photo-1506947411487-a56738267384?q=80&w=2000&auto=format&fit=crop',
                    'span' => 'lg:col-span-1',
                    'link' => '/drone'
                ],
                [
                    'title' => 'Suivi de chantier par drone',
                    'description' => "Suivi régulier de l'avancement des travaux sur vos chantiers grâce à des prises de vues aériennes, assurant un contrôle optimal de la qualité et des délais.",
                    'image' => 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop',
                    'span' => 'lg:col-span-2',
                    'link' => '/drone'
                ]
            ],
            'sort_order' => 3,
            'is_active' => true
        ]);

        // Why Section (data from Why.vue)
        Home::create([
            'section' => 'why',
            'title' => 'Pourquoi choisir PIX3i?',
            'description' => null,
            'image_url' => null,
            'link_url' => null,
            'content' => [
                [
                    'title' => 'Expertise Reconnue',
                    'description' => 'Avec PIX3i, vous bénéficiez d\'une expertise reconnue dans le domaine des services par drone pour le BTP et l\'immobilier.',
                    'icon' => 'fa-solid fa-certificate'
                ],
                [
                    'title' => 'Solutions Innovantes',
                    'description' => 'Nous mettons à votre disposition des solutions innovantes pour optimiser vos projets et améliorer la gestion de vos inspections.',
                    'icon' => 'fa-solid fa-lightbulb'
                ],
                [
                    'title' => 'Télépilotes Certifiés',
                    'description' => 'Nos télépilotes certifiés sont formés pour garantir la sécurité et la conformité des missions en zones réglementées.',
                    'icon' => 'fa-solid fa-user-shield'
                ],
                [
                    'title' => 'Gain de Temps',
                    'description' => 'Nos services par drone permettent de gagner un temps précieux dans l\'inspection et la documentation de vos projets.',
                    'icon' => 'fa-solid fa-clock'
                ],
                [
                    'title' => 'Réduction des Coûts',
                    'description' => 'L\'utilisation de drones réduit les coûts d\'inspection en éliminant le besoin de matériel lourd ou de structures temporaires.',
                    'icon' => 'fa-solid fa-euro-sign'
                ],
                [
                    'title' => 'Sécurité Optimisée',
                    'description' => 'L\'inspection par drone minimise les risques pour les équipes techniques, surtout dans les zones difficiles d\'accès.',
                    'icon' => 'fa-solid fa-shield-halved'
                ],
                [
                    'title' => 'Accompagnement Personnalisé',
                    'description' => 'Nous vous accompagnons tout au long de vos projets de construction et immobilier pour répondre à vos besoins spécifiques.',
                    'icon' => 'fa-solid fa-handshake'
                ]
            ],
            'sort_order' => 4,
            'is_active' => true
        ]);
    }
}