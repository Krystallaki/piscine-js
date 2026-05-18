const addWeek = (date) => {
  const days = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
    'secondMonday', 'secondTuesday', 'secondWednesday', 'secondThursday', 'secondFriday', 'secondSaturday', 'secondSunday',
  ]
  const epoch = new Date('0001-01-01')
  const diffDays = Math.round((date.getTime() - epoch.getTime()) / 86400000)
  return days[diffDays % 14]
}

const timeTravel = ({ date, hour, minute, second }) => {
  const result = new Date(date)
  result.setHours(hour, minute, second)
  return result
}
