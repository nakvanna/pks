<?php

namespace App\Http\Controllers;

use App\Student;
use App\StudyInfo;
use Illuminate\Http\Request;

class ReportController extends Controller
{
    //student information
    public function student_information(){
        return Student::with('report_study_info')
            ->with('report_service_info')
//            ->where('id',5134)
            ->orderBy('id','desc')
            ->paginate(25);
    }

    //index
    public function due_report(){
        return Student::where('balance', '<', 0)->paginate(25);
    }
}
