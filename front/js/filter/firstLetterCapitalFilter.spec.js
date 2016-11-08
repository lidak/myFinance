'use strict';

describe('fitstLetterCapitalFilter', function () {
	var filter;

	beforeEach(module('financeApp'));
	beforeEach(inject(function(_$filter_) {
		filter = _$filter_;
	}));

	it('should properly fotmat uppercase strings', function () {
		var input = 'TEST CATEGORY';
		var output = 'Test Category';

		expect(filter('firstLetterCapitalFilter')(input)).toBe(output);
	});
});