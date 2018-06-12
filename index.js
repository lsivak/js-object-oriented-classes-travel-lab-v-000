class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }
yearsExperienceFromBeginningOf(year) {
  let endDate = new Date(year, 1)
  let years = Math.ceil((endDate - this.startDate)/31556952000)
  return years
}
}

class Route {
  constructor(beginningLocation, endingLocation) {
      this.beginningLocation = beginningLocation
      this.endingLocation = endingLocation
  }


blocksTravelled() {
  let numStreet =  this.endingLocation.horizontal - this.beginningLocation.horizontal
  debugger
  let startAvenue = eastWest.indexof(this.beginningLocation.vertical])
  debugger
  let endAvenue = eastWest.indexof(this.endingLocation.vertical)
  debugger
  return (endAvenue - startAvenue) + numstreet
    }
}
