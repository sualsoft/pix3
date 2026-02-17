<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Add meta_description to service_pages table
        Schema::table('service_pages', function (Blueprint $table) {
            $table->text('thumbnail_meta_description')->nullable();
            $table->text('og_image_meta_description')->nullable();
            $table->text('twitter_image_meta_description')->nullable();
        });

        // Add meta_description to portfolio_items table
        Schema::table('portfolio_items', function (Blueprint $table) {
            $table->text('og_image_meta_description')->nullable();
            $table->text('twitter_image_meta_description')->nullable();
        });

        // Add meta_description to project_files table
        Schema::table('project_files', function (Blueprint $table) {
            $table->text('thumbnail_meta_description')->nullable();
        });

        // Add meta_description to site_settings table for hero sections
        Schema::table('site_settings', function (Blueprint $table) {
            $table->text('hero_image_meta_description')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Remove meta_description from service_pages table
        Schema::table('service_pages', function (Blueprint $table) {
            $table->dropColumn(['thumbnail_meta_description', 'og_image_meta_description', 'twitter_image_meta_description']);
        });

        // Remove meta_description from portfolio_items table
        Schema::table('portfolio_items', function (Blueprint $table) {
            $table->dropColumn(['og_image_meta_description', 'twitter_image_meta_description']);
        });

        // Remove meta_description from project_files table
        Schema::table('project_files', function (Blueprint $table) {
            $table->dropColumn('thumbnail_meta_description');
        });

        // Remove meta_description from site_settings table
        Schema::table('site_settings', function (Blueprint $table) {
            $table->dropColumn('hero_image_meta_description');
        });
    }
};
