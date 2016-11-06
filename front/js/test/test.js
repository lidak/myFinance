'use strict';

describe('expencesController', function() {
    beforeEach(module('financeApp'));
    var $controller;

    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
    }));

    it('addExpence should increase existing products amount if exists', function() {
        var scope = {};
        var oldAmount = 2.22;
        var newAmount = 3.4;

        $controller('expencesController', { $scope: scope });
        scope.expencesByDays = {
            '2016-11-06': {
                food: [{
                    amount: oldAmount,
                    product: 'bread'
                }]
            }
        };

        var newExpence = {
            category: 'food',
            product: 'bread',
            date: '2016-11-06',
            amount: newAmount
        };

        var expenceAfterAddition = {
            '2016-11-06': {
                food: [{
                    amount: oldAmount + newAmount,
                    product: 'bread'
                }]
            }
        };

        scope.newExpence = newExpence;
        scope.addExpence();
        expect(scope.expencesByDays).toEqual(expenceAfterAddition);
    });
});