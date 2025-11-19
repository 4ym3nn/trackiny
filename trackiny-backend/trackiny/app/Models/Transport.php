<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Shipment;

class Transport extends Model
{
    public function user():BelongsTo
    {
        return $this->belongsTo(User::class,'user_id','id');
    }
    public function shipment():HasMany
    {
        return $this->hasMany(Shipment::class,'shipment_id','id');
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

