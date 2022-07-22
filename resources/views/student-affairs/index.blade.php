@extends('layouts.app2')

@section('contents')
    <div class="row mt-5">
        <div class="col-3 p-0 m-0">
            @include('student-affairs.components.sidebar')
        </div>
        <div class="col-9 p-0 m-0">
            <div
                class="d-flex flex-column justify-content-center align-items-center p-2 w-100 rounded cs-background-blue cs-min-height-card"
            >
                @yield('subcontent')
            </div>
        </div>
    </div>
@endsection
