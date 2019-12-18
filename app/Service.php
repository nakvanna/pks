<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    protected $fillable = ['type', 'service', 'cost'];
    public function employees(){
        return $this->belongsTo(Employee::class, 'employee_id', 'id')->select('id', 'kh_name', 'en_name');
    }

}
