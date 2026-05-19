const matchCron = (cron, date) => {
  const [minute, hour, dayOfMonth, month, dayOfWeek] = cron.split(' ')
  const matches = (field, value) => field === '*' || Number(field) === value
  const cronDay = date.getDay() === 0 ? 7 : date.getDay()

  return (
    matches(minute, date.getMinutes()) &&
    matches(hour, date.getHours()) &&
    matches(dayOfMonth, date.getDate()) &&
    matches(month, date.getMonth() + 1) &&
    matches(dayOfWeek, cronDay)
  )
}
