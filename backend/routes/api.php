<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Http\Controllers\AuthenticatedSessionController;
use Laravel\Fortify\Http\Controllers\RegisteredUserController;

Route::post('/login', [AuthenticatedSessionController::class, 'store'])
    ->middleware('throttle:login');

Route::post('/register', [RegisteredUserController::class, 'store'])
    ->middleware('throttle:6,1');

Route::middleware('auth:sanctum')->group(function () {

    Route::get('/user', fn($req) => response()->json($req->user()));

});