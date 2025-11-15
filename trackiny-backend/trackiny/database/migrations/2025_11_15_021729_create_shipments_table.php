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
        Schema::create('shipments', function (Blueprint $table) {
            $table->shipment_id();
            $table->timestamps();
            $table->foreignId('company_id');
            $table->foreignId('transport_id');
            $table->string('tracking_number');
            $table->string('origin_address');
            $table->string('destination_address');
            $table->dateTime('pickup_date');
            $table->dateTime('estimated_delivery');
            $table->dateTime('actual_delivery')->nullable();
            $table->string('status');
            $table->decimal('total_weight', 10, 2);
            $table->string('priority');
            $table->text('notes')->nullable();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shipments');
    }
};
