<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Home extends Model
{
    protected $table = 'home'; // Specify the table name explicitly
    
    protected $fillable = [
        'section',
        'title',
        'description',
        'image_url',
        'link_url',
        'content',
        'sort_order',
        'is_active'
    ];

    protected $casts = [
        'content' => 'array',
        'is_active' => 'boolean',
        'sort_order' => 'integer'
    ];
}