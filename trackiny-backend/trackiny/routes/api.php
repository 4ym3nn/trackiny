<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\TransportController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\AuthController;

Route::post('/login',[AuthController::class,'login']);
Route::post('/register',[AuthController::class,'register']);

Route::middleware('auth:sanctum','abilities:company')->group(function () {


    // User shared shit
    Route::get('/get_companies',[UserController::class,'getCompanies']);
    Route::get('/get_transports',[UserController::class,'getTransports']);
    Route::get('/get_shipment/{shipment_id}',[UserController::class,'getShipment']);
    Route::get('/get_shipments/{transport_id}',[UserController::class,'getShipments']);


    // company shit
    Route::post('/company/add_shipment',[CompanyController::class,'addShipment']);

    Route::patch('/company/update_shipment/{shipment_id}',[CompanyController::class,'updateShipment']);

    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::post('/logout',[AuthController::class,'logout']);
});


Route::middleware('auth:sanctum','abilities:transport')->group(function () {


    // User shared shit
    Route::get('/get_companies',[UserController::class,'getCompanies']);
    Route::get('/get_transports',[UserController::class,'getTransports']);
    Route::get('/get_shipment/{shipment_id}',[UserController::class,'getShipment']);
    Route::get('/get_shipments/{transport_id}',[UserController::class,'getShipments']);


    // company shit

    Route::patch('/company/update_shipment/{shipment_id}',[CompanyController::class,'updateShipment']);

    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::post('/logout',[AuthController::class,'logout']);
});



