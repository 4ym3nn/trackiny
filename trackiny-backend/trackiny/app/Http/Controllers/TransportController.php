<?php

namespace App\Http\Controllers;
use App\Module\User;
use Illuminate\Http\Request;

class TransportController extends Controller
{
    public function user():BelongsTo
    {
        return $this->belongsTo(User::class);
    }

}
