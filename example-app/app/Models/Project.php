<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    // Allow these columns to be filled
    protected $fillable = ['client_name', 'title', 'slug'];

    // --- ADD THIS FUNCTION ---
    public function files()
    {
        return $this->hasMany(ProjectFile::class);
    }
    
    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}