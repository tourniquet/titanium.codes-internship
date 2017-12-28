const currentDay = () => {
  const week = {
    1: 'mon',
    2: 'tue',
    3: 'wed',
    4: 'thi',
    5: 'fri',
    6: 'sat',
    7: 'sun'
  }

  const day = 5

  return week[day]
}
