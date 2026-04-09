# 🚀 Next.js + Laravel Auth Starter

Production-ready authentication using **Laravel Fortify + Sanctum +
Next.js**\
Secure, reusable, and built with **httpOnly cookie authentication**

------------------------------------------------------------------------

## 📦 Project Structure

    sog/
    ├── api-backend   # Laravel API (Fortify + Sanctum)
    └── frontend      # Next.js App Router

------------------------------------------------------------------------

## 🔐 Auth Strategy

-   Laravel Fortify → handles login, register, password reset
-   Laravel Sanctum → issues and validates API tokens
-   httpOnly Cookie → securely stores token (not accessible by JS)
-   Next.js Middleware → protects routes

------------------------------------------------------------------------

## ❗ Why This Setup

Most tutorials use `localStorage` for tokens ❌\
This is **not secure** in production (XSS risk)

This project uses:

-   ✅ httpOnly cookies (secure)
-   ✅ No token exposure to frontend
-   ✅ Server-side route protection

------------------------------------------------------------------------

## ⚙️ Backend Setup (Laravel)

### Install

``` bash
composer require laravel/fortify
composer require laravel/sanctum

php artisan fortify:install
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
php artisan migrate
```

------------------------------------------------------------------------

### User Model

``` php
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens;
}
```

------------------------------------------------------------------------

### Important Config

**config/fortify.php**

``` php
'views' => false,
```

**config/sanctum.php**

``` php
'expiration' => 1440,
```

**config/cors.php**

``` php
'supports_credentials' => true,
```

------------------------------------------------------------------------

## ⚙️ Frontend Setup (Next.js)

### Environment

    NEXT_PUBLIC_API_URL=http://localhost:8000

------------------------------------------------------------------------

### API Calls (IMPORTANT)

``` ts
fetch(url, {
  credentials: 'include'
});
```

✔ Required to send httpOnly cookie

------------------------------------------------------------------------

## 🔐 Auth Flow

1.  User logs in
2.  Laravel returns httpOnly cookie
3.  Browser stores cookie automatically
4.  Next.js sends cookie on every request
5.  Backend validates token via Sanctum

------------------------------------------------------------------------

## 🛡 Route Protection

**middleware.ts**

``` ts
import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('auth_token');

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}
```

------------------------------------------------------------------------

## 🔄 Auth Endpoints

  Endpoint           Method
  ------------------ --------
  /login             POST
  /logout            POST
  /register          POST
  /forgot-password   POST
  /reset-password    POST

------------------------------------------------------------------------

## ✅ Production Checklist

### Backend

-   APP_ENV=production
-   APP_DEBUG=false
-   HTTPS enabled
-   Token expiration set
-   CORS configured
-   Queue running
-   Mail working

### Frontend

-   Correct API URL (https)
-   credentials: 'include'
-   Middleware enabled
-   No localStorage tokens

------------------------------------------------------------------------

## ⚡ Features

-   🔒 Secure authentication (XSS-safe)
-   ♻️ Reusable starter template
-   🚀 Fast project setup
-   🧩 Clean API + frontend separation

------------------------------------------------------------------------

## 💡 Purpose

Reusable auth starter so you **don't rebuild authentication every
project**

------------------------------------------------------------------------

## ⭐ Tip

If this helps you, star the repo 😄

# Next.js + Laravel Auth Starter

Production-ready authentication using **Laravel Fortify + Sanctum +
Next.js**\
Secure, reusable, and built with **httpOnly cookie authentication**

------------------------------------------------------------------------

## Project Structure

    sog/
    ├── api-backend   # Laravel API (Fortify + Sanctum)
    └── frontend      # Next.js App Router

------------------------------------------------------------------------

## Auth Strategy

-   Laravel Fortify → handles login, register, password reset
-   Laravel Sanctum → issues and validates API tokens
-   httpOnly Cookie → securely stores token (not accessible by JS)
-   Next.js Middleware → protects routes

------------------------------------------------------------------------

## Why This Setup

Most tutorials use `localStorage` for tokens\
This is **not secure** in production (XSS risk)

This project uses:

-  httpOnly cookies (secure)
-  No token exposure to frontend
-  Server-side route protection

------------------------------------------------------------------------

## Backend Setup (Laravel)

### Install

``` bash
composer require laravel/fortify
composer require laravel/sanctum

php artisan fortify:install
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
php artisan migrate
```

------------------------------------------------------------------------

### User Model

``` php
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens;
}
```

------------------------------------------------------------------------

### Important Config

**config/fortify.php**

``` php
'views' => false,
```

**config/sanctum.php**

``` php
'expiration' => 1440,
```

**config/cors.php**

``` php
'supports_credentials' => true,
```

------------------------------------------------------------------------

## Frontend Setup (Next.js)

### Environment

    NEXT_PUBLIC_API_URL=http://localhost:8000

------------------------------------------------------------------------

### API Calls (IMPORTANT)

``` ts
fetch(url, {
  credentials: 'include'
});
```

✔ Required to send httpOnly cookie

------------------------------------------------------------------------

## Auth Flow

1.  User logs in
2.  Laravel returns httpOnly cookie
3.  Browser stores cookie automatically
4.  Next.js sends cookie on every request
5.  Backend validates token via Sanctum

------------------------------------------------------------------------

## Route Protection

**middleware.ts**

``` ts
import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('auth_token');

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}
```

------------------------------------------------------------------------

## Auth Endpoints

  Endpoint           Method
  ------------------ --------
  /login             POST
  /logout            POST
  /register          POST
  /forgot-password   POST
  /reset-password    POST

------------------------------------------------------------------------

## Production Checklist

### Backend

-   APP_ENV=production
-   APP_DEBUG=false
-   HTTPS enabled
-   Token expiration set
-   CORS configured
-   Queue running
-   Mail working

### Frontend

-   Correct API URL (https)
-   credentials: 'include'
-   Middleware enabled
-   No localStorage tokens

------------------------------------------------------------------------

## Features

-  Secure authentication (XSS-safe)
-  Reusable starter template
-  Fast project setup
-  Clean API + frontend separation

------------------------------------------------------------------------

## Purpose

Reusable auth starter so you **don't rebuild authentication every
project**

------------------------------------------------------------------------

## Tip

If this helps you, star the repo 
