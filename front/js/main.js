'use strict';

var app = angular.module('financeApp', ['ngRoute', 'angularMoment']);
app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '../view/expences.html',
			controller: 'expencesController'
		});
	});