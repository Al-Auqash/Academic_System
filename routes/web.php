<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AcademicController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('auth/login');
});

Route::get('/login', function () {
    return view('auth/login');
});

//Route::get('/akademik', function () {
//    return view('layouts.app2');
//});

//Route::get('/akademik/presensi-online', function () {
//    return view('index');
//});
//
//Route::get('/akademik/kartu-rencana-studi', function () {
//    return view('index');
//});
//
//Route::get('/akademik/kartu-hasil-studi', function () {
//    return view('index');
//});
//
//Route::get('/akademik/jadwal-kuliah', function () {
//    return view('index');
//});
//
//Route::get('/akademik/jadwal-ujian', function () {
//    return view('index');
//});
//
//Route::get('/akademik/absensi', function () {
//    return view('index');
//});
//
//Route::get('/akademik/rekap-hasil-studi', function () {
//    return view('index');
//});

Auth::routes();

Route::prefix('akademik')->group(function () {
    Route::get('/', [AcademicController::class, 'index'])->name('academic');
    Route::get('/presensi-online', [AcademicController::class, 'onlinePresence']);
    Route::get('/kartu-rencana-studi', [AcademicController::class, 'courseSelectionSheet']);
    Route::get('/kartu-hasil-studi', [AcademicController::class, 'courseGrade']);
    Route::get('/jadwal-kuliah', [AcademicController::class, 'courseSchedule']);
    Route::get('/jadwal-ujian', [AcademicController::class, 'examSchedule']);
    Route::get('/absensi', [AcademicController::class, 'attendance']);
    Route::get('/rekap-hasil-studi', [AcademicController::class, 'summaryCourseGrade']);
});
