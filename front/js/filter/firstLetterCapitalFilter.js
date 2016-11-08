'use strict';

angular.module('financeApp')
	.filter('firstLetterCapitalFilter', function() {
		return function (input) {
			var output;
			var inputArray = input.split(' ');
			var resultArray = [];

			inputArray.forEach(function (word) {
				var output;
				
				output = word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
				resultArray.push(output);
			});
			output = resultArray.join(' ');

			return output;
		};
	});