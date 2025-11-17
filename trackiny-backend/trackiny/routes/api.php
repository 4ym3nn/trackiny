<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\TransportController;
use App\Http\Controllers\ShipmentController;


Route::post('/login',[UserController::class,'login']);
Route::post('/register',[UserController::class,'register']);
Route::post('/logout',[UserController::class,'logout']);
Route::post('/shipment/add_shipment',[ShipmentController::class,'addShipment']);
Route::patch('/shipment/update_shipment/{shipment_id}',[ShipmentController::class,'updateShipment']);
Route::get('/shipment/get_shipment/{shipment_id}',[ShipmentController::class,'getShipment']);
Route::get('/shipment/get_shipments/{transport_id}',[ShipmentController::class,'getShipments']);





