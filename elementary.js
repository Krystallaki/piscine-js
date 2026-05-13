const multiply = (a, b) => {
  const neg = (a < 0) !== (b < 0)
  let absA = a < 0 ? -a : a
  const absB = b < 0 ? -b : b
  let result = 0
  for (let i = 0; i < absB; i++) result += absA
  return neg ? -result : result
}

const divide = (a, b) => {
  const neg = (a < 0) !== (b < 0)
  let absA = a < 0 ? -a : a
  const absB = b < 0 ? -b : b
  let count = 0
  while (absA >= absB) {
    absA -= absB
    count++
  }
  return neg ? -count : count
}

const modulo = (a, b) => {
  let absA = a < 0 ? -a : a
  const absB = b < 0 ? -b : b
  while (absA >= absB) absA -= absB
  return a < 0 ? -absA : absA
}
