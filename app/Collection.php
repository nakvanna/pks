<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Collection extends Model
{
    protected $fillable = ['group_section', 'section', 'level', 'class_name', 'shift', 'cost'];
}
