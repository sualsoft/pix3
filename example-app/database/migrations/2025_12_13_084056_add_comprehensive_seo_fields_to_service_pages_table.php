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
        // Check if seo_content column exists, if not add it first
        if (!Schema::hasColumn('service_pages', 'seo_content')) {
            Schema::table('service_pages', function (Blueprint $table) {
                $table->text('seo_content')->nullable();
            });
        }
        
        Schema::table('service_pages', function (Blueprint $table) {
            if (!Schema::hasColumn('service_pages', 'meta_title')) {
                $table->string('meta_title')->nullable();
            }
            if (!Schema::hasColumn('service_pages', 'meta_description')) {
                $table->text('meta_description')->nullable();
            }
            if (!Schema::hasColumn('service_pages', 'keywords')) {
                $table->text('keywords')->nullable();
            }
            if (!Schema::hasColumn('service_pages', 'og_title')) {
                $table->string('og_title')->nullable();
            }
            if (!Schema::hasColumn('service_pages', 'og_description')) {
                $table->text('og_description')->nullable();
            }
            if (!Schema::hasColumn('service_pages', 'og_image')) {
                $table->string('og_image')->nullable();
            }
            if (!Schema::hasColumn('service_pages', 'og_type')) {
                $table->string('og_type')->default('website');
            }
            if (!Schema::hasColumn('service_pages', 'twitter_card')) {
                $table->string('twitter_card')->default('summary_large_image');
            }
            if (!Schema::hasColumn('service_pages', 'twitter_title')) {
                $table->string('twitter_title')->nullable();
            }
            if (!Schema::hasColumn('service_pages', 'twitter_description')) {
                $table->text('twitter_description')->nullable();
            }
            if (!Schema::hasColumn('service_pages', 'twitter_image')) {
                $table->string('twitter_image')->nullable();
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('service_pages', function (Blueprint $table) {
            $table->dropColumn([
                'meta_title',
                'meta_description',
                'keywords',
                'og_title',
                'og_description',
                'og_image',
                'og_type',
                'twitter_card',
                'twitter_title',
                'twitter_description',
                'twitter_image'
            ]);
        });
    }
};