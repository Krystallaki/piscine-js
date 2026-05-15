const sums = (n) => {
  const result = []

  const partition = (remaining, min, current) => {
    if (remaining === 0) {
      if (current.length >= 2) result.push([...current])
      return
    }
    for (let i = min; i <= remaining; i++) {
      current.push(i)
      partition(remaining - i, i, current)
      current.pop()
    }
  }

  partition(n, 1, [])
  return result
}
