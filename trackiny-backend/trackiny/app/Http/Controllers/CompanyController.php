<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Module\User;
use App\Module\Shipment;
class CompanyController extends Controller
{
    //
 public function user():BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    public function shipment():BelongsToMany
    {
        return $this->belongsToMany(Shipment::class);
    }


}
