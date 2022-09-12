// 전개 연산자 (Spread) - ... 기호 사용

const fruits = ['Apple', 'Banana', 'Cherry', 'Orange']
console.log(fruits)
console.log(...fruits)


// ...변수명: rest parameter(나머지 파라미터)
function toObject(a, b, ...c) {
  return {
    a: a,
    b: b,
    c: c
  }
}
// console.log(toObject(fruits[0], fruits[1], fruits[2]))
console.log(toObject(...fruits))


// toObject 축약형
const toObject_ = (a, b, ...c) => ({a, b, c})
console.log(toObject_(...fruits))