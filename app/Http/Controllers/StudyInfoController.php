<?php

namespace App\Http\Controllers;

use App\StudyInfo;
use Illuminate\Http\Request;

class StudyInfoController extends Controller
{
    public function index(){
        return StudyInfo::with('students')->with('study_infos')->get();
    }
    public function store(Request $request){
        $input = $request->all();
        $request->validate([
            'year'=>'required',
            'student_id'=>'required',
            'collection_id'=>'required',
            'last_date_pay'=>'required',
        ]);
        $store = new StudyInfo();
        $store->year = $input['year'];
        $store->student_id = $input['student_id'];
        $store->collection_id = $input['collection_id'];
        $store->date_pay = $input['date_pay'];
        $store->last_date_pay = $input['last_date_pay'];
        $store->last_term = 0;
        $store->is_used = true;
        $store->save();
        return $store;
    }
    public function update($id, Request $request){
        $input = $request->all();
        $request->validate([
            'date_pay'=>'required',
            'last_term'=>'required',
        ]);
        $update = StudyInfo::findOrFail($id);
        $update->date_pay = $input['date_pay'];
        $update->last_term = $input['last_term'];
        $update->save();
        return $update;
    }
    public function destroy($id){
        $delete = StudyInfo::find($id);
        $delete->delete();
        return $id;
    }
}
