// 변수 유효범위(Variable Scope)
// var - 함수레벨: 개발자가 확인하지 못하는 메모리 누수 발생 가능
// let, const - 블록레벨: 관리하기 용이

function scope() {
  if (true) {
    var a = 123
  }
  console.log(a)

}
scope()