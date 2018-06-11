class Driver {
  constructor(name, date) {
    this.name = name
    this.date = date
  }
  startDate(date) {
    return date.dateFormat("mm dd, yyyy")
  }
}
