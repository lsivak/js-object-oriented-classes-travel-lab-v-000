class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }
yearsExperienceFromBeginningOf(year) {
  let endDate = new Date(year, 1)
  let years = Math.floor((endDate - this.startDate)/31556952000)
  return years
}
}
