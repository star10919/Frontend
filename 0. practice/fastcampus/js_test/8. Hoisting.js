// 호이스팅(Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상
// 할당연산자로 변수에 할당하는 익명함수는 안됨!

const a = 7

double()


// 함수 선언부
function double() {
  console.log(a * 2)
}