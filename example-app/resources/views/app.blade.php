<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Expert en services de prises de vue par Drone, le Timelapse et le conseil pour le BTP et l’Immobilier') }}</title>

        <link rel="icon" href="/favicon.ico" sizes="any">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">

        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

        <!-- Google Search Console Verification -->
        <meta name="google-site-verification" content="u1V144ro267tkAGMxqB_1XDCIfIsB1WctC5tmR9vPf0" />

        @vite(['resources/js/app.ts', "resources/js/pages/{$page['component']}.vue"])
        @inertiaHead


        <meta name="description" content="PIX3i est une entreprise spécialisée dans les prestations de prises de vue par Drone et le Timelapse, offrant une gamme de services adaptés aux besoins du secteur du bâtiment et de l'immobilier.">
        <meta property="og:site_name" content="PIX3i - Expert en services de prises de vue par Drone, le Timelapse et le conseil pour le BTP et l’Immobilier">
        <meta property="og:title" content="PIX3i - Expert en services de prises de vue par Drone, le Timelapse et le conseil pour le BTP et l’Immobilier">
        <meta property="og:description" content="PIX3i est une entreprise spécialisée dans les prestations de prises de vue par Drone et le Timelapse, offrant une gamme de services adaptés aux besoins du secteur du bâtiment et de l'immobilier.">
        <meta property="og:locale" content="fr_FR">
        <meta property="og:type" content="website">
        <meta property="og:url" content="{{ url()->full() }}">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">

        <!-- Font Awesome -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css">
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>