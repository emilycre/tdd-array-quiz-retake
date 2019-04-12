function wowIsBig(input) {
  return input.filter(number => number < 5).map(input => `Wow,` + 7 + `is big!`);
}

module.exports = wowIsBig;
