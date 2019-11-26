<?php

namespace App\Http\Controllers;

use App\DegreeNote;
use Illuminate\Http\Request;

class DegreeNoteController extends Controller
{
    public function index(){
        return DegreeNote::orderBy('id','desc')->get();
    }
    public function store(Request $request){
        $input = $request->all();
        $request->validate([
            'degree_note'=>'required'
        ]);
        $store = new DegreeNote();
        $store->degree_note = $input['degree_note'];
        $store->save();
        return $store;
    }
    public function destroy($id){
        $delete = DegreeNote::find($id);
        $delete->delete();
        return $id;
    }
}
