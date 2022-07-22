<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StudentAffairsController extends Controller
{
    function index(){
        return view('student-affairs.components.contents.content');
    }

    function scholarshipOffer(){
        return view('student-affairs.components.contents.scholarshipOffer');
    }

    function myScholarship(){
        return view('student-affairs.components.contents.myScholarShip');
    }

    function studentEntrepreneurshipData(){
        return view('student-affairs.components.contents.studentEntrepreneurshipData');
    }

    function studentInternshipData(){
        return view('student-affairs.components.contents.studentInternshipData');
    }
}
