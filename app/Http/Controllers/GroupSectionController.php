<?php

namespace App\Http\Controllers;

use App\GroupSection;
use Illuminate\Http\Request;

class GroupSectionController extends Controller
{
    public function index(){
        return GroupSection::orderBy('id','desc')->get();
    }
    public function store(Request $request){
        $input = $request->all();
        $request->validate([
           'name'=>'required'
        ]);
        $store = new GroupSection();
        $store->name = $input['name'];
        $store->save();
        return $store;
    }
    public function destroy($id){
        $delete = GroupSection::find($id);
        $delete->delete();
        return $id;
    }
}
