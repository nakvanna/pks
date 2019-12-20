<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ExcelImportController extends Controller
{
    //student
    public function import_student(Request $request)
    {
        $input = $request->all();
        $request->validate([
            'data.*' => 'required'
        ]);
        foreach ($input['data'] as $item) {
            DB::table('students')->insert([
                'name' => $item['name'],
                'latin' => 'មិនបានដាក់ជូន',
                'gender' => $item['gender'],
                'photo' => 'image/placeholder/placeholder.png',
                'dob' => Carbon::parse($item['dob']),
                'std_contact' => $item['student_tel'],
                'pob' => $item['pob'],
                'address' => $item['cur'],
                'father_name' => $item['father_name'],
                'father_job' => $item['father_job'],
                'father_contact' => $item['father_tel'],
                'mother_name' => $item['mother_name'],
                'mother_job' => $item['mother_job'],
                'mother_contact' => $item['mother_tel'],
                'temp_grade' => $item['grade'],
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]);
        }
    }

    //collection
    public function import_collection(Request $request)
    {
        $input = $request->all();
        $request->validate([
            'data.*' => 'required'
        ]);
        foreach ($input['data'] as $item) {
            DB::table('collections')->insertGetId([
                'year' => $item['year'],
                'group_section' => $item['group_section'],
                'section' => $item['section'],
                'level' => $item['level'],
                'shift' => $item['shift'],
                'class_name' => $item['class_name'],
                'cost_one' => $item['cost_one'],
                'cost_three' => $item['cost_three'],
                'cost_six' => $item['cost_six'],
                'cost_twelve' => $item['cost_twelve'],
                'employee_id' => $item['employee_id'],
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]);
        }
    }

    //employee
    public function import_employee(Request $request){
        $input = $request->all();
        $request->validate([
            'data.*'     =>'required'
        ]);
        foreach ($input['data'] as $item){
            DB::table('employees')->insert([
                'profile' => $item['profile'],
                'kh_name' => $item['kh_name'],
                'en_name' => $item['en_name'],
                'gender' => $item['gender'],
                'dob' => Carbon::parse($item['dob']),
                'position' => $item['position'],
                'degree_note' => $item['degree_note'],
                'start_work' => Carbon::parse($item['start_work']),
                'contact' => $item['contact'],
                'pob' => $item['pob'],
                'addr' => $item['addr'],
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]);
        }
    }
}
