<?php

namespace App\Http\Controllers;

use App\InvoiceDetail;
use Illuminate\Http\Request;

class InvoiceDetailController extends Controller
{
    public function index(){
        return InvoiceDetail::all();
    }
    public function show($id){
        return InvoiceDetail::where('invoice_id', $id)->get();
    }
    public function store(Request $request){
        $input = $request->all();
        $request->validate([
            'invoice_id'=>'required',
            'item'=>'required',
            'term'=>'required',
            'balance'=>'required',
        ]);
        $store = new InvoiceDetail();
        $store->invoice_id = $input['invoice_id'];
        $store->item = $input['item'];
        $store->term = $input['term'];
        $store->balance = $input['balance'];
        $store->save();
        return $store;
    }
    public function update($id, Request $request){
        $input = $request->all();
        $request->validate([
            'invoice_id'=>'required',
            'item'=>'required',
            'term'=>'required',
            'balance'=>'required',
        ]);
        $update = InvoiceDetail::findOrFail($id);
        $update->invoice_id = $input['invoice_id'];
        $update->item = $input['item'];
        $update->term = $input['term'];
        $update->balance = $input['balance'];
        $update->save();
        return $update;
    }
    public function destroy($id){
        $delete = InvoiceDetail::find($id);
        $delete->delete();
        return $id;
    }
}
