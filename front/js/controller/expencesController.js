'use strict';

angular.module('financeApp')
	.controller('expencesController', ['$scope', '$filter', function ($scope, $filter) {
		$scope.newExpence = {
			date: new Date()
		};

		$scope.expencesByDays = {
            '06-11-2016': {
                Food: [{
                    amount: 2.22,
                    product: 'Bread'
                }]
            }
        };

		$scope.addExpence = function () {
			var targetDate;
			var targetCategory;
			var targetProduct;
			var formattedExpenceDate = $filter('expenceDateFilter')($scope.newExpence.date);
			var formattedProduct = $filter('firstLetterCapitalFilter')($scope.newExpence.product);
			var formattedCategory = $filter('firstLetterCapitalFilter')($scope.newExpence.category);

			if (!$scope.expencesByDays[formattedExpenceDate]) {
				$scope.expencesByDays[formattedExpenceDate] = {};
			}

			targetDate = $scope.expencesByDays[formattedExpenceDate];

			if (!targetDate[formattedCategory]) {
				targetDate[formattedCategory] = [];
			}

			targetCategory = targetDate[formattedCategory];

			targetProduct = targetCategory.filter(function (product) {
				return product.product === formattedProduct;
			})[0];
			
			if (!targetProduct) {
				targetProduct = {
					amount: 0,
					product: formattedProduct
				};

				targetCategory.push(targetProduct); 
			}
			targetProduct.amount += $scope.newExpence.amount;
		};
	}]);