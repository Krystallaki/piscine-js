const pyramid = (char, height) => {
  let result = ''
  for (let i = 1; i <= height; i++) {
    if (i > 1) result += '\n'
    result += ' '.repeat((height - i) * char.length) + char.repeat(2 * i - 1)
  }
  return result
}
