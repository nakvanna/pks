<?php

namespace App\Http\Controllers;

use App\DueHistory;
use Illuminate\Http\Request;

class DueHistoryController extends Controller
{
    public function index(){
        return DueHistory::all();
    }
    public function index_only($inv_id){
        return DueHistory::where('invoice_id', $inv_id)->get();
    }
    public function store(Request $request){
        $input = $request->all();
        $request->validate([
            'invoice_id'=>'required',
            'date_reduce_due'=>'required',
            'pay_due'=>'required',
            'desc'=>'required',
        ]);
        $store = new DueHistory();
        $store->invoice_id = $input['invoice_id'];
        $store->date_reduce_due = $input['date_reduce_due'];
        $store->pay_due = $input['pay_due'];
        $store->desc = $input['desc'];
        $store->save();
        return $store;
    }
}
