<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    public function students(){
        return $this->belongsTo(Student::class, 'student_id', 'id')
            ->select('id', 'name', 'latin', 'gender', 'dob', 'photo');
    }
    public function invoice_detail(){
        return $this->hasMany(InvoiceDetail::class);
    }
}
