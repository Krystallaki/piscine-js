const split = (str, separator, limit) => {
  if (separator === undefined) return [str]
  if (limit === 0) return []

  const result = []
  const sepLen = separator.length

  if (sepLen === 0) {
    for (let i = 0; i < str.length; i++) {
      result.push(str[i])
      if (limit !== undefined && result.length === limit) return result
    }
    return result
  }

  let start = 0
  for (let i = 0; i <= str.length - sepLen; i++) {
    let match = true
    for (let j = 0; j < sepLen; j++) {
      if (str[i + j] !== separator[j]) { match = false; break }
    }
    if (match) {
      result.push(str.slice(start, i))
      if (limit !== undefined && result.length === limit) return result
      start = i + sepLen
      i += sepLen - 1
    }
  }
  result.push(str.slice(start))
  return result
}

const join = (arr, separator = ',') => {
  let result = ''
  for (let i = 0; i < arr.length; i++) {
    if (i > 0) result += separator
    result += arr[i] === null || arr[i] === undefined ? '' : arr[i]
  }
  return result
}
