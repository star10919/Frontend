// 함수 응용
function sum() {
  console.log(arguments)
  return arguments[0] + arguments[1] + arguments[2]
}

console.log(sum(7, 3, 8))


// 화살표 함수
// () => {}   vs   function () {}
const double = function (x, y) {
  return x * y
}
 console.log('double:', double(3, 8))

 
 const doubleArrow = (x, y) => x * y
 console.log('doubleArrow:', doubleArrow(3, 8))
