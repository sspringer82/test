describe('numberChecker', () => {
  it('should throw an error if a string is provided', () => {
    const fn = () => numberCheker('1');
    expect(fn).toThrow();
    expect(fn).toThrow(Error('Not a Number'));
    expect(fn).toThrowError('Not a Number');
  });

  it('should return the number if a number is provided', () => {
    const fn = () => numberCheker(NaN);
    expect(fn).not.toThrow();

    expect(fn()).toBeNaN();
  });

  it('should return the number if a number is provided', () => {
    const fn = () => numberCheker(1);
    expect(fn).not.toThrow();

    expect(fn()).toBe(1);
  });
});
