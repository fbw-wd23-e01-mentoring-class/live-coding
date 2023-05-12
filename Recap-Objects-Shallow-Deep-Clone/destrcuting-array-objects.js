//destructure

const numbers = [1,2,3,4]

console.log(numbers[0])
console.log(numbers[1])
const random = ["John",23, false, "berlin"]

/* const [] = Array 
const {} = Object */

const [studentName, age , isStudent, city] =  random //["John",23, true, "berlin"]

/* console.log(city)
console.log(studentName) */
console.log(`his name is ${studentName}, he is ${age} years old, he is ${isStudent ? "student": "teacher"}`)

// rest operator (when use ... with variable it is called rest)
const numbersArray = [1,2,3,4,5,6,7,8,9,10]
const [a, b , ...c] = numbersArray
console.log(a)


/* function sum(...nums){ // rest
    const sum = nums.reduce((acc,item)=>acc+=item, 0 )
    return sum
}
console.log(sum(2,3,4,5,6)) */
/* const nums = [1,2,4,5]
console.log(...nums)//spread */


const user = {
   name:"Lean",
    age:23,
    city:"berlin",
    address:{
        street:"al-rudow",
        postalcode:32456
    }
}

/* const {name, age:userAge, city:userCity, address} = user //rename properties in destructing
const {postalcode, street} = address */

const {name, age:userAge, city:userCity, address: {postalcode,street}} = user


console.log(`${name} student lives in ${street} having postalCode : ${postalcode}`)
