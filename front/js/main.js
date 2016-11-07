'use strict';

var app = angular.module('financeApp', ['ngRoute']);
app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '../view/expences.html',
			controller: 'expencesController'
		});
	});