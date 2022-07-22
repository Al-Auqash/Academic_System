<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/app2.css') }}" rel="stylesheet">
</head>

<body>
<div id="app">

    @include('navigation')

    <main class="p-4">
        <div class="container-fluid p-5 border rounded cs-background-grey">
            <div class="row rounded">
                <div class="col-9 p-0 m-0">
                    @include('layouts.components.biodata')
                </div>
                <div class="col-3 p-0 m-0">
                    @include('layouts.components.news')
                </div>
            </div>
            <hr class="box-divider"/>
            @yield('contents')
        </div>
    </main>
</div>
</body>

</html>
