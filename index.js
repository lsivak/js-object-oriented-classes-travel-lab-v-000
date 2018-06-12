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
let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
blocksTravelled() = {
  let numStreet =  this.endingLocation[0] - this.beginningLocation[0]
  let numAvenue = function (eastwest) {
    eastWest.forEach(function (crossStreet) {
      if(eastWest.crossStreet === this.endingLocation[1])
      return eastWest.index
      if(eastWest.crossStreet === this.beginningLocation[1])
      return eastWest.index
    }
    
  }
  }
}
