<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
{
    Schema::create('service_pages', function (Blueprint $table) {
        $table->id();
        $table->string('title');         // Title of the page
        $table->string('slug');          // URL friendly name (e.g. 'suivi-de-chantier')
        $table->string('category');      // 'drone' or 'timelapse'
        $table->text('content');         // The long text
        $table->string('thumbnail')->nullable(); // Hero Image
        $table->string('video_url')->nullable(); // YouTube Link
        $table->timestamps();
    });
}
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('service_pages');
    }
};
