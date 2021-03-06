<?php

namespace App\Http\Controllers;

use App\ServiceInfo;
use Illuminate\Http\Request;

class ServiceInfoController extends Controller
{
    public function index(){
        return ServiceInfo::with('students')->with('services')->get();
    }
    public function show_by_year(Request $request){
        return ServiceInfo::where('student_id', $request['data']['std_id'])
            ->where('year', $request['data']['year'])
            ->where('date_pay', $request['data']['date_pay'])
            ->with('students')->with('services')
            ->get();
    }
    public function store(Request $request){
        $input = $request->all();
        $request->validate([
            'year'=>'required',
            'student_id'=>'required',
            'service_id'=>'required',
            'last_date_pay'=>'required',
        ]);
        $store = new ServiceInfo();
        $store->year = $input['year'];
        $store->student_id = $input['student_id'];
        $store->service_id = $input['service_id'];
        $store->date_pay = $input['date_pay'];
        $store->last_date_pay = $input['last_date_pay'];
        $store->last_term = 0;
        $store->is_used = true;
        $store->save();
        return ServiceInfo::with('students')->with('services')->where('id', $store->id)->first();
    }
    public function update($id, Request $request){
        $input = $request->all();
        $update = ServiceInfo::findOrFail($id);
        $update->date_pay = $input['date_pay'];
        $update->last_term = $input['last_term'];
        $update->last_date_pay = $input['last_date_pay'];
        $update->is_used = $input['is_used'];
        $update->save();
        return $update;
    }
    public function destroy($id){
        $toggle = ServiceInfo::findOrFail($id);
        $toggle->delete();
    }
}
