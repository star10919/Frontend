//원하는 정확한 타입을 출력하기 위해
// 타입 출력 함수 생성 (typeof 대신)
export default function getType(data) {
  return Object.prototype.toString.call(data).slice(8, -1)
}