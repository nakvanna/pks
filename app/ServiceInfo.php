<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ServiceInfo extends Model
{
    public function students(){
        return $this->belongsTo(Student::class, 'student_id', 'id')
            ->select('id', 'name', 'latin', 'gender', 'dob', 'photo');
    }
    public function services(){
        return $this->belongsTo( Service::class, 'service_id', 'id')
            ->select('id', 'type', 'service');
    }
}