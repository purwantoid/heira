<?php

declare(strict_types=1);

namespace App\Facades;

use Illuminate\Support\Facades\Facade;

class Utils extends Facade
{
  public static function getFacadeAccessor(): string
  {
    return \App\Utils\Utility::class;
  }
}