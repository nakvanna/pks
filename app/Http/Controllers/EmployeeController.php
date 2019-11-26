<?php

namespace App\Http\Controllers;

use App\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function index(){
        return Employee::orderBy('id','desc')->get();
    }
    public function store(Request $request){
        $input = $request->all();
        $request->validate([
            'profile'     =>'required',
            'kh_name'     =>'required',
            'en_name'     =>'required',
            'gender'      =>'required',
            'dob'         =>'required',
            'position'    =>'required',
            'degree_note' =>'required',
            'start_work'  =>'required',
            'contact'     =>'required',
            'pob'         =>'required',
            'addr'        =>'required',
        ]);
        $store = new Employee();
        $store->profile     = $input['profile'];
        $store->kh_name     = $input['kh_name'];
        $store->en_name     = $input['en_name'];
        $store->gender      = $input['gender'];
        $store->dob         = $input['dob'];
        $store->position    = $input['position'];
        $store->degree_note = $input['degree_note'];
        $store->start_work  = $input['start_work'];
        $store->contact     = $input['contact'];
        $store->pob         = $input['pob'];
        $store->addr        = $input['addr'];
        $store->save();
        return $store;
    }
    public function update($id, Request $request){
        $input = $request->all();
        $request->validate([
            'profile'     =>'required',
            'kh_name'     =>'required',
            'en_name'     =>'required',
            'gender'      =>'required',
            'dob'         =>'required',
            'position'    =>'required',
            'degree_note' =>'required',
            'start_work'  =>'required',
            'contact'     =>'required',
            'pob'         =>'required',
            'addr'        =>'required',
        ]);
        $store = Employee::findOrFail($id);
        $store->profile     = $input['profile'];
        $store->kh_name     = $input['kh_name'];
        $store->en_name     = $input['en_name'];
        $store->gender      = $input['gender'];
        $store->dob         = $input['dob'];
        $store->position    = $input['position'];
        $store->degree_note = $input['degree_note'];
        $store->start_work  = $input['start_work'];
        $store->contact     = $input['contact'];
        $store->pob         = $input['pob'];
        $store->addr        = $input['addr'];
        $store->save();
        return $store;
    }
    public function destroy($id){
        $delete = Employee::find($id);
        $delete->delete();
        return $id;
    }
}
