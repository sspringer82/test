describe('callback', () => {
  it('should be called with 42', () => {
    const cb = value => {
      expect(value).toBe(42);
    };
    doIt(cb);
  });

  it('should work with spies', () => {
    const spy = jasmine.createSpy();
    doIt(spy);
    expect(spy).toHaveBeenCalledWith(42);
  });

  it('should do something', () => {
    const obj = {
      func() {
        return 42;
      },
    };

    const mySpy = spyOn(obj, 'func').and.callThrough();
    //const mySpy = spyOn(obj, 'func').and.returnValue(41);
    //const mySpy = spyOn(obj, 'func').and.callFake(() => 44);

    const result = obj.func();

    expect(mySpy).toHaveBeenCalledTimes(1);
    expect(result).toBe(42);
  });
});
