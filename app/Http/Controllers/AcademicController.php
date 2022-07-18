<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AcademicController extends Controller
{
    function index(){
        return view('academic.index');
    }

    function onlinePresence(){
        return view('academic.components.contents.onlinePresence');
    }

    function courseSelectionSheet(){
        return view('academic.components.contents.courseSelectionSheet');
    }

    function courseGrade(){
        return view('academic.components.contents.courseGrade');
    }

    function courseSchedule(){
        return view('academic.components.contents.courseSchedule');
    }

    function examSchedule(){
        return view('academic.components.contents.examSchedule');
    }

    function attendance(){
        return view('academic.components.contents.attendance');
    }

    function summaryCourseGrade(){
        return view('academic.components.contents.summaryCourseGrade');
    }
}
