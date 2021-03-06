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
Route::resource('/user', 'UserController');
Route::post('/user-register', 'UserController@register')->name('user.register');
Route::post('/user-login', 'UserController@login')->name('user.login');
Route::group(['middleware' => 'auth:api'], function () {
    Route::post('/file-upload', 'FileUploadController@upload')->name('file.upload');
    Route::resource('/group-section', 'GroupSectionController');
    Route::resource('/section', 'SectionController');
    Route::resource('/level', 'LevelController');
    Route::resource('/year', 'YearController');
    Route::get('/current-year', 'YearController@current_year')->name('current.year');
    Route::resource('/study-class', 'StudyClassController');
    Route::resource('/shift', 'ShiftController');
    Route::resource('/collection', 'CollectionController');
    Route::post('/collection-json', 'CollectionController@json')->name('collection.json');
    Route::resource('/service', 'ServiceController');
    Route::post('/service-json', 'ServiceController@json')->name('service.json');
    Route::resource('/position', 'PositionController');
    Route::resource('/degree-note', 'DegreeNoteController');
    Route::resource('/employee', 'EmployeeController');
    Route::post('/employee-json', 'EmployeeController@json')->name('employee.json');
    Route::resource('/student', 'StudentController');
    Route::delete('/student-delete/{id}', 'StudentController@delete')->name('student.delete');
    Route::post('/student-increment-due', 'StudentController@increment_due')->name('student.increment-due');
    Route::post('/student-decrement-due', 'StudentController@decrement_due')->name('student.decrement-due');
    Route::resource('/user', 'UserController');
    Route::post('/user-json', 'UserController@json')->name('user.json');
    Route::post('/student-json', 'StudentController@json')->name('student.json');
    Route::resource('/study-info', 'StudyInfoController');
    Route::put('/study-info-update_unused/{id}', 'StudyInfoController@update_unused')->name('study-info.update_unused');
    Route::post('/study-info-json', 'StudyInfoController@json')->name('study_info.json');
    Route::post('/study-info-change', 'StudyInfoController@storeChange')->name('study_info.change');
    Route::post('/study-info-by-year', 'StudyInfoController@show_by_year')->name('study-info.by-year');
    Route::resource('/service-info', 'ServiceInfoController');
    Route::post('/service-info-by-year', 'ServiceInfoController@show_by_year')->name('service-info.by-year');
    Route::post('/payment', 'PaymentController@getInfo')->name('payment.get-info');
    Route::post('/invoice-payment', 'PaymentController@getInvoice')->name('payment.get-invoice');
    Route::post('/invoice-detail-payment', 'PaymentController@getInvoiceDetail')->name('payment.get-invoice-detail');
    Route::resource('/invoice', 'InvoiceController');
    Route::delete('/invoice-delete/{id}', 'InvoiceController@delete')->name('invoice.delete');
    Route::resource('/invoice-detail', 'InvoiceDetailController');
    Route::resource('/import', 'ExcelImportController');
    Route::post('/import-student', 'ExcelImportController@import_student')->name('import.student');
    Route::post('/import-collection', 'ExcelImportController@import_collection')->name('import.collection');
    Route::post('/import-service', 'ExcelImportController@import_service')->name('import.service');
    Route::post('/import-employee', 'ExcelImportController@import_employee')->name('import.employee');
    Route::resource('/due-history', 'DueHistoryController');
    Route::get('/due-history-only/{id}', 'DueHistoryController@index_only')->name('due-history.only');
    Route::post('/report-student-info', 'ReportController@student_information')->name('report.student_info');
    Route::post('/report-student-due', 'ReportController@due_report')->name('report.student_due');
    Route::get('/get-invoice/{id}', 'InvoiceController@get_invoice')->name('invoice.get');
});
//Route::get('/get-invoice/{id}', 'InvoiceController@get_invoice')->name('invoice.get');