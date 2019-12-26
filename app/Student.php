<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    //study info
    public function study_info(){
        return $this->hasMany(StudyInfo::class);
    }
    //service info
    public function service_info(){
        return $this->hasMany(ServiceInfo::class);
    }
    //invoice
    public function invoice(){
        return $this->hasMany(Invoice::class);
    }
}
