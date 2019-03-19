describe('Calculator', () => {
  let calc;
  beforeEach(() => {
    // Arrange
    calc = new Calc();
  });
  // beforeAll()
  // afterEach()
  // afterAll()

  it('should add 1 and 1 and return 2', () => {
    // Tripple A

    // Act
    const result = calc.add(1, 1);
    // Assert
    expect(result).toBe(2);
  });

  it('should add 2 and 2 and return 4', () => {
    // Tripple A
    // Act
    const result = calc.add(2, 2);
    // Assert
    expect(result).toBe(4);
  });
});
