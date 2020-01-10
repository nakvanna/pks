<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ServiceInfo extends Model
{
    public function students(){
        return $this->belongsTo(Student::class, 'student_id', 'id')
            ->select('id', 'name', 'latin', 'gender', 'dob', 'photo', 'balance');
    }
    public function report_service(){
        return $this->belongsTo( Service::class, 'service_id', 'id')
            ->select('id', 'type', 'service', 'cost_one', 'cost_three', 'cost_six', 'cost_twelve', 'employee_id')
            ->with('employees');
    }
    public function services(){
        return $this->belongsTo( Service::class, 'service_id', 'id')
            ->select('id', 'type', 'service', 'cost_one', 'cost_three', 'cost_six', 'cost_twelve', 'employee_id')
            ->with('employees');
    }
}
