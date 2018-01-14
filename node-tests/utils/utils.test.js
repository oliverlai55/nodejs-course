const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
	var res = utils.add(33, 11);

	expect(res)
		.toBe(44)
		.toBeA('number');

	if (res !== 44) {
		throw new Error(`Expected 44, but got ${res}`);
	}
});

it('should async add two numbers', done => {
	utils.asyncAdd(4, 3, sum => {
		expect(sum)
			.toBe(7)
			.toBeA('number');
		done();
	});
});

// BDD Beahvior drivein devlopemtn

it('should square 2 numbers', () => {
	var res2 = utils.square(3);

	expect(res2)
		.toBe(9)
		.toBeA('number');

	if (res2 !== 9) {
		throw new Error(`Expected 9, but got ${res2}`);
	}
});

it('should async square 2 numbers', done => {
	utils.asyncSquare(2, sum => {
		expect(sum)
			.toBe(4)
			.toBeA('number');
		done();
	});
});

// should verify first and last names are set
// assert it includes firstNAME AND LASTNAME with proper values
it('should set firstName and lastName', () => {
	var user = { location: 'Philadelphia', age: 25 };
	var res = utils.setName(user, 'Oliver Lai');

	expect(user).toEqual(res);
	expect(res).toInclude({
		firstName: 'Oliver',
		lastName: 'Lai',
	});
});

// it('should expect some values', () => {
// expect(12).toNotBe(11);
// 	expect({ name: 'Andrew' }).toEqual({ name: 'Andrew' });
// 	expect([2, 3, 4]).toExclude(5);
// 	expect({
// 		name: 'Andrew',
// 		age: '25',
// 		location: 'New York',
// 	}).toInclude({
// 		age: '25',
// 	});
// });
