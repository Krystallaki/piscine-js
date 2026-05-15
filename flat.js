const flat = (arr, depth = 1) => {
  const result = []
  for (const item of arr) {
    if (Array.isArray(item) && depth > 0) {
      for (const el of flat(item, depth - 1)) result.push(el)
    } else {
      result.push(item)
    }
  }
  return result
}
