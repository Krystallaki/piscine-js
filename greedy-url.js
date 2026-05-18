const getURL = (str) => {
  const matches = str.match(/(?<!\w)(?<!=["'])https?:\/\/\S+/g) || []
  return matches.map(url => url.replace(/["']+$/, ''))
}

const countParams = (url) => {
  const q = url.indexOf('?')
  return q === -1 ? 0 : (url.slice(q + 1).match(/&/g) || []).length + 1
}

const greedyQuery = (str) => getURL(str).filter(url => countParams(url) >= 3)

const notSoGreedy = (str) => getURL(str).filter(url => {
  const n = countParams(url)
  return n >= 2 && n <= 3
})
