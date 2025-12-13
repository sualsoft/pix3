<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, string $role)
{
    // 1. Get the logged-in user's role
    $userRole = $request->user()->role;

    // 2. Check if they match the required role
    if ($userRole !== $role) {
        
        // If an Admin tries to go to a User page -> Send to Dashboard
        if ($userRole === 'admin') {
            return redirect('/dashboard');
        }

        // If a User tries to go to an Admin page -> Send to User Page
        if ($userRole === 'user') {
            return redirect('/user');
        }
    }

    // 3. If they match, let them pass
    return $next($request);
}
}
