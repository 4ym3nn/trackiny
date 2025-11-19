<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\Transport;
use App\Models\Shipment;
use App\Models\User;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    public function getCompanies(){
        return User::where('type','company')->get();

    }
    public function getTransports(){
        return User::where('type','transport')->get();

    }
    public function getShipments(string $company_id)
    {
        $shipments= Shipment::where('company_id',$company_id)->get();
        return $shipments;
    }

    public function getShipment( string $shipment_id)
    {
        // TO DO : authorization
        $shipment= Shipment::where('id',$shipment_id)->get();
        return $shipment;
    }
}
