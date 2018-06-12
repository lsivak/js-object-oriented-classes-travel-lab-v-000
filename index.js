class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }
yearsExperienceFromBeginningOf(year) {
  let endDate = new Date(year)
  let years = (endDate - this.startDate)/31556952000
  return years
}
}
