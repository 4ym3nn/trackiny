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
    $table->id();
    $table->unsignedBigInteger('user_id')->unique();
    $table->string('company_name');
    $table->string('registration_number')->unique();
    $table->string('fleet_size');
    //TO DO : set to unique
    $table->string('license_number');
    $table->string('address');
    $table->string('phone');
    $table->string('contact_person');
    $table->timestamps();
    $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
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
