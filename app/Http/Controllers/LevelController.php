<?php

namespace App\Http\Controllers;

use App\Level;
use Illuminate\Http\Request;

class LevelController extends Controller
{
    public function index(){
        return Level::orderBy('id','desc')->get();
    }
    public function store(Request $request){
        $input = $request->all();
        $request->validate([
            'name'=>'required'
        ]);
        $store = new Level();
        $store->name = $input['name'];
        $store->save();
        return $store;
    }
    public function destroy($id){
        $delete = Level::find($id);
        $delete->delete();
        return $id;
    }
}
