class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }
yearsExperienceFromBeginningOf(year) {
  debugger
  let endDate = new Date(year)
  let years = endDate - this.startdate
  debugger
  return years
}
}
