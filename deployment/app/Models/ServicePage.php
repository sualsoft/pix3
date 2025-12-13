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
        'video_url',
        'seo_content',
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
    ];
}