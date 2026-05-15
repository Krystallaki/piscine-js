const reverse = (src) => {
  if (typeof src === 'string') {
    let result = ''
    for (let i = src.length - 1; i >= 0; i--) result += src[i]
    return result
  }
  for (let i = 0; i < src.length / 2; i++) {
    const j = src.length - 1 - i
    const temp = src[i]
    src[i] = src[j]
    src[j] = temp
  }
  return src
}
