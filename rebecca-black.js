const isFriday = (date) => date.getDay() === 5
const isWeekend = (date) => date.getDay() === 0 || date.getDay() === 6

const isLeapYear = (date) => {
  const year = date.getFullYear()
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
}

const isLastDayOfMonth = (date) => {
  const next = new Date(date)
  next.setDate(date.getDate() + 1)
  return next.getDate() === 1
}
