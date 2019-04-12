function wowIsBig(input) {
  const numbers = input.filter(number => number > 5);
  numbers.map(input => `Wow, ${num} is big!`);
}

module.exports = wowIsBig;
