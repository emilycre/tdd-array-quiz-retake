const wowIsBig = require('../lib/index');

describe('wowIsBig', () => {
  it('removes numbers less than 5', () => {
    const expected = [1, 3, 2];
    const input = [1, 3, 5, 7, 2];
    const result = wowIsBig(input);

    expect(result).toEqual(expected)
  });

  it('output is "wow, 7 is big!"', () => {
    const expected = ['Wow, 7 is big!'];
    const input = [1, 3, 5, 7, 2];
    const result = wowIsBig(input);

    expect(result).toEqual(expected);
  });
});
