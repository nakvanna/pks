<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    //study info
    public function study_info(){
        return $this->hasMany(StudyInfo::class);
    }
    //report study info
    public function report_study_info(){
        return $this->hasMany(StudyInfo::class,'student_id','id')->with('report_collection');
    }
    //service info
    public function service_info(){
        return $this->hasMany(ServiceInfo::class);
    }
    //report service info
    public function report_service_info(){
        return $this->hasMany(ServiceInfo::class,'student_id','id')->with('report_service');
    }
    //invoice
    public function invoice(){
        return $this->hasMany(Invoice::class);
    }
}
