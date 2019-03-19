describe('myAsyncFunction', () => {
  fit('should return 42', done => {
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
