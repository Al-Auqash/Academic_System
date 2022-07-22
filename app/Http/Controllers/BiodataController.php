<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BiodataController extends Controller
{
    function index(){
        return view('biodata.components.contents.content');
    }

    function studentData(){
        return view('biodata.components.contents.studentData');
    }

    function previousEducation(){
        return view('biodata.components.contents.previousEducation');
    }

    function relativesData(){
        return view('biodata.components.contents.relativesData');
    }

    function financial(){
        return view('biodata.components.contents.financial');
    }

    function fileUpload(){
        return view('biodata.components.contents.fileUpload');
    }

    function printReceipts(){
        return view('biodata.components.contents.printReceipts');
    }
}
