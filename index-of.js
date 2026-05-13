const indexOf = (arr, value, fromIndex = 0) => {
  const start = fromIndex < 0 ? Math.max(0, arr.length + fromIndex) : fromIndex
  for (let i = start; i < arr.length; i++) {
    if (arr[i] === value) return i
  }
  return -1
}

const lastIndexOf = (arr, value, fromIndex = arr.length - 1) => {
  const start = fromIndex < 0 ? arr.length + fromIndex : fromIndex
  for (let i = start; i >= 0; i--) {
    if (arr[i] === value) return i
  }
  return -1
}

const includes = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value || (Number.isNaN(arr[i]) && Number.isNaN(value))) return true
  }
  return false
}
