<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AcademicController extends Controller
{
    function index(){
        return view('academic.index');
    }

    function onlinePresence(){
        return view('academic.components.content.presence');
    }

    function courseSelectionSheet(){
        return view('academic.components.presence');
    }

    function courseGrade(){
        return view('academic.components.presence');
    }

    function courseSchedule(){
        return view('academic.components.presence');
    }

    function examSchedule(){
        return view('academic.components.presence');
    }

    function attedance(){
        return view('academic.components.presence');
    }

    function summaryCourseGrade(){
        return view('academic.components.presence');
    }
}
