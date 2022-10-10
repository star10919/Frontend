import random from './getRandom.js'

const a = random()


// If 조건문 (If statement)
if (a === 0) {
  console.log('a is 0')
} else if (a === 3) {
  console.log('a is 3')
} else if (a === 8) {
  console.log('a is 8')
} else {
  console.log('rest...')
}


// Switch 조건문 (Switch statement)
switch (a) {
  case 0:
    console.log('a is 0')
    break  // case별로 break 꼭 써줘야 함
  case 2:
    console.log('a is 2')
    break
  case 4:
    console.log('a is 4')
    break
  default:
    console.log('rest...')

}