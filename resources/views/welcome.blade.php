<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">

        <!-- ANGULAR -->
	<!-- all angular resources will be loaded from the /public folder -->
		<script src="js/controllers/mainCtrl.js"></script> <!-- load our controller -->
		<script src="js/services/commentService.js"></script> <!-- load our service -->
		<script src="js/app.js"></script> <!-- load our application -->


    </head>

    <!-- declare our angular app and controller -->
<body class="container" ng-app="commentApp" ng-controller="mainController">
    @extends('angular')
    <app-root></app-root>
    <h2>Hello</h2>
    {{-- <div class="col-md-8 col-md-offset-2"> --}}
     {{-- <body class="antialiased"> --}}
        {{-- <app-root></app-root>
        <img src="{{ asset('images/background.jpg') }}" alt="crochet" style="max-width: 3500px; max-height:900px"> --}}
    </body>
</html>
