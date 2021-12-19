<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

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

Route::get('/akademik', function () {
    return view('index');
});

Route::get('/akademik/presensi-online', function () {
    return view('index');
});

Route::get('/akademik/kartu-rencana-studi', function () {
    return view('index');
});

Route::get('/akademik/kartu-hasil-studi', function () {
    return view('index');
});

Route::get('/akademik/jadwal-kuliah', function () {
    return view('index');
});

Route::get('/akademik/jadwal-ujian', function () {
    return view('index');
});

Route::get('/akademik/absensi', function () {
    return view('index');
});

Route::get('/akademik/rekap-hasil-studi', function () {
    return view('index');
});

Auth::routes();

Route::get('/akademik', [HomeController::class, 'index'])->name('akademik');
