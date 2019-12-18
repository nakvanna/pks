<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Collection extends Model
{
    protected $fillable = ['group_section', 'section', 'level', 'class_name', 'shift', 'cost'];
    public function employees(){
        return $this->belongsTo(Employee::class, 'employee_id', 'id')->select('id', 'kh_name', 'en_name');
    }
}
