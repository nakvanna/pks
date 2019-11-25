<?php

namespace App\Http\Controllers;

use App\Section;
use Illuminate\Http\Request;

class SectionController extends Controller
{
    public function index(){
        return Section::orderBy('id','desc')->get();
    }
    public function store(Request $request){
        $input = $request->all();
        $request->validate([
            'name'=>'required'
        ]);
        $store = new Section();
        $store->name = $input['name'];
        $store->save();
        return $store;
    }
    public function destroy($id){
        $delete = Section::find($id);
        $delete->delete();
        return $id;
    }
}
