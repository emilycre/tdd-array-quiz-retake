function wowIsBig(input) {
  return input.filter(number => number > 5).map(input => `Wow, ${num} is big!`);
}

module.exports = wowIsBig;
