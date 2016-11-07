'use strict';

describe('expenceDateFilter', function () {
	var filter;
	var result = '04-09-1986';
	var filterInput;

	beforeEach(module('financeApp'));
	beforeEach(inject(function(_$filter_) {
		filter = _$filter_;
	}));
	it('should properly format input value date', function () {
		filterInput = '1986-04-09';
		expect(filter('expenceDateFilter')(filterInput)).toBe(result);
	});
});
