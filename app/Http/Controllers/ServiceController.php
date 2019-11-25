<?php

namespace App\Http\Controllers;

use App\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function index(){
        return Service::orderBy('id','desc')->get();
    }
    public function store(Request $request){
        $input = $request->all();
        $request->validate([
            'type'=>'required',
            'service'=>'required',
            'cost'=>'required',
        ]);
        $store = new Service();
        $store->type = $input['type'];
        $store->service = $input['service'];
        $store->cost = $input['cost'];
        $store->save();
        return $store;
    }
    public function update($id, Request $request){
        $input = $request->all();
        $request->validate([
            'type'      =>'required',
            'service'   =>'required',
            'cost'      =>'required',
        ]);
        $store = Service::findOrFail($id);
        $store->type    = $input['type'];
        $store->service = $input['service'];
        $store->cost    = $input['cost'];
        $store->save();
        return $store;
    }
    public function destroy($id){
        $delete = Service::find($id);
        $delete->delete();
        return $id;
    }
}
