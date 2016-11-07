'use strict';

angular.module('financeApp')
	.filter('expenceDateFilter', function (moment) {
		return function (input) {
			return moment(input).format('MM-DD-YYYY');
		};
	});