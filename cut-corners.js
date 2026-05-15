const trunc = (n) => {
  if (!isFinite(n)) return n
  const sign = n < 0 ? -1 : 1
  const absN = n < 0 ? -n : n
  let result = 0
  for (let step = 2 ** 53; step >= 1; step /= 2) {
    if (result + step <= absN) result += step
  }
  return sign * result
}

const floor = (n) => {
  const t = trunc(n)
  return n < t ? t - 1 : t
}

const ceil = (n) => {
  const t = trunc(n)
  return n > t ? t + 1 : t
}

const round = (n) => floor(n + 0.5)
