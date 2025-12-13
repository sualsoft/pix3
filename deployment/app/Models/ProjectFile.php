<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectFile extends Model
{
    use HasFactory;

    // Allow all these columns to be filled
    protected $fillable = [
        'project_id', 
        'name', 
        'date', 
        'size', 
        'type', 
        'badge', 
        'thumbnail', 
        'youtube_id', 
        'download_url'
    ];

    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}