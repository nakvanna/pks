<?php

namespace App\Http\Controllers;

use App\StudyInfo;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StudyInfoController extends Controller
{
    public function json(){
        return StudyInfo::with('students')->with('study_infos')->orderBy('id','desc')->paginate(25);
    }
    public function index(){
        return StudyInfo::with('students')->with('study_infos')->get();
    }
    public function show_by_year(Request $request){
        return StudyInfo::where('student_id', $request['data']['std_id'])
            ->where('year', $request['data']['year'])
            ->where('date_pay', $request['data']['date_pay'])
            ->with('students')->with('study_infos')
            ->get();
    }
    public function store(Request $request){
        $input = $request->all();
        $request->validate([
            'year'=>'required',
            'students.*'=>'required',
            'study_infos.*'=>'required',
            'last_date_pay'=>'required',
        ]);
        $data = [];
        foreach ($input['students'] as $student){
            foreach ($input['study_infos'] as $study_info){
                $id = DB::table('study_infos')->insertGetId([
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
                $data[]=StudyInfo::with('students')->with('study_infos')->where('id',$id)->first();
                ;
            }
        }
        return $data;
    }
    public function storeChange(Request $request){
        $input = $request->all();
        $request->validate([
            'students.*'=>'required',
            'study_infos.*'=>'required'
        ]);
        $data = [];
        foreach ($input['students'] as $student){
            foreach ($input['study_infos'] as $study_info){
                //change
                DB::table('study_infos')
                    ->where('id',$student['study_info_id'])
                    ->update([
                        'to_class'=>$student['class_name'].'->'.$study_info['collection_id']['class_name'],
                        'date_change'=>$input['date_change']
                    ]);
                //new insert
                $id = DB::table('study_infos')->insertGetId([
                    'year' => $input['year']['name'],
                    'student_id' => $student['id'],
                    'collection_id' => $study_info['collection_id']['id'],
                    'date_pay' => $student['date_pay'],
                    'last_date_pay' => $student['last_date_pay'],
                    'last_term' => $student['last_term'],
                    'is_used' => true,
                    'from_class'=>$student['class_name'].'->'.$study_info['collection_id']['class_name'],
                    'date_change'=>$input['date_change'],
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now()
                ]);
                $data[]=StudyInfo::with('students')->with('study_infos')->where('id',$id)->first();
                ;
            }
        }
        return $data;
    }
    public function update($id, Request $request){
        $input = $request->all();
        $request->validate([
            'last_term'=>'required',
        ]);
        $update = StudyInfo::findOrFail($id);
        $update->date_pay = $input['date_pay'];
        $update->last_term = $input['last_term'];
        $update->save();
        return StudyInfo::with('students')->with('study_infos')->where('id',$update->id)->first();
    }
    public function destroy($id){
        $delete = StudyInfo::findOrFail($id);
        $delete->delete();
        return $id;
    }
}
