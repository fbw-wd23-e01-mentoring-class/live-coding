// "text"
// 'text' 
// `text`

//String Interpolation
//
//when you define any variable ,javascript will attach a prototype object with it depending on the datatype
let a = "hello world"
let b = 2357;
let c = true



console.log(a.charAt(0)) // h
console.log(a.toUpperCase()) // HELLO WORLD
console.log(a.length) //11
//index notation
console.log(a[2]) //l
console.log(a.indexOf("o"))//4
console.log(a.match(/(he)/i)) //[ 'lo', index: 3, input: 'hello world', groups: undefined ]

console.log(b.toString().length) // 4



let surname="syed"
let name = "robert"
let age = 34
/* console.log("my name is "+name) */
console.log(`my name is ${surname+" "+name} and my is ${age+2}`)
console.log(`my name is ${surname} ${name} and my is ${age+2}`)
console.log("this is long sentence \n I am Naqvi \n I live in berlin")
console.log(`this is long sentence
I am Naqvi
I live in berlin`)

a.endsWith("world") //true
a.startsWith("hello") //true

a.includes("o")
a.repeat(5) // hello worldhello worldhello world hello worldhello world

let star = "*"
console.log(star.repeat(90))


console.log(star.repeat(20),"End Code", star.repeat(20))

let text = "abc"
console.log(text.concat("def","123"))
