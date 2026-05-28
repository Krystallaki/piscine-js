const filter = (arr, fn) => {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) result.push(arr[i])
  }
  return result
}

const reject = (arr, fn) => {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    if (!fn(arr[i], i, arr)) result.push(arr[i])
  }
  return result
}

const partition = (arr, fn) => {
  const yes = []
  const no = []
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) yes.push(arr[i])
    else no.push(arr[i])
  }
  return [yes, no]
}
