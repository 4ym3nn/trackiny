<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Shipment;
class ShipmentItem extends Model
{
    protected $fillable = [
        'shipment_id',
        'item_name',
        'description',
        'quantity',
        'weight',
        'unit',
        'value',
        'sku',
        'created_at',
    ];
    public $timestamps = false;

    public function shipment():BelongsTo
             {
        return $this->belongsTo(Shipment::class,'shipment_id','id');

             }
}

