'use strict';

let db = require('./db')('testUserExpences');

describe('Backend db module', function () {
	it('setExpencesForUser method should save expence for user', function (done) {
		db.clearExpences()
		.then(() => { 
			return db.setExpenceForUser(1, 'food', 'bread', new Date(), 4.3)
		})
		.then(function(response) {
			expect(response.result).toBe('SUCCESS');
			done();
		});
	});
});
	
