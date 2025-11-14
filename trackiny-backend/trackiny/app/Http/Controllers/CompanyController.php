<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Module\User;

class CompanyController extends Controller
{
    //
 public function user():BelongsTo
    {
        return $this->belongsTo(User::class);
    }


}
