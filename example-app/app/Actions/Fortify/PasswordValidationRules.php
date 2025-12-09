<?php

namespace App\Actions\Fortify;

use Illuminate\Validation\Rules\Password;

trait PasswordValidationRules
{
    /**
     * Get the validation rules used to validate passwords.
     *
     * @return array<int, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    protected function passwordRules(): array
    {
        return [
            'required',
            'string',
            // START OF NEW SECURITY RULES
            Password::min(8)
                ->letters()       // Must contain at least one letter
                ->mixedCase()     // Must have Uppercase and Lowercase
                ->numbers()       // Must contain at least one number
                ->symbols(), // Checks if password was leaked in real data breaches
            // END OF NEW SECURITY RULES
            'confirmed'
        ];
    }
}