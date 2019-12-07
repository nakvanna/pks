<?php

namespace App\Http\Controllers;

use App\Invoice;
use Illuminate\Http\Request;

class InvoiceController extends Controller
{
    public function index(){
        return Invoice::with('students')->get();
    }
    public function store(Request $request){
        $input = $request->all();
        $request->validate([
            'student_id'=>'required',
            'balance'=>'required',
            'discount'=>'required',
            'after_discount'=>'required',
            'payment_status'=>'required',
            'invoice_date'=>'required',
        ]);
        $store = new Invoice();
        $store->student_id = $input['student_id'];
        $store->balance = $input['balance'];
        $store->discount = $input['discount'];
        $store->after_discount = $input['after_discount'];
        $store->payment_status = $input['payment_status'];
        $store->invoice_date = $input['invoice_date'];
        $store->save();
        return $store;
    }
    public function update($id, Request $request){
        $input = $request->all();
        $request->validate([
            'student_id'=>'required',
            'balance'=>'required',
            'discount'=>'required',
            'after_discount'=>'required',
            'payment_status'=>'required',
            'invoice_date'=>'required',
        ]);
        $update = Invoice::findOrFail($id);
        $update->student_id = $input['student_id'];
        $update->balance = $input['balance'];
        $update->discount = $input['discount'];
        $update->after_discount = $input['after_discount'];
        $update->payment_status = $input['payment_status'];
        $update->invoice_date = $input['invoice_date'];
        $update->save();
        return $update;
    }
    public function destroy($id){
        $delete = Invoice::find($id);
        $delete->delete();
        return $id;
    }
}
