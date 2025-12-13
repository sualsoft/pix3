<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Add portfolio SEO setting
        $exists = DB::table('site_settings')->where('key', 'portfolio_seo')->exists();
        if (!$exists) {
            DB::table('site_settings')->insert([
                'key' => 'portfolio_seo',
                'content' => json_encode([
                    'content' => '<h3 class="text-xl font-bold mb-4 text-[#0D99FF]">Découvrez nos réalisations en prise de vue aérienne et timelapse</h3>
<p class="mb-4">
    Notre portfolio présente une sélection de nos meilleurs projets de prises de vue aériennes, de timelapses et de vidéos professionnelles. Chaque réalisation témoigne de notre expertise et de notre engagement à fournir des contenus visuels de la plus haute qualité.
</p>
<p>
    Des chantiers de construction aux biens immobiliers en passant par les événements spéciaux, nos prestations couvrent un large spectre d\'applications. Parcourez notre galerie pour découvrir comment nous pouvons sublimer vos projets.
</p>'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        // Add drone SEO setting
        $exists = DB::table('site_settings')->where('key', 'drone_seo')->exists();
        if (!$exists) {
            DB::table('site_settings')->insert([
                'key' => 'drone_seo',
                'content' => json_encode([
                    'content' => '<h3 class="text-xl font-bold mb-4 text-[#0D99FF]">Services de drone professionnel pour le BTP et l\'immobilier</h3>
<p class="mb-4">
    Nos services de drone vous offrent une perspective unique et précise sur vos projets. Que ce soit pour le suivi de chantier, l\'inspection de toitures, l\'évaluation de biens immobiliers ou la création de contenus promotionnels, nos télépilotes certifiés interviennent avec des drones professionnels équipés de caméras 4K.
</p>
<p>
    Avec notre expertise en télépilotage et notre connaissance approfondie des réglementations, nous garantissons des prestations conformes et sécurisées. Découvrez comment nos services de drone peuvent optimiser la gestion de vos projets.
</p>'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        // Add timelapse SEO setting
        $exists = DB::table('site_settings')->where('key', 'timelapse_seo')->exists();
        if (!$exists) {
            DB::table('site_settings')->insert([
                'key' => 'timelapse_seo',
                'content' => json_encode([
                    'content' => '<h3 class="text-xl font-bold mb-4 text-[#0D99FF]">Création de timelapses professionnels pour valoriser vos projets</h3>
<p class="mb-4">
    Le timelapse est une technique de visualisation puissante qui condense le passage du temps en accéléré, permettant de suivre l\'évolution de vos projets de manière captivante. Nos experts créent des timelapses de haute qualité pour mettre en valeur vos chantiers, événements ou transformations.
</p>
<p>
    Grâce à une planification rigoureuse, un positionnement stratégique des caméras et un montage professionnel, nous produisons des vidéos timelapse qui racontent l\'histoire de vos projets de manière engageante et esthétique.
</p>'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::table('site_settings')->whereIn('key', ['portfolio_seo', 'drone_seo', 'timelapse_seo'])->delete();
    }
};