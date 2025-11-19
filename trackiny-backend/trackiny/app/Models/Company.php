<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\User;
use App\Models\Shipment;

class Company extends Model
{
    protected $fillable = [
        'user_id',
        'company_name',
        'registration_number',
        'address',
        'phone',
        'contact_person',
    ];

     public function user():BelongsTo
    {
        return $this->belongsTo(User::class,'user_id','id');
    }
    public function shipments():HasMany
    {
        return $this->hasMany(Shipment::class);
    }

}


