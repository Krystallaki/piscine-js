const isValid = (date) => {
  if (date === null || date === undefined || typeof date === 'string') return false
  const d = date instanceof Date ? date : new Date(date)
  return !isNaN(d.getTime())
}
const toTime = (d) => d instanceof Date ? d.getTime() : typeof d === 'number' ? d : NaN
const isAfter = (a, b) => toTime(a) > toTime(b)
const isBefore = (a, b) => toTime(a) < toTime(b)
const isFuture = (date) => isValid(date) && isAfter(date, new Date())
const isPast = (date) => isValid(date) && isBefore(date, new Date())
