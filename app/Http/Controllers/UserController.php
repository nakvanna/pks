<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    //index
    public function index(){
        return User::all();
    }
    //index
    public function json(){
        return $data = User::all()->chunk(100);
    }
}
