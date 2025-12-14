<?php

namespace App\Http\Controllers;

use App\Models\ServicePage;
use App\Models\PortfolioItem;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SitemapController extends Controller
{
    public function index()
    {
        // Get all static pages
        $staticPages = [
            ['url' => url('/'), 'lastmod' => now()->toIso8601String(), 'priority' => '1.0'],
            ['url' => url('/timelapse'), 'lastmod' => now()->toIso8601String(), 'priority' => '0.8'],
            ['url' => url('/drone'), 'lastmod' => now()->toIso8601String(), 'priority' => '0.8'],
            ['url' => url('/portfolio'), 'lastmod' => now()->toIso8601String(), 'priority' => '0.8'],
            ['url' => url('/contact'), 'lastmod' => now()->toIso8601String(), 'priority' => '0.7'],
            ['url' => url('/legal-privacy-policy'), 'lastmod' => now()->toIso8601String(), 'priority' => '0.5'],
        ];

        // Get all service pages (timelapse and drone detail pages)
        $servicePages = ServicePage::select('id', 'category', 'slug', 'updated_at')->get();
        $serviceUrls = [];
        foreach ($servicePages as $page) {
            $serviceUrls[] = [
                'url' => url("/{$page->category}/{$page->slug}"),
                'lastmod' => $page->updated_at->toIso8601String(),
                'priority' => '0.6'
            ];
        }

        // Get all portfolio items
        $portfolioItems = PortfolioItem::select('id', 'updated_at')->get();
        $portfolioUrls = [];
        foreach ($portfolioItems as $item) {
            $portfolioUrls[] = [
                'url' => url("/portfolio/{$item->id}"),
                'lastmod' => $item->updated_at->toIso8601String(),
                'priority' => '0.6'
            ];
        }

        // Combine all URLs
        $urls = array_merge($staticPages, $serviceUrls, $portfolioUrls);

        // Generate XML sitemap
        $sitemap = '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
        $sitemap .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . "\n";

        foreach ($urls as $url) {
            $sitemap .= "  <url>\n";
            $sitemap .= "    <loc>{$url['url']}</loc>\n";
            $sitemap .= "    <lastmod>{$url['lastmod']}</lastmod>\n";
            $sitemap .= "    <priority>{$url['priority']}</priority>\n";
            $sitemap .= "  </url>\n";
        }

        $sitemap .= '</urlset>';

        return response($sitemap, 200, [
            'Content-Type' => 'application/xml'
        ]);
    }
}