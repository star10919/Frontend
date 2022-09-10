// 산술 연산자 (arithmetic operator)
console.log(1 + 2)
console.log(5 - 7)
console.log(3 * 4)
console.log(10 / 2)
console.log(7 % 5)


//  할당 연산자 (assignment operator)
const a = 2 // const: 재할당 불가
let b = 2   // let: 재할당 가능
b += 1
console.log(b)


// 비교 연산자 comparison operator)
const c = 1
const d = 1
console.log( c === d)  // ===: 일치 연산자
console.log( c !== d)  // !==: 불일치 연산자


// 논리 연산자 (logical operator)
const e = 1 === 1
const f = 'ab' === 'ab'
const g = true
console.log('&&:', e && f && g)  // &&: and 연산자(모두 true여야 true임)
console.log('||:', e || f || g)  // ||: or 연산자(하나라도 true이면 true임)
console.log('!:', !e)            // !: 부정(not) 연산자


// 삼항 연산자 (ternary operator)
const h = 1 < 2  // true
console.log(h ? '참' : '거짓')