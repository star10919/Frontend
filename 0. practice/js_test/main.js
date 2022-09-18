import myData from './myData.json'

const user = {
  name: 'heropy',
  age: 85,
  emails: [
    'thesecon@gmail.com',
    'neo@zillinks.com'
  ]
}

// const strUser = localStorage.setItem('user', JSON.stringify(user))
const str = localStorage.getItem('user')
const obj = JSON.parse(str)
obj.age = 22
console.log(obj)
localStorage.setItem('user', JSON.stringify(obj))




// const strUser = JSON.stringify(user)
// console.log(typeof(strUser))
// localStorage.setItem('user', strUser)
// console.log(localStorage.getItem('user'))

// const parseUser = JSON.parse(strUser)
// console.log(parseUser)

// localStorage.removeItem('user')