describe('async', () => {
  describe('myAsyncFunction', () => {
    it('should return 42', done => {
      // arrange
      const cb = function(value) {
        // assert
        expect(value).toBe(42);
        done();
      };

      // act
      myAsyncFunction(cb);
    });
  });

  describe('myAsyncFunction2', () => {
    it('should return 42', async () => {
      // arrange
      // act
      const value = await myAsyncFunction2();
      // assert
      expect(value).toBe(42);
    });
  });

  it('should work', done => {
    myAsyncFunction2().then(value => {
      expect(value).toBe(42);
      done();
    });
  });

  it('should work', () => {
    return myAsyncFunction2().then(value => expect(value).toBe(42));
  });
});
