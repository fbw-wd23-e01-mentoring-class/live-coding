// shallow cloning

const nums= [1,2,3,4]


const copy = [...nums]
const copy2 = nums.slice(0)


const nested = [ ["john"], ["Lina"], ["Rana"] ]

const shallowClone = [...nested]

shallowClone[0][0]= "Naqvi"

console.log(shallowClone)
 console.log(nested)

const user = { name:"Misbah", address: {city:"berlin"} }
const userCopy= {...user}//=>  { name:"Misbah", address: {city:"berlin"}  }

userCopy.name= "Lina"
userCopy.address.city="Frankfurt"
console.log(userCopy)
console.log(user)
