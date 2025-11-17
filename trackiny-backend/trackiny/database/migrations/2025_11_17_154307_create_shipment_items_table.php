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
        Schema::create('shipment_items', function (Blueprint $table) {
    $table->id();
    $table->unsignedBigInteger('shipment_id');
    $table->string('item_name');
    $table->string('description')->nullable();
    $table->integer('quantity');
    $table->decimal('weight', 10, 2);
    $table->string('unit');
    $table->decimal('value', 12, 2);
    $table->string('sku')->nullable();
    $table->dateTime('created_at');

    $table->foreign('shipment_id')->references('id')->on('shipments')->onDelete('cascade');
});

   }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shipment_items');
    }
};
