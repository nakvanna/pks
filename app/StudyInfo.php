<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StudyInfo extends Model
{
    public function students(){
        return $this->belongsTo(Student::class, 'student_id', 'id');
    }
    public function report_collection(){
        return $this->belongsTo( Collection::class, 'collection_id', 'id')
            ->select('id', 'group_section', 'section', 'level', 'class_name', 'shift', 'cost_one', 'cost_three', 'cost_six', 'cost_twelve', 'employee_id')
            ->with('employees');
    }
    public function study_infos(){
        return $this->belongsTo( Collection::class, 'collection_id', 'id')
            ->select('id', 'group_section', 'section', 'level', 'class_name', 'shift', 'cost_one', 'cost_three', 'cost_six', 'cost_twelve', 'employee_id')
            ->with('employees');
    }
}
