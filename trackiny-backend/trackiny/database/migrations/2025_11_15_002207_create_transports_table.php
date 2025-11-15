<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('transports', function (Blueprint $table) {
            $table->transport_id();
            $table->timestamps();
            $table->string('company_name');
            $table->string('license_number');
            $table->integer('fleet_size');
            $table->string('registration_number');
            $table->string('address');
            $table->string('phone');
            $table->string('contact_person');

    });
    }
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transports');
    }
};
