@extends('layouts.app2')

@section('content')
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
{{--                @if( \Request::is('') )--}}
{{--                    @include('academic.components.content')--}}
{{--                @elseif(Request::is('presensi-online'))--}}
{{--                    @include('academic.components.content.presence')--}}
{{--                @else--}}
{{--                    <p>ahahahah</p>--}}
{{--                @endif--}}

                @yield('subcontent')

            </div>
        </div>
    </div>
@endsection
