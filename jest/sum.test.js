const add = require('./sum');

describe('sum', () => {
  it('should add 1 and 1 and return 2', () => {
    const result = add(1, 1);
    expect(result).toEqual(2);
  });
});
