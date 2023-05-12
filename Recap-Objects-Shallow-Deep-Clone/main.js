//primitive type values
// string , number , boolean, null, undefined
/* const _ = require("./lodash.js") // using local downloaded lodash.js file */

//to use lodash package 
// 1. initialize your node project only once using ( npm init -y) in terminal
// 2. install lodash using (npm install lodash) in terminal

/* const _ = require("lodash") */ //CommonJS module Syntax // using lodash package from npm (in this case we can delete lodash.js file)
import _ from "lodash"  // (ES module Syntax)
// in order to use ESM you nedd to add type : module in package json

const a = 5;
const b = 5;

//compare 2 primitive types
console.log(a===b) // true

const userName = "John";
const studentName = "John";

console.log(userName===studentName) //true

//copy
const copyUserName = userName; // 1005 => copyUserName => "John"

console.log(copyUserName===userName) // "John" === "John"

//Object types
const numbers = [1,2,3]
const othernumbers=[1,2,3]

const copyNumbers = numbers; // copying reference
console.log(copyNumbers === numbers) //true //pointing to same object
numbers.push(4)
/* console.log(copyNumbers) */ // [1,2,3,4]





/* console.log(numbers===othernumbers) //false

const user = {name:"Leon"}
const student = {name:"Lean"}
console.log(user===student) */


const dci = {
    name:"Digital Carrer Institute",
    classNames: ["Fbw23","fbw43"],
    teachers :["Naqvi","Robert","Oliver"]
}

//shallow clone // deep clone
// ... spread operator , .slice ,  Array.from() 

const copyDci = {...dci}

copyDci.name = "BootCamp"
copyDci.classNames.push("fbw45")
console.log(dci.classNames)


/* console.log(...[1,2,3,4]) */ // 1,2,3,4

/* const copyDci = {...dci} ; */

/* const first = {a:1,b:2}
const second = {c:3,d:4} */
          // {a:1,b:2,c:3,d:4}
/* const third = { ...first,...second }
console.log(third) */


//deep clone (copying nested properties )

//JSON.stringify() =>  (convert object into string)
//JSON.parse() =>  (parse/convert it back to object)

/* const nums = [1,2,3,4]
const convertedArray =  JSON.stringify(nums) //"[1,2,3,4]"
const copyNums = JSON.parse(convertedArray) // [1,2,3,4]
copyNums.push(65)
console.log(copyNums)
console.log(nums) */

const nestedObj = {
    one:"1",
    two:[1,2,3],
    three: {name:"smith" ,address:{city:"berlin"}},
    printName(){
        console.log(this.three.name)
    }
} //protytype object (inside object prototype ) 

/* const strigifyObject  = JSON.stringify(nestedObj)  */ // `{ 'one': "1", } ` //prototype string
/* 
const copyNestedObject = JSON.parse(strigifyObject)
copyNestedObject.three.address.city="Hamburg"
console.log(copyNestedObject)
console.log(nestedObj) */

//using lodash deepClone method
const copyPureDeepClone = _.cloneDeep(nestedObj)

copyPureDeepClone.printName = ()=>{
    console.log("I am new one")
}
nestedObj.printName()
copyPureDeepClone.printName()

/* console.log(_.shuffle([1,2,3,4,5,6])) */
