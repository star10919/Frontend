// 타이머 함수
// 1. setTimeout(함수, 시간): 일정 시간 후 함수 실행
// 2. setInterval(함수, 시간): 시간 간격마다 함수 실행
// 3. clearTimeout(): 설정된 Timeout 함수를 종료
// 4. clearInterval(): 설정된 Interval 함수를 종료

// const timer = setTimeout (() => {
//   console.log('bananapudding!')
// }, 3000)

// const h1El = document.querySelector('h1')
// h1El.addEventListener('click', () => {
//   clearTimeout(timer)
// })


const intervalTimer = setInterval (() => {
  console.log('bananapudding!')
}, 3000)

const h1El_ = document.querySelector('h1')
h1El_.addEventListener('click', () => {
  clearInterval(intervalTimer)
})