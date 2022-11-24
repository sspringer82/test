export default class Calculator {
  add(a: number, b: number): number {
    if (a + b > Number.MAX_SAFE_INTEGER) {
      throw new Error();
    }
    return a + b;
  }
}
