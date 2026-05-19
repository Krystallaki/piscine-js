const firstDayWeek = (weekNum, yearStr) => {
  const year = Number(yearStr)

  const jan1 = new Date(year, 0, 1)

  const dayOfWeek = jan1.getDay()
  const daysBack = (dayOfWeek + 6) % 7

  const week1Monday = new Date(jan1)
  week1Monday.setDate(jan1.getDate() - daysBack)

  const weekStart = week1Monday.getFullYear() < year ? jan1 : week1Monday

  const target = new Date(weekStart)
  target.setDate(weekStart.getDate() + (weekNum - 1) * 7)

  const dd = String(target.getDate()).padStart(2, '0')
  const mm = String(target.getMonth() + 1).padStart(2, '0')
  const yyyy = target.getFullYear()

  return `${dd}-${mm}-${yyyy}`
}
