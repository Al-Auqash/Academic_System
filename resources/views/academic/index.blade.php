@extends('layouts.app2')

@section('contents')
    <div class="container-fluid p-5 border rounded cs-background-grey">
        <div class="row rounded">
            <div class="col-9 p-0 m-0">
                @include('academic.components.biodata')
            </div>
            <div class="col-3 p-0 m-0">
                @include('academic.components.news')
            </div>
        </div>
        <hr class="box-divider"/>
        <div class="row mt-5">
            <div class="col-3 p-0 m-0">
                @include('academic.components.sidebar')
            </div>
            <div class="col-9 p-0 m-0">
                <div
                    class="d-flex flex-column justify-content-center align-items-center p-2 w-100 rounded cs-background-blue"
                >

                    @yield('subcontent')
                </div>
            </div>
        </div>
    </div>
@endsection
