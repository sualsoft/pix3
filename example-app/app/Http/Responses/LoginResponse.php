<?php

namespace App\Http\Responses;

use Laravel\Fortify\Contracts\LoginResponse as LoginResponseContract;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginResponse implements LoginResponseContract
{
    /**
     * Create an HTTP response that represents the object.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function toResponse($request)
    {
        // Check if there's a custom redirect URL stored in the session
        if ($request->session()->has('auth.redirect')) {
            $redirectUrl = $request->session()->pull('auth.redirect');
            return redirect()->to($redirectUrl);
        }
        
        // Default redirect for admin users
        $user = Auth::user();
        if ($user && $user->role === 'admin') {
            return redirect()->intended(config('fortify.home'));
        }
        
        // Default redirect for regular users
        return redirect()->intended('/');
    }
}