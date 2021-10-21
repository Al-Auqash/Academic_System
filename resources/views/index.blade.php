<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <!-- <link href="https://fonts.googleapis.com/css?family=Righteous" rel="stylesheet" /> -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">

    <title>Academic System</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, Helvetica, sans-serif;
        }

        ::-webkit-scrollbar {
            width: 0.5em;
            /* background-color: transparent; */
        }

        ::-webkit-scrollbar-track {
            /* -webkit-box-shadow: inset 0 0 6px #e41376; */
            background: #10131c;
        }

        ::-webkit-scrollbar-thumb {
            background-color: #01cbee;
            border-radius: 10px;
            /* outline: 1px solid slategrey; */
        }
    </style>
</head>

<body>
    <div id="root"></div>
</body>

<script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
<!-- <script type="text/javascript" src="./../js/app.js"></script> -->

</html>