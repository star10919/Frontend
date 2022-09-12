// 구조 분해 할당 (Destructuring assignment)
// = 비구조화 할당


// 객체 데이터 - 구조분해할당
const user = {
  name: 'Heropy',
  age: 85,
  email: 'thesecon@gmail.com'
}
const {name: heropy, age, email} = user
// =  user.name  or  user[name]

console.log(`사용자의 이름은 ${heropy}입니다.`)
console.log(`사용자의 나이는 ${age}입니다.`)
console.log(`사용자의 이메일은 ${email}입니다.`)




// 배열 데이터 - 구조분해할당(순서 중요)
const fruits = ['Apple', 'Banana', 'Cherry']
// const [a, b, c, d] = fruits
const [, , c] = fruits
console.log(c)