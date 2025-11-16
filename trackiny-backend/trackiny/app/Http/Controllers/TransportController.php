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
    public function addShipment() {
        $shipment = $request->validate([
        'tracking_number'      => 'required|string|unique:shipments,tracking_number',
        'company_id'           => 'required|integer|exists:companies,id',
        'transport_id'         => 'required|integer|exists:transports,id',
        'origin_address'       => 'required|string',
        'destination_address'  => 'required|string',
        'pickup_date'          => 'required|date',
        'estimated_delivery'   => 'required|date|after_or_equal:pickup_date',
        'actual_delivery'      => 'nullable|date|after_or_equal:pickup_date',
        'status'               => 'required|string',
        'total_weight'         => 'required|numeric|min:0',
        'priority'             => 'required|string',
        'notes'                => 'nullable|string',
    ]);
        return Shipment::create($shipment);
    }
}
