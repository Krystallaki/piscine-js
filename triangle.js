const triangle = (char, height) => {
  let result = ''
  for (let i = 1; i <= height; i++) {
    if (i > 1) result += '\n'
    result += char.repeat(i)
  }
  return result
}
