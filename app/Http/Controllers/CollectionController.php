<?php

namespace App\Http\Controllers;

use App\Collection;
use Illuminate\Http\Request;

class CollectionController extends Controller
{
    public function index(){
        return Collection::with('employees')->orderBy('id','desc')->get();
    }
    public function store(Request $request){
        $input = $request->all();
        $request->validate([
            'year'         =>'required',
            'group_section'=>'required',
            'section'      =>'required',
            'level'        =>'required',
            'shift'        =>'required',
            'class_name'   =>'required',
            'cost_one'     =>'required',
            'cost_three'   =>'required',
            'cost_six'     =>'required',
            'cost_twelve'  =>'required',
            'employee_id'  =>'required',
        ]);
        $store = new Collection();
        $store->year          = $input['year'];
        $store->group_section = $input['group_section'];
        $store->section       = $input['section'];
        $store->level         = $input['level'];
        $store->shift         = $input['shift'];
        $store->class_name    = $input['class_name'];
        $store->cost_one      = $input['cost_one'];
        $store->cost_three    = $input['cost_three'];
        $store->cost_six      = $input['cost_six'];
        $store->cost_twelve   = $input['cost_twelve'];
        $store->employee_id   = $input['employee_id'];
        $store->save();
        return Collection::with('employees')->where('id', $store->id)->first();
    }
    public function update($id, Request $request){
        $input = $request->all();
        $request->validate([
            'year'         =>'required',
            'group_section'=>'required',
            'section'      =>'required',
            'level'        =>'required',
            'shift'        =>'required',
            'class_name'   =>'required',
            'cost_one'     =>'required',
            'cost_three'   =>'required',
            'cost_six'     =>'required',
            'cost_twelve'  =>'required',
            'employee_id'  =>'required',
        ]);
        $update = Collection::findOrFail($id);
        $update->year          = $input['year'];
        $update->group_section = $input['group_section'];
        $update->section       = $input['section'];
        $update->level         = $input['level'];
        $update->shift         = $input['shift'];
        $update->class_name    = $input['class_name'];
        $update->cost_one      = $input['cost_one'];
        $update->cost_three    = $input['cost_three'];
        $update->cost_six      = $input['cost_six'];
        $update->cost_twelve   = $input['cost_twelve'];
        $update->employee_id   = $input['employee_id'];
        $update->save();
        return Collection::with('employees')->where('id', $id)->first();
    }
    public function destroy($id){
        $delete = Collection::find($id);
        $delete->delete();
        return $id;
    }
}
