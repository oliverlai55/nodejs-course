const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33, 11);

  expect(res).toBe(44).toBeA('number');

  // if (res !== 44) {
  //   throw new Error(`Expected 44, but got ${res}`)
  // }
});
// BDD Beahvior drivein devlopemtn


it('should square 2 numbers', () => {
  var res2 = utils.square(3);

  expect(res).toBe(9).toBeA('number');
  // if (res2 !== 9) {
  //   throw new Error(`Expected 9, but got ${res2}`)
  // }
});

it('should expect some values', () => {
  // expect(12).toNotBe(11);
  expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
  expect([2,3,4]).toExclude(5);
  expect({
    name: 'Andrew',
    age: '25',
    location: 'New York'
  }).toInclude({
    age: '25'
  })
});
