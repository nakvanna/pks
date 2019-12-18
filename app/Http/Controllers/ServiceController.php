<?php

namespace App\Http\Controllers;

use App\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function index(){
        return Service::with('employees')->orderBy('id','desc')->get();
    }
    public function store(Request $request){
        $input = $request->all();
        $request->validate([
            'year'        =>'required',
            'type'        =>'required',
            'service'     =>'required',
            'cost_one'    =>'required',
            'cost_three'  =>'required',
            'cost_six'    =>'required',
            'cost_twelve' =>'required',
            'employee_id' =>'required',
        ]);
        $store = new Service();
        $store->year        = $input['year'];
        $store->type        = $input['type'];
        $store->service     = $input['service'];
        $store->cost_one    = $input['cost_one'];
        $store->cost_three  = $input['cost_three'];
        $store->cost_six    = $input['cost_six'];
        $store->cost_twelve = $input['cost_twelve'];
        $store->employee_id = $input['employee_id'];
        $store->save();
        return Service::with('employees')->where('id', $store->id)->first();
    }
    public function update($id, Request $request){
        $input = $request->all();
        $request->validate([
            'year'        =>'required',
            'type'        =>'required',
            'service'     =>'required',
            'cost_one'    =>'required',
            'cost_three'  =>'required',
            'cost_six'    =>'required',
            'cost_twelve' =>'required',
            'employee_id' =>'required',
        ]);
        $store = Service::findOrFail($id);
        $store->year        = $input['year'];
        $store->type        = $input['type'];
        $store->service     = $input['service'];
        $store->cost_one    = $input['cost_one'];
        $store->cost_three  = $input['cost_three'];
        $store->cost_six    = $input['cost_six'];
        $store->cost_twelve = $input['cost_twelve'];
        $store->employee_id = $input['employee_id'];
        $store->save();
        return $store;
    }
    public function destroy($id){
        $delete = Service::find($id);
        $delete->delete();
        return $id;
    }
}
