'use strict';

describe('expencesController', function() {
    beforeEach(module('financeApp'));
    var $controller;

    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
    }));

    describe('addExpence', function() {
        var scope = {};
        var oldAmount = 2.22;
        var newAmount = 3.4;

        beforeEach(function () {
            $controller('expencesController', { $scope: scope });
            
            scope.expencesByDays = {
                '06-11-2016': {
                    Food: [{
                        amount: oldAmount,
                        product: 'Bread'
                    }]
                }
            };
        });

        it('should increase existing products amount if exists', function() {

            var newExpence = {
                category: 'Food',
                product: 'Bread',
                date: '06-11-2016',
                amount: newAmount
            };

            var expenceAfterAddition = {
                '06-11-2016': {
                    Food: [{
                        amount: oldAmount + newAmount,
                        product: 'Bread'
                    }]
                }
            };

            scope.newExpence = newExpence;
            scope.addExpence();
            expect(scope.expencesByDays).toEqual(expenceAfterAddition);
        });

        it('addExpence should create new product and category if doesn\'t exist', function() {
            var newerExpence = {
                category: 'Health',
                product: 'Vitamins',
                date: '07-11-2016',
                amount: newAmount
            };
            var newestExpence = {
                category: 'Health',
                product: 'Gym',
                date: '07-11-2016',
                amount: 250
            };
            var expenceAfterAddition = {
                '06-11-2016': {
                    Food: [{
                        amount: oldAmount,
                        product: 'Bread'
                    }]
                },
                '07-11-2016': {
                    Health: [
                        {
                            amount: newAmount,
                            product: 'Vitamins'
                        },
                        {
                            amount: 250,
                            product: 'Gym'
                        }
                    ]
                }
            };

            scope.newExpence = newerExpence;
            scope.addExpence();

            scope.newExpence = newestExpence;
            scope.addExpence();

            expect(scope.expencesByDays).toEqual(expenceAfterAddition);
        });
    });

});