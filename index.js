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

aveToIndex(beginningLocation, endingLocation) {
     let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let numAve = (eastWest.indexof(this.endingLocation.horizontal) - eastWest.indexof(this.beginningLocation.horizontal))
    debugger
    return numAve
}

blocksTravelled() {
  let numStreet =  this.endingLocation.vertical - this.beginningLocation.vertical

  return aveToIndex + numstreet
    }
}
