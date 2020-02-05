<?php

namespace App\Http\Controllers;

use App\Invoice;
use App\InvoiceDetail;
use App\ServiceInfo;
use App\StudyInfo;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function getInfo(Request $request)
    {
        $service_infos = ServiceInfo::where('student_id', $request['payment']['id'])
            ->where('year', $request['payment']['cur_year'])->with('services')->get();

        $study_infos = StudyInfo::where('student_id', $request['payment']['id'])
            ->where('year', $request['payment']['cur_year'])->with('study_infos')
            ->where('to_class', null)
            ->where('is_used', true)
            ->get();
        return response()->json(['services'=>$service_infos,'studies'=>$study_infos]);
    }
    public function getInvoice(Request $request){
        $invoice = Invoice::where('id', $request['data']['inv_id'])->with('students')->get();
        return $invoice;
    }
    public function getInvoiceDetail(Request $request){
        $detail = InvoiceDetail::where('invoice_id', $request['data']['inv_id'])->get();
        return $detail;
    }
}
