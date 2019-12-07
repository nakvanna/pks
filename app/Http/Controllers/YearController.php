<?php

namespace App\Http\Controllers;

use App\Year;
use Illuminate\Http\Request;

class YearController extends Controller
{
    public function index(){
        return Year::orderBy('id','desc')->get();
    }
    public function current_year(){
        return Year::where('current', true)->get();
    }
    public function store(Request $request){
        $input = $request->all();
        $request->validate([
            'name'=>'required'
        ]);
        $store = new Year();
        $store->name = $input['name'];
        $store->save();
        return $store;
    }
    public function update($id, Request $request){
        $input = $request->all();
        $request->validate([
            'current'         =>'required',
        ]);
        $store = Year::findOrFail($id);
        $store->current = $input['current'];
        $store->save();
        return $store;
    }
    public function destroy($id){
        $delete = Year::find($id);
        $delete->delete();
        return $id;
    }
}
