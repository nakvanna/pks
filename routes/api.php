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
Route::resource('/year','YearController');
Route::get('/current-year','YearController@current_year')->name('current.year');
Route::resource('/study-class','StudyClassController');
Route::resource('/shift','ShiftController');
Route::resource('/collection','CollectionController');
Route::post('/collection-json','CollectionController@json')->name('collection.json');
Route::resource('/service','ServiceController');
Route::post('/service-json','ServiceController@json')->name('service.json');
Route::resource('/position','PositionController');
Route::resource('/degree-note','DegreeNoteController');
Route::resource('/employee','EmployeeController');
Route::post('/employee-json','EmployeeController@json')->name('employee.json');
Route::resource('/student','StudentController');
Route::delete('/student-delete/{id}','StudentController@delete')->name('student.delete');
Route::resource('/user','UserController');
Route::post('/user-json','UserController@json')->name('user.json');
Route::post('/student-json','StudentController@json')->name('student.json');
Route::resource('/study-info','StudyInfoController');
Route::post('/study-info-json','StudyInfoController@json')->name('study_info.json');
Route::post('/study-info-change','StudyInfoController@storeChange')->name('study_info.change');
Route::resource('/service-info','ServiceInfoController');
Route::post('/service-info-by-year','ServiceInfoController@show_by_year')->name('service-info.by-year');
Route::post('/payment','PaymentController@getInfo')->name('payment.get-info');
Route::resource('/invoice','InvoiceController');
Route::resource('/invoice-detail','InvoiceDetailController');
Route::resource('/import','ExcelImportController');
Route::post('/import-student','ExcelImportController@import_student')->name('import.student');
Route::post('/import-collection','ExcelImportController@import_collection')->name('import.collection');
Route::post('/import-service','ExcelImportController@import_service')->name('import.service');
Route::post('/import-employee','ExcelImportController@import_employee')->name('import.employee');
Route::resource('/due-history', 'DueHistoryController');
Route::get('/due-history-only/{id}', 'DueHistoryController@index_only')->name('due-history.only');

