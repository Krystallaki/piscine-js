const findExpression = (n) => {
  if (n === 1) return '1'
  if (n < 1) return undefined

  if (n % 2 === 0) {
    const prev = findExpression(n / 2)
    if (prev !== undefined) return prev + ' ' + mul2
  }

  if (n > 4) {
    const prev = findExpression(n - 4)
    if (prev !== undefined) return prev + ' ' + add4
  }

  return undefined
}
