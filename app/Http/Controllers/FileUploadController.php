<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class FileUploadController extends Controller
{
    public function upload(Request $request){
        $file = $request->file('file');
        $img = Image::make($file)->encode('jpg',100);
        $name = uniqid().'-'.time() . '.jpg';
        Storage::disk('public')->put($name, $img);
        return response()->json(['path'=>Storage::url($name)]);
    }
}
