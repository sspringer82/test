describe('async', () => {
  describe('myAsyncFunction', () => {
    it('should return 42', done => {
      jasmine.clock().install();
      // arrange
      const cb = function(value) {
        // assert
        expect(value).toBe(42);
        jasmine.clock().uninstall();
        done();
      };

      // act
      myAsyncFunction(cb);
      jasmine.clock().tick(1000);
    });
  });

  describe('myAsyncFunction2', () => {
    beforeEach(() => {
      jasmine.clock().install();
    });
    afterEach(() => {
      jasmine.clock().uninstall();
    });
    it('should return 42', async () => {
      // arrange
      // act
      const p = myAsyncFunction2();
      jasmine.clock().tick(1000);
      const value = await p;
      // asserts
      expect(value).toBe(42);
    });

    it('should work', done => {
      const p = myAsyncFunction2();
      jasmine.clock().tick(1000);
      p.then(value => {
        expect(value).toBe(42);
        done();
      });
    });

    it('should work', () => {
      const p = myAsyncFunction2();
      jasmine.clock().tick(1000);
      p.then(value => expect(value).toBe(42));
      return p;
    });
  });

  describe('date stuff', () => {
    it('should work', () => {
      jasmine.clock().install();
      const baseTime = new Date(1971, 9, 23);

      jasmine.clock().mockDate(baseTime);

      jasmine.clock().tick(50);
      expect(new Date().getTime()).toEqual(baseTime.getTime() + 50);
      jasmine.clock().uninstall();
    });
  });
});
