class Driver {
  constructor(name, date) {
    this.name = name
    this.date
  }
  startDate(date) {
    return date.getDate() + date.getMonth() + date.getFullYear()
  }
}
