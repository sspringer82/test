function myAsyncFunction(cb) {
  setTimeout(() => {
    const value = 42;
    cb(value);
  }, 1000);
}

function myAsyncFunction2() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const value = 42;
      res(value);
    }, 1000);
  });
}
