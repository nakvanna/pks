<?php

namespace App\Http\Controllers;

use App\StudyInfo;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StudyInfoController extends Controller
{
    public function index(){
        return StudyInfo::with('students')->with('study_infos')->get();
    }
    public function store(Request $request){
        $input = $request->all();
        $request->validate([
            'year'=>'required',
            'students.*'=>'required',
            'study_infos.*'=>'required',
            'last_date_pay'=>'required',
        ]);
        foreach ($input['students'] as $student){
            foreach ($input['study_infos'] as $study_info){
                DB::table('study_infos')->insert([
                    'year' => $input['year']['name'],
                    'student_id' => $student['id'],
                    'collection_id' => $study_info['collection_id']['id'],
                    'date_pay' => $input['date_pay'],
                    'last_date_pay' => $input['last_date_pay'],
                    'last_term' => 0,
                    'is_used' => true,
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now()
                ]);
            }
        }
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
