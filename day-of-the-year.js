const dayOfTheYear = (date) => {
  const jan1 = new Date(0)
  jan1.setFullYear(date.getFullYear(), 0, 1)
  jan1.setHours(0, 0, 0, 0)
  return Math.round((date - jan1) / 86400000) + 1
}
