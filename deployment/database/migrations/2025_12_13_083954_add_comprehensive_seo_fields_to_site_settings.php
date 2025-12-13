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
        // Get all existing SEO settings
        $seoSettings = DB::table('site_settings')
            ->whereIn('key', ['contact_seo', 'portfolio_seo', 'drone_seo', 'timelapse_seo'])
            ->get();

        // Update each SEO setting to include comprehensive SEO fields
        foreach ($seoSettings as $setting) {
            $content = json_decode($setting->content, true);
            
            // Add missing SEO fields if they don't exist
            $updatedContent = array_merge([
                'content' => $content['content'] ?? '',
                'meta_title' => '',
                'meta_description' => '',
                'keywords' => '',
                'og_title' => '',
                'og_description' => '',
                'og_image' => '',
                'og_type' => 'website',
                'twitter_card' => 'summary_large_image',
                'twitter_title' => '',
                'twitter_description' => '',
                'twitter_image' => '',
            ], $content);
            
            DB::table('site_settings')
                ->where('id', $setting->id)
                ->update(['content' => json_encode($updatedContent)]);
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Get all existing SEO settings
        $seoSettings = DB::table('site_settings')
            ->whereIn('key', ['contact_seo', 'portfolio_seo', 'drone_seo', 'timelapse_seo'])
            ->get();

        // Revert each SEO setting to only include content field
        foreach ($seoSettings as $setting) {
            $content = json_decode($setting->content, true);
            
            // Keep only the content field
            $updatedContent = [
                'content' => $content['content'] ?? '',
            ];
            
            DB::table('site_settings')
                ->where('id', $setting->id)
                ->update(['content' => json_encode($updatedContent)]);
        }
    }
};