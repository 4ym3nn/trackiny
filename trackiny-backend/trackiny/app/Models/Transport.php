<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Model\User;
use App\Model\Shipment;

class Transport extends Model
{
    public function user():BelongsTo
    {
        return $this->belongsTo(User::class,'user_id','id');
    }
    public function shipment():BelongsToMany
    {
        return $this->belongsToMany(Shipment::class,'shipment_id','id');
    }

    protected $fillable = [
        'user_id',
        'company_name',
        'registration_number',
        'fleet_size',
        'license_number',
        'address',
        'phone',
        'contact_person',
    ];
}

