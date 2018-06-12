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
  let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
  let numStreet =  this.endingLocation.vertical - this.beginningLocation.vertical
  debugger
  let startAvenue = eastWest.indexof(this.beginningLocation.horizontal)
  debugger
  let endAvenue = eastWest.indexof(this.endingLocation.horizontal)
  debugger
  return (endAvenue - startAvenue) + numstreet
    }
}
