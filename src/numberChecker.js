function numberCheker(a) {
  if (typeof a !== 'number') {
    throw new Error('Not a Number');
  }
  return a;
}
