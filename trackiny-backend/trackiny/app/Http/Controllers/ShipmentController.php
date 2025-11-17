<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\ShipmentItem;
use App\Models\Shipment;

 class ShipmentController extends Controller
{

   public function addShipment() {
        $shipment = request()->validate([
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
    public function updateShipment($shipment_id){
    if (!ctype_digit($shipment_id)){
            abort(400,'Invalid transport id');
        }
        $updated_shipment=request()->validate([
        'company_id'           => 'nullable|integer|exists:companies,id',
        'transport_id'         => 'nullable|integer|exists:transports,id',
        'origin_address'       => 'nullable|string',
        'destination_address'  => 'nullable|string',
        'pickup_date'          => 'nullable|date',
        'estimated_delivery'   => 'nullable|date|after_or_equal:pickup_date',
        'actual_delivery'      => 'nullable|date|after_or_equal:pickup_date',
        'status'               => 'nullable|string',
        'total_weight'         => 'nullable|numeric|min:0',
        'priority'             => 'nullable|string',
        'notes'                => 'nullable|string',
    ]);
        $shipment=Shipment::find($shipment_id);
        if (!($shipment))
        {
            abort(400,'Shipment does not exist');
        }
        $shipment->update($updated_shipment);
        return response()->json(['message'=>'Shipment Updated successfully'],200);
    }
    public function getShipments(string $transport_id) {
        if (!ctype_digit($transport_id)){
            abort(400,'Invalid transport id');
        }
        return Shipment::where('transport_id',$transport_id)->get();
    }
    public function getShipment(string $shipment_id) {
        if (!ctype_digit($shipment_id)){
            abort(400,'Invalid transport id');
        }
        return Shipment::find($shipment_id);
    }
}
