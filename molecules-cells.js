const RNA = (dna) => {
  const map = { G: 'C', C: 'G', T: 'A', A: 'U' }
  let result = ''
  for (const c of dna.toUpperCase()) result += map[c]
  return result
}

const DNA = (rna) => {
  const map = { C: 'G', G: 'C', A: 'T', U: 'A' }
  let result = ''
  for (const c of rna.toUpperCase()) result += map[c]
  return result
}
