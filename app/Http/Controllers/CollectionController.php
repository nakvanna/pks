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
            'cost'         =>'required',
        ]);
        $store = new Collection();
        $store->group_section = $input['group_section'];
        $store->section       = $input['section'];
        $store->level         = $input['level'];
        $store->shift         = $input['shift'];
        $store->class_name    = $input['class_name'];
        $store->cost          = $input['cost'];
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
        $store = Collection::findOrFail($id);
        $store->group_section = $input['group_section'];
        $store->section       = $input['section'];
        $store->level         = $input['level'];
        $store->shift         = $input['shift'];
        $store->class_name    = $input['class_name'];
        $store->cost          = $input['cost'];
        $store->save();
        return $store;
    }
    public function destroy($id){
        $delete = Collection::find($id);
        $delete->delete();
        return $id;
    }
}
