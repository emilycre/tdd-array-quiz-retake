const wowIsbig = require('../lib/index');

describe('wowIsBig', () => {
  it('removes numbers less than 5', () => {
    const expected = [];
    const input = [];
    const result = wowIsBig(input);

    expect(result).toEqual(expected)
  });
});
