'use strict';

angular.module('financeApp')
	.controller('expencesController', ['$scope', function ($scope) {
		$scope.newExpence = {};

		$scope.expencesByDays = {
            '2016-11-06': {
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

			if (!$scope.expencesByDays[$scope.newExpence.date]) {
				$scope.expencesByDays[$scope.newExpence.date] = {};
			}

			targetDate = $scope.expencesByDays[$scope.newExpence.date];

			if (!targetDate[$scope.newExpence.category]) {
				targetDate[$scope.newExpence.category] = [];
			}

			targetCategory = targetDate[$scope.newExpence.category];
			targetProduct = targetCategory.filter(function (product) {
				return product.product === $scope.newExpence.product;
			})[0];
			
			if (!targetProduct) {
				targetProduct = {amount: 0, product: $scope.newExpence.product};
				targetCategory.push(targetProduct); 
			}
			targetProduct.amount += $scope.newExpence.amount;
		};
	}]);