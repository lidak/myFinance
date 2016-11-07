'use strict';

angular.module('financeApp')
	.controller('expencesController', ['$scope', '$filter', function ($scope, $filter) {
		$scope.newExpence = {
			date: ''
		};

		$scope.expencesByDays = {
            '06-11-2016': {
                food: [{
                    amount: 2.22,
                    product: 'bread'
                }]
            }
        };

		$scope.addExpence = function () {
			var targetDate;
			var targetCategory;
			var targetProduct;
			var formattedExpenceDate = $filter('expenceDateFilter')($scope.newExpence.date);

			if (!$scope.expencesByDays[formattedExpenceDate]) {
				$scope.expencesByDays[formattedExpenceDate] = {};
			}

			targetDate = $scope.expencesByDays[formattedExpenceDate];

			if (!targetDate[$scope.newExpence.category]) {
				targetDate[$scope.newExpence.category] = [];
			}

			targetCategory = targetDate[$scope.newExpence.category];

			targetProduct = targetCategory.filter(function (product) {
				return product.product === $scope.newExpence.product;
			})[0];
			
			if (!targetProduct) {
				targetProduct = {
					amount: 0,
					product: $scope.newExpence.product
				};

				targetCategory.push(targetProduct); 
			}
			targetProduct.amount += $scope.newExpence.amount;
		};
	}]);