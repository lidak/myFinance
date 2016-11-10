'use strict';

let db = require('./db')('testUserExpences');
const CONST = require('./constants');
const categoryName = 'food';
const productName = 'bread';
const creationDate = new Date();
const productPrice = 4.3;

describe('Backend db module', function () {
	it('setExpencesForUser method should save expence for user', function (done) {
		db.clearExpences()
		.then(() => { 
			return db.setExpenceForUser(1, categoryName, productName, creationDate, productPrice);
		})
		.then(function(response) {
			expect(response.result).toBe(CONST.response.status.ok);
			expect(response.data.category).toBe(categoryName);
			expect(response.data.product).toBe(productName);
			expect(response.data.date).toBe(creationDate);
			expect(response.data.price).toBe(productPrice);
			done();
		});
	});
});
	
