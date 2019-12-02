<?php

namespace App\Http\Controllers;

use App\ServiceInfo;
use Illuminate\Http\Request;

class ServiceInfoController extends Controller
{
    public function index(){
        return ServiceInfo::with('students')->with('services')->get();
//        return ServiceInfo::all();
    }
    public function store(Request $request){
        $input = $request->all();
        $request->validate([
            'year'=>'required',
            'student_id'=>'required',
            'service_id'=>'required',
        ]);
        $store = new ServiceInfo();
        $store->year = $input['year'];
        $store->student_id = $input['student_id'];
        $store->service_id = $input['service_id'];
        $store->date_pay = $input['date_pay'];
        $store->last_term = 0;
        $store->is_used = true;
        $store->save();
        return $store;
    }
    public function destroy($id){
        $toggle = ServiceInfo::findOrFail($id);
        $toggle->is_used = !$toggle->is_used;
        $toggle->save();
        return $toggle;
    }
}
