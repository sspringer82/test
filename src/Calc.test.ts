import Calculator from './Calc';

describe('Calculator', () => {
  let calc = new Calculator();

  beforeEach(() => {
    calc = new Calculator();
  });

  describe('.add', () => {
    it('should add 1 and 1 and return 2', () => {
      const result = calc.add(1, 1);
      expect(result).toBe(2);
    });
    it('should not overflow', () => {
      expect(() => calc.add(Number.MAX_SAFE_INTEGER, 4)).toThrow();
    });
  });
});
