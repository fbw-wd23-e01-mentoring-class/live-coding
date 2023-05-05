// runtime environment
// there are 2 runtime envirnoment for javascript
// Browser   (chrome) V8 engine
// NodeJS             V8 engine

//NODE REPL (read evaluate print loop)

//Statements VS Expressions
/* console.log("Hello World") */ //statement // instructions


//Vairable
//Variable are like a container where we can store the data inside the memory.
// var, let, const keyword to dedine your variable

//define // declare //assign 
// create a variable  (var name)  declare variable
// =  assignment operator (= "Naqvi") assign
/* var name = "Naqvi" //define a variable
var name ="Syed" //redefining variable
console.log(name) */


//any value needs to be changed in the future then use let keyword
/* let age = 25;
let age = 23; //Error: cannot redeclare variable 
age = 26;
console.log(age) */

//constant data ,constant value
/* const age = 25;
// const age = 23; //Error: cannot redeclare variable 
age=26;  //Error: Assignment to constant variable.
console.log(age)  */ 


//Types of data in JS
//PRIMITIVE TYPES
    //string
    let str = 'This is string value'
    console.log(typeof str)
    //number  
    let number = 23
    console.log(typeof number)
    //boolean
    let status=false;
    console.log(typeof status) 
    //undefined
    let undefinedVairable;
    console.log(typeof undefinedVairable)
    //null
    let nullVariable = null; 
    console.log(nullVariable) 
    
//OBJECT TYPES
    //function
    //object
    //array


    //Statement
    // instructions to your system (interpretor)

    //Expression 
    //value or something turns into a value
    // 2+2  => 4 
    // 5>1  => true
    // 10 => 10



    
// Opertaors
// unary operators  (avaScript unary operators that take a single operand and performs an operation.)
// typeof
// ++
// --
// !

// binary operators (avaScript unary operators that take two oparends  and performs an operation.)
// + - * / % < > <= >= === == 


// Arithmetic Operators
// + - / % * ++ -- ** += -= *= /= **=
let a = 10;
let b = 2;
console.log(a+b) // 12

console.log(a-b) // 8 

console.log((a*b)) // 20

console.log(a/b) // 5

console.log(a%b) // 0

console.log(a++) //10  //post incremental operator 
console.log(a) // 11
console.log(++a) // 12   // pre incremental operator
console.log(a--) // 12  // post decrement operator
console.log(a) // 11
console.log(--a) //10  // pre decremental operator

console.log(a**b) //100 exponential

console.log(a+=23)    // 33
/* a = a+23 // 33
a+23 // 33 */
console.log(a-=20) // 13



 //Conditional Operators
// < > <= >= == === !== !=
// === strict comparison //check datatype as well
// == loose comparison  //it will not check for datatype
// always returns boolean value (true or false)
let age = 20;
console.log(age>10) //true
console.log(age<10) //false
console.log(age>=20) //true
console.log(age<=10) //false
console.log(age==="20") //false
console.log(age===20); //true
console.log(age=="20") //true

console.log(age!=="20") // true !(age==="20") strict comparison
console.log(age!="20") //false  !(age=="20") loose comparison

console.log(!true)  //false
console.log(!false) //true
//logical Operators
// && || !

//ternary operator ? // alternate to if else
/*  condition ? in case true : in case false ;  */
/* let age = 16;
//short circuit evaulation
age === 18 && console.log("You are 18 years old") 

age===18 || console.log("you are under age")  */



//rules to declare your variables in JS
//camelCase
/* let studentAge = 24
let studentName = "Joseph"
let studentIProfilemage="https://image.com" */
//PascalCase
/* let StudentAge = 24
let StudentName = "Joseph"
let StudentProfileImage */
//snake_case
/* let student_name = ""
let student_profile_image = "" */

/* Names can contain letters, digits, underscores, and dollar signs.
Names must begin with a letter.
Names can also begin with $ and _ (but we will not use it in this tutorial).
Names are case sensitive (y and Y are different variables). */

//invalid format // cannot use reserved keyword as a vairable name
/* let 4234234 = ""
let 4name = ""
let student-name=""
let @name=""
let nam@e=""
let name@=""
let class=""
let function="" */

//valid format
/* let $name= ""
let na$me=""
let name$=""
let _name=""
let na4me=""
let name4="" */

// + use it as concatanation (joining two, multiple string together)
// +convert value into number
const text1 = "I am"
const text2 = "Naqvi"
console.log(text1+" "+text2)

/* let c = "30" */
/* console.log(Number(c)) */
/* console.log(+c) */

//Coersion (type conversion)
console.log("I am " + 23 + " years old ")

console.log(Math.sqrt(16)) // 4
console.log(Math.pow(10,3)) //1000
console.log(Math.random()) // in between 0-1 0.2 ,0.05
console.log(Math.max(2,5,7,9,13)) // 13
console.log(Math.min(2,5,7,1,9,13)) // 1
console.log(Math.floor(4.9))  //4 rounding number down
console.log(Math.ceil(4.1)) //5 rouding number up
console.log(Math.round(2.5)) // 3

