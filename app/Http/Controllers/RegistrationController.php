<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RegistrationController extends Controller
{
    function index(){
        return view('registration.components.contents.content');
    }

    function registrationInfo(){
        return view('registration.components.contents.registrationInfo');
    }

    function academicStatusHistory(){
        return view('registration.components.contents.academicStatusHistory');
    }
}
