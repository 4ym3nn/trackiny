<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Module\ShipmentItem;
 class ShipmentController extends Controller
{
    public function shipment_item():HasMany
    {
        return $this->hasMany(ShipmentItem::class);
}
