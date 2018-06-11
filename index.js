class Driver {
  constructor(name) {
    this.name = name
  }
  startDate() {
    return getDate() + getMonth() + getFullYear()
  }
}
