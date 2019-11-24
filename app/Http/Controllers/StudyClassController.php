<?php

namespace App\Http\Controllers;

use App\StudyClass;
use Illuminate\Http\Request;

class StudyClassController extends Controller
{
    public function index(){
        return StudyClass::orderBy('id','desc')->get();
    }
    public function store(Request $request){
        $input = $request->all();
        $request->validate([
            'name'=>'required'
        ]);
        $store = new StudyClass();
        $store->name = $input['name'];
        $store->save();
        return $store;
    }
    public function destroy($id){
        $delete = StudyClass::find($id);
        $delete->delete();
        return $id;
    }
}
