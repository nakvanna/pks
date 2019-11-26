<?php

namespace App\Http\Controllers;

use App\Position;
use Illuminate\Http\Request;

class PositionController extends Controller
{
    public function index(){
        return Position::orderBy('id','desc')->get();
    }
    public function store(Request $request){
        $input = $request->all();
        $request->validate([
            'position'=>'required'
        ]);
        $store = new Position();
        $store->position = $input['position'];
        $store->save();
        return $store;
    }
    public function destroy($id){
        $delete = Position::find($id);
        $delete->delete();
        return $id;
    }
}
