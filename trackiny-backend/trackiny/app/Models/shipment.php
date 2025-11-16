<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class shipment extends Model
{
    use HasUuids;
    const $primaryKey = 'tracking_number';
    protected $fillable = [
        'company_id',
        'transport_id',
        'origin_address',
        'destination_address',
        'pickup_date',
        'estimated_delivery',
        'actual_delivery',
        'status',
        'total_weight',
        'priority',
        'notes',
    ];
}
