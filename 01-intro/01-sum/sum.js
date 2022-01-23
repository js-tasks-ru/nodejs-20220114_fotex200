function sum(a, b) {
  for (const arg of arguments) {
    if (typeof arg !== 'number') throw new TypeError('Not a number');
  }

  return a + b;
}

module.exports = sum;
