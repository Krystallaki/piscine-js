const adder = (arr, init = 0) => arr.reduce((acc, n) => acc + n, init)

const sumOrMul = (arr, init) =>
  init !== undefined
    ? arr.reduce((acc, n) => n % 2 === 0 ? acc * n : acc + n, init)
    : arr.reduce((acc, n) => n % 2 === 0 ? acc * n : acc + n)

const funcExec = (arr, init) => arr.reduce((acc, fn) => fn(acc), init)
