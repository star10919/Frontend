// 생성자 함수
function User(first, last) {
  this.firstName = first
  this.lastName = last
  }

User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

//   인스턴스
const heropy = new User('Heropy', 'Park')
const haein = new User('Haein', 'Lee')
const neo = new User('Neo', 'Smith')

console.log(heropy.getFullName())
console.log(haein.getFullName())
console.log(neo.getFullName())


