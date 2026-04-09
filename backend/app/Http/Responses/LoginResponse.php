<?php


namespace App\Http\Responses;

use Laravel\Fortify\Contracts\LoginResponse as LoginResponseContract;

class LoginResponse implements LoginResponseContract
{
    public function toResponse($request)
    {
        $user  = $request->user();
        $token = $user->createToken('auth-token')->plainTextToken;

        return response()
            ->json(['user' => $user->only('id', 'name', 'email')])
            ->cookie(
                'auth_token',        // cookie name
                $token,              // value — the Sanctum token
                60 * 24,             // minutes — match sanctum expiration
                '/dashboard',        // path
                env('SESSION_DOMAIN', 'localhost'), // domain
                env('APP_ENV') === 'production',    // secure — HTTPS only in prod
                true,                // httpOnly 
                false,               // raw
                'Lax'                // sameSite — use 'None' if cross-domain in prod
            );
    }
}