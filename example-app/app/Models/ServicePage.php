<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ServicePage extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'category',
        'icon',
        'content',
        'thumbnail',
        'video_url'
    ];
}