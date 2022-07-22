<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ApplicationController extends Controller
{
    function index(){
        return view('application.index');
    }

    function graduationProcessAndGraduationCeremony(){
        return view('application.components.contents.graduationProcessAndGraduationCeremony');
    }

    function graduationData(){
        return view('application.components.contents.graduationData');
    }

    function upload(){
        return view('application.components.contents.upload');
    }

    function graduationDataValidation(){
        return view('application.components.contents.graduationDataValidation');
    }

    function graduandsInformation(){
        return view('application.components.contents.graduandsInformation');
    }

    function itCompetenceCertification(){
        return view('application.components.contents.itCompetenceCertification');
    }

    function itpToeflCertification(){
        return view('application.components.contents.itpToeflCertification');
    }

    function applyForLeaveOfAbsence(){
        return view('application.components.contents.applyForLeaveOfAbsence');
    }

    function applyForWithdrawal(){
        return view('application.components.contents.applyForWithdrawal');
    }

    function fastTrackProgramApplication(){
        return view('application.components.contents.fastTrackProgramApplication');

    }
}
