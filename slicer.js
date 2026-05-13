const slice = (src, start = 0, end) => {
  const len = src.length
  const s = start < 0 ? Math.max(0, len + start) : Math.min(start, len)
  const e = end === undefined ? len : end < 0 ? Math.max(0, len + end) : Math.min(end, len)

  if (typeof src === 'string') {
    let result = ''
    for (let i = s; i < e; i++) result += src[i]
    return result
  }

  const result = []
  for (let i = s; i < e; i++) result.push(src[i])
  return result
}
