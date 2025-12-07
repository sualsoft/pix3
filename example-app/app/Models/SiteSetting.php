<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SiteSetting extends Model
{
    use HasFactory;

    protected $fillable = ['key', 'content'];

    // ----------------------------------------------------
    // THIS PART IS CRITICAL. DO NOT DELETE IT.
    // ----------------------------------------------------
    protected $casts = [
        'content' => 'array',
    ];

    
}