const firstDayWeek = (weekNum, yearStr) => {
  const year = Number(yearStr)

  const jan1 = new Date(year, 0, 1)

  const dayOfWeek = jan1.getDay()
  const daysBack = (dayOfWeek + 6) % 7

  const week1Monday = new Date(jan1)
  week1Monday.setDate(jan1.getDate() - daysBack)

  const target = new Date(week1Monday)
  target.setDate(week1Monday.getDate() + (weekNum - 1) * 7)

  const effectiveTarget = target < jan1 ? jan1 : target
  const dd = String(effectiveTarget.getDate()).padStart(2, '0')
  const mm = String(effectiveTarget.getMonth() + 1).padStart(2, '0')
  const yyyy = effectiveTarget.getFullYear()

  return `${dd}-${mm}-${String(yyyy).padStart(4, '0')}`
}
