// 콜백 (callback)
// 함수의 인수로 사용되는 또 다른 함수

// setTimeout(함수, 시간)
            // ㄴ콜백 함수


function timeout(cb) {
  setTimeout(() => {
    console.log('bananapudding!')
    cb()
  }, 3000)
}

timeout(() => {
  console.log('Done!')
})
