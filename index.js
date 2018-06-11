class Driver {
  constructor(name) {
    this.name = name
  }
  startDate(date) {
    return date.getDate() + date.getMonth() + date.getFullYear()
  }
}
