<?php

namespace App\Http\Controllers;

use App\Collection;
use Illuminate\Http\Request;

class CollectionController extends Controller
{
    public function index(){
        return Collection::orderBy('id','desc')->get();
    }
    public function store(Request $request){
        $input = $request->all();
        $request->validate([
            'group_section'=>'required',
            'section'      =>'required',
            'level'        =>'required',
            'shift'        =>'required',
            'class_name'   =>'required',
            'cost_one'         =>'required',
            'cost_three'         =>'required',
            'cost_six'         =>'required',
            'cost_twelve'         =>'required',
        ]);
        $store = new Collection();
        $store->group_section = $input['group_section'];
        $store->section       = $input['section'];
        $store->level         = $input['level'];
        $store->shift         = $input['shift'];
        $store->class_name    = $input['class_name'];
        $store->cost_one          = $input['cost_one'];
        $store->cost_three          = $input['cost_three'];
        $store->cost_six          = $input['cost_six'];
        $store->cost_twelve          = $input['cost_twelve'];
        $store->save();
        return $store;
    }
    public function update($id, Request $request){
        $input = $request->all();
        $request->validate([
            'group_section'=>'required',
            'section'      =>'required',
            'level'        =>'required',
            'shift'        =>'required',
            'class_name'   =>'required',
            'cost'         =>'required',
        ]);
        $update = Collection::findOrFail($id);
        $update->group_section = $input['group_section'];
        $update->section       = $input['section'];
        $update->level         = $input['level'];
        $update->shift         = $input['shift'];
        $update->class_name    = $input['class_name'];
        $update->cost          = $input['cost'];
        $update->save();
        return $update;
    }
    public function destroy($id){
        $delete = Collection::find($id);
        $delete->delete();
        return $id;
    }
}
