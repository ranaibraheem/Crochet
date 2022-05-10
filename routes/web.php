<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AngularController;
use Illuminate\Support\Facades\Auth;

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

// Route::get('/', function () {
//     return view('angular');
// });

// Auth::routes();

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
// Route::get('/angular', [App\Http\Controllers\AngularController::class, 'index'])->name('angular');


Route::any('/{any}', [AngularController::class, 'index'])->where('any', '^(?!api).*$');
