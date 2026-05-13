const arrToSet = (arr) => new Set(arr)
const arrToStr = (arr) => arr.join('')
const setToArr = (set) => [...set]
const setToStr = (set) => [...set].join('')
const strToArr = (str) => [...str]
const strToSet = (str) => new Set(str)
const mapToObj = (map) => Object.fromEntries(map)
const objToArr = (obj) => Object.values(obj)
const objToMap = (obj) => new Map(Object.entries(obj))
const arrToObj = (arr) => ({ ...arr })
const strToObj = (str) => ({ ...str })

const superTypeOf = (v) => {
  if (v === null) return 'null'
  if (v === undefined) return 'undefined'
  return v.constructor.name
}
