class FizzBuzz {
  run(input) {
    if (typeof input !== 'number') {
      throw new Error();
    }

    if (input % 3 === 0 && input % 5 === 0) {
      return 'FizzBuzz';
    } else if (input % 3 === 0) {
      return 'Fizz';
    } else if (input % 5 === 0) {
      return 'Buzz';
    } else {
      return input;
    }
  }
}
