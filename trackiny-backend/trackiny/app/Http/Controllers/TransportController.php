<?php

namespace App\Http\Controllers;
use App\Module\User;
use Illuminate\Http\Request;
use App\Module\Transport;
use App\Module\Shipment;
class TransportController extends Controller
{
    public function user():BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    public function shipment():BelongsToMany
    {
        return $this->belongsToMany(Shipment::class);
    }
    public function addTruck() {
        return Transport::create()
    }
}
