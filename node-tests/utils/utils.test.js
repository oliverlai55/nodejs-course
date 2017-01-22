const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33, 11);

  if (res !== 44) {
    throw new Error(`Expected 44, but got ${res}`)
  }
});
// BDD Beahvior drivein devlopemtn


it('should square 2 numbers', () => {
  var res2 = utils.square(2);

  if (res2 !== 9) {
    throw new Error(`Expected 9, but got ${res2}`)
  }
});
