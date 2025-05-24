<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth', 'verified'])->group(function ()
{
  Route::get('/', static fn() => Inertia::render('dashboard'))->name('home');
  Route::get('dashboard', static fn() => Inertia::render('dashboard'))->name('dashboard');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
