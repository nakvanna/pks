<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/file-upload','FileUploadController@upload')->name('file.upload');
Route::resource('/group-section','GroupSectionController');
Route::resource('/section','SectionController');
Route::resource('/level','LevelController');
Route::resource('/study-class','StudyClassController');
Route::resource('/shift','ShiftController');
Route::resource('/collection','CollectionController');
Route::resource('/service','ServiceController');
Route::resource('/position','PositionController');
Route::resource('/degree-note','DegreeNoteController');
Route::resource('/employee','EmployeeController');
