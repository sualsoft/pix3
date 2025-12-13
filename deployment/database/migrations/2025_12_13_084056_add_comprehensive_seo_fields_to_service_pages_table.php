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
        Schema::table('service_pages', function (Blueprint $table) {
            $table->string('meta_title')->nullable()->after('seo_content');
            $table->text('meta_description')->nullable()->after('meta_title');
            $table->text('keywords')->nullable()->after('meta_description');
            $table->string('og_title')->nullable()->after('keywords');
            $table->text('og_description')->nullable()->after('og_title');
            $table->string('og_image')->nullable()->after('og_description');
            $table->string('og_type')->default('website')->after('og_image');
            $table->string('twitter_card')->default('summary_large_image')->after('og_type');
            $table->string('twitter_title')->nullable()->after('twitter_card');
            $table->text('twitter_description')->nullable()->after('twitter_title');
            $table->string('twitter_image')->nullable()->after('twitter_description');
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