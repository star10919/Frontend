// ES6 Classes

// function User(first, last) {
  // this.firstName = first
  // this.lastName = last
// }
// User.prototype.getFullName = function () {
  // return `${this.firstName} ${this.lastName}` 
// }

class User {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}` 
  }
}

const heropy = new User('Heropy', 'Park')
const haein = new User('Haein', 'Lee')
const neo = new User('Neo', 'Smith')

console.log(heropy)
console.log(haein.getFullName())
console.log(neo.getFullName())