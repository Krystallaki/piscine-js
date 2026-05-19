const sunnySunday = (date) => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const epoch = new Date(0)
  epoch.setFullYear(1, 0, 1)
  epoch.setHours(0, 0, 0, 0)
  const diffDays = Math.round((date - epoch) / 86400000)
  return days[diffDays % 6]
}
