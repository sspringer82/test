describe('Calculator', function () {
  describe('.add', () => {
    it('should add 1 and 1 and return 2', () => {
      const calc = new Calc();
      const result = calc.add(1, 1);
      expect(result).toBe(2);
    });
  });
});
