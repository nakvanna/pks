<?php

namespace App\Http\Controllers;

use App\ServiceInfo;
use App\StudyInfo;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function getInfo(Request $request)
    {
        $service_infos = ServiceInfo::where('student_id', $request['payment']['id'])
            ->where('year', $request['payment']['cur_year'])->with('services')->get();

        $study_infos = StudyInfo::where('student_id', $request['payment']['id'])
            ->where('year', $request['payment']['cur_year'])->with('study_infos')
            ->where('to_class', null)
            ->get();
        return response()->json(['services'=>$service_infos,'studies'=>$study_infos]);
    }
}
