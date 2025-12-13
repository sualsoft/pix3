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
    Schema::create('project_files', function (Blueprint $table) {
        $table->id();
        $table->foreignId('project_id')->constrained()->onDelete('cascade');
        $table->string('name');
        $table->date('date');
        $table->string('size');
        $table->string('type'); // 'video' or 'image'
        $table->string('badge');
        $table->string('thumbnail');
        $table->string('youtube_id')->nullable(); // Only for videos
        $table->string('download_url')->nullable(); // For the real image/file
        $table->timestamps();
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('project_files');
    }
};
