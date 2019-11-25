<?php

namespace App\Http\Controllers;

use App\Shift;
use Illuminate\Http\Request;

class ShiftController extends Controller
{
    public function index(){
        return Shift::orderBy('id','desc')->get();
    }
    public function store(Request $request){
        $input = $request->all();
        $request->validate([
            'name'=>'required',
            'start_time'=>'required',
            'end_time'=>'required',
            'duration'=>'required',
        ]);
        $store = new Shift();
        $store->name = $input['name'];
        $store->start_time = $input['start_time'];
        $store->end_time = $input['end_time'];
        $store->duration = $input['duration'];
        $store->save();
        return $store;
    }
    public function destroy($id){
        $delete = Shift::find($id);
        $delete->delete();
        return $id;
    }
}
