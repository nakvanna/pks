<?php

namespace App\Http\Controllers;

use App\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    //index
    public function json(){
        return Student::orderBy('id','desc')->paginate(25);
    }
    //index
    public function index(){
        return Student::orderBy('id','desc')->get();
    }
    //store
    public function store(Request $request){
        $input = $request->all();
        $request->validate([
            'name'=>'required',
            'latin'=>'required',
            'gender'=>'required',
            'photo'=>'required',
            'dob'=>'required',
            'std_contact'=>'required',
            'pob'=>'required',
            'address'=>'required',
            'father_name'=>'required',
            'father_job'=>'required',
            'father_contact'=>'required',
            'mother_name'=>'required',
            'mother_job'=>'required',
            'mother_contact'=>'required',
        ]);
        $store = new Student();
        $store->name = $input['name'];
        $store->latin = $input['latin'];
        $store->gender = $input['gender'];
        $store->photo = $input['photo'];
        $store->dob = $input['dob'];
        $store->std_contact = $input['std_contact'];
        $store->pob = $input['pob'];
        $store->address = $input['address'];
        $store->father_name = $input['father_name'];
        $store->father_job = $input['father_job'];
        $store->father_contact = $input['father_contact'];
        $store->mother_name = $input['mother_name'];
        $store->mother_job = $input['mother_job'];
        $store->mother_contact = $input['mother_contact'];
        $store->save();
        return Student::with('report_study_info')
            ->with('report_service_info')
            ->where('id',$store->id)
            ->orderBy('id','desc')->first();
    }
    //edit
    public function edit($id){
        return Student::findOrFail($id);
    }
    //update
    public function update(Request $request,$id){
        $input = $request->all();
        $request->validate([
            'name'=>'required',
            'latin'=>'required',
            'gender'=>'required',
            'photo'=>'required',
            'dob'=>'required',
            'std_contact'=>'required',
            'pob'=>'required',
            'address'=>'required',
            'father_name'=>'required',
            'father_job'=>'required',
            'father_contact'=>'required',
            'mother_name'=>'required',
            'mother_job'=>'required',
            'mother_contact'=>'required',
        ]);
        $update = Student::findOrFail($id);
        $update->name = $input['name'];
        $update->latin = $input['latin'];
        $update->gender = $input['gender'];
        $update->photo = $input['photo'];
        $update->dob = $input['dob'];
        $update->std_contact = $input['std_contact'];
        $update->pob = $input['pob'];
        $update->address = $input['address'];
        $update->father_name = $input['father_name'];
        $update->father_job = $input['father_job'];
        $update->father_contact = $input['father_contact'];
        $update->mother_name = $input['mother_name'];
        $update->mother_job = $input['mother_job'];
        $update->mother_contact = $input['mother_contact'];
        $update->save();
        return Student::with('report_study_info')
            ->with('report_service_info')
            ->where('id',$update->id)
            ->orderBy('id','desc')->first();
    }
    //update only balance
    public function increment_due(Request $request){
        Student::findOrFail($request['data']['id'])->increment('balance', $request['data']['due']);
    }
    public function decrement_due(Request $request){
        Student::findOrFail($request['data']['id'])->decrement('balance', $request['data']['due']);
    }
    //destroy
    public function destroy($id){
        $toggle = Student::findOrFail($id);
        $toggle->status = !$toggle->status;
        $toggle->save();
        return $toggle;
    }
    //delete
    public function delete($id){
        $student = Student::findOrFail($id);
        $student->study_info()->delete();
        $student->service_info()->delete();
        $student->invoice()->delete();
        $student->delete();
    }
}
