function wowIsBig(input) {
  const numbers = input.filter(number => number > 5);
  numbers.map(bigNumber => `Wow,` + bigNumber + `is big!`);
}

module.exports = wowIsBig;
