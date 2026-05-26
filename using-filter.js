const filterShortStateName = (arr) => arr.filter(s => s.length < 7)

const filterStartVowel = (arr) => arr.filter(s => /^[aeiou]/i.test(s))

const filter5Vowels = (arr) => arr.filter(s => (s.match(/[aeiou]/gi) || []).length >= 5)

const filter1DistinctVowel = (arr) =>
  arr.filter(s => new Set((s.match(/[aeiou]/gi) || []).map(c => c.toLowerCase())).size === 1)

const multiFilter = (arr) => arr.filter(({ capital, name, tag, region }) =>
  capital.length >= 8 &&
  !/^[aeiou]/i.test(name) &&
  /[aeiou]/i.test(tag) &&
  region !== 'South'
)
