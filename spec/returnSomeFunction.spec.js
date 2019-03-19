describe('RSF', () => {
  it('should return some function', () => {
    const fn = returnSomeFunction();
    expect(fn).toEqual(jasmine.any(Function));
    expect(typeof fn).toEqual('function');
  });
});
