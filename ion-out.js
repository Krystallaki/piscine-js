const ionOut = (str) => {
  const result = []
  const regex = /\b(\w*t)ion(\w*)\b/g
  let match
  while ((match = regex.exec(str)) !== null) {
    result.push(match[1] + match[2])
  }
  return result
}
