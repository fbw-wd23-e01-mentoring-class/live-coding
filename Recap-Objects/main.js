// Array (collection/list of items)

/* const studentNames= ["Naqvi","Robert","Leon"]


const numbers = [2,4,6,8,0,2] */

//Object 
//object literal
// commas-separated list of key-value pairs inside the curly brackets
// set of unique key-value pairs
// values can be of any type
// keys are always string
// this points to that object where you define that function (normal function)
// this points to the context in which parent object is defined (arrow function)
// avoid using arrow functions within the object

let student= {
    name:"Nikolas", //properties//field
    age:31,
    city:"Berlin",
    hobbies:["music","reading"],
    maritalStatus:true,
    address:{
        street:20,
        house:30,
        country:"Germany",
        printName:function(){console.log(this.name)}
    },
    printStudentDetails:function(){
        console.log(`Student name is ${this.name}, he is ${this.age} years old`)
    }
}
student.address.printName()

/* console.log(typeof [1,2,3])
console.log(typeof {name:"ali"})
console.log(typeof (function(){})) */
// all functions are not methods
// but methods are the functions


/* student.printStudentDetails() */
// dot notation // square bracket notation
// sqaure bracket notation used in case of dynamic key values
/* console.log(student.name)
console.log(student.address.country)

console.log(student["name"],student["address"]["country"] ) */
 
//for in loop
for(const key in student){
/*     console.log(student[key]) */

  /*   if(key==="address"){
        for(const k in student[key]){
            console.log(student[key][k])
        }
    } */
}

/* function printName(){
    console.log("hello john")
}

printName() */

const item ={
    title:"iphone",
    price:2000,
    printProductData(){
        console.log(`product title is ${this.title}`)
    }
  /*   printProductData:function(){
        console.log(`product title is ${this.title}`)
    } */
}
/* item.printProductData() */
/* console.log()
Math.random()
"hello".charAt(0) */

/* console.log(this) */



/* const studentItem={
    name:"John",
    print:()=>console.log(name, "this pointing to the context where parent object defined(global object)")
} */


/* studentItem.print() */

/* console.log(globalThis) */


/* const student1= {name:"Smith",age:23, city:"berlin"}

const student2= {name:"linardo",age:32,city:"hamburg"} */

const students = [
    { name:"Smith",age:23, city:"berlin" } ,
    { name:"linardo",age:32,city:"hamburg" },
    { name :"robbin",age:21, city:"bonn" }
]

//print second student data
/* console.log(students[0].city, students[0].age  ) */

/* console.log(`I am ${students[0].name} ,I am ${students[0].age} years old, I live in ${students[0].city}`) */

//traditional for loop
/* for(let i = 0; i<students.length; i++){
   console.log(`I am ${students[i].name} ,I am ${students[i].age} years old, I live in ${students[i].city}`) 
} */

// for of loop (iterate through array)
// iterable object
// object having [Symbol.iterator] it is iterable
console.log(students[Symbol.iterator])
/* students[Symbol.iterator]=null */

 for(const student of students){
    console.log(`I am ${student.name} ,I am ${student.age} years old, I live in ${student.city}`) 
} 

/* const sentence= "hello world"
console.log(sentence[Symbol.iterator])
for(const character of sentence){
    console.log(character)
} */



//task 1

const people = [];
const firstNames = ["Mark", "Sandra", "Dina"];
const lastNames = ["Emin", "Mellow", "Red"];
const ages = [18, 27, 31];
const cities = ["New York", "Berlin", "Barcelona"];

/* {
    firstName: "Mark",
    lastName: "Emin",
    age: 18,
    city: "New York",
    fullName: "Mark Emin",
    introduce: function() {...},
  },
 */

  for(let i = 0; i<firstNames.length; i++){
    let user = {
        firstName: firstNames[i],
        lastName: lastNames[i],
        age: ages[i],
        city: cities[i],
        fullName: firstNames[i]+ " "+ lastNames[i],
        introduce: function() {
            console.log(` I am ${this.fullName}, I am living in ${this.age}`)
        },
      }

      people.push(user)
  } 

  

/*   console.log(people) */

  //task 2
  const person = {
    firstName: "Tim",
    age: 28,
    greet(message){
        console.log(`${message.charAt(0).toUpperCase()}${message.slice(1)} ,My name is ${this.firstName}`)

    }
  }

  person.greet("hello")
  person.greet("hi")



  // Task 3
/* You are working on a fighting videogame.
Create a series of objects with these properties:
name: a string with the name of the character
health: a number representing the remaining health of a character
attackSkill: a string representing the kind of skill the character uses to attack
attackDamage: a number representing how much damage does the attack skill
Create a function called attack and add this function as a method to each character you created.
The function attack should take another character object in input.
The function should then:
decrease the health of the attacked character according to the attackDamage of the attacking character
print a message to the console, saying, for example: "Ryu attacked Ken, inflicting 16 damage. Ken's health is now 8".
The message should change depending on who's attacking and who's being attacked.
For example, if we have 2 characters called ryu and ken: */

function attack(character){
    character.health = character.health - this.attackDamage
    if(character.health<0){
        console.log(`${character.name} is dead`)
    }else{
          console.log(`${this.name} attacked ${character.name}, inflicting ${this.attackDamage} damage. ${character.name}'s health is now ${character.health}".`)
    }
}

const picacho= {
    name:"Picacho",
    health:100,
    attackSkill:"lighting",
    attackDamage:20,
    attackOpponent: attack
}

const ken = {
    name:"ken",
    health:70,
    attackSkill:"firing",
    attackDamage:12,
    attackOpponent: attack
}

picacho.attackOpponent(ken)

/* attach.call(picacho,ken) 
attach.call(picacho,ken) 
attach.call(picacho,ken) 
attach.call(ken,picacho)  */

/* ken.attach(picacho) */