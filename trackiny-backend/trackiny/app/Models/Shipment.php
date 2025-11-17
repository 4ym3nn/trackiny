<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Model\ShipmentItem;
use App\Model\Company;
use App\Model\Transport;
class Shipment extends Model
{
    protected $fillable = [
        'tracking_number',
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

       public function shipment_item():HasMany
    {
        return $this->hasMany(ShipmentItem::class,'shipment_id','id');
    }
    public function shipment_company():BelongsTo {
        return $this->belongsTo(Company::class,'company_id','id');

    }
    public function shipment_transport():BelongsTo {
        return $this->belongsTo(Transport::class,'transport_id','id');
    }

}
