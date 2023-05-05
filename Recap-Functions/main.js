//function

//function is block of code designed to perform particular task.
// it will executed when someone invokes / calls it

//Hoisting
//heaping(storing variable into memory) first round (read all declaration)
//javascript execute your code in second round
/* print()
console.log(a)
console.log("Hello")

let a=25;

function print(){
    console.log("hello")
}

const name = "naqvi" */
//function declaration


/* function print(){
    console.log("hello world")
}

print()  */

let students=["Robin","Naqvi","John","Misbah","Joseph"]
let secondClassStudents= ["Ali","Mike","Rana","Leao","Robert"]

//dynamic function
function printStudents(array){ 
    for(let i = 0; i<array.length; i++){
        console.log(array[i])
    }
}

/* function printSecondClass(){ 
    for(let i = 0; i<secondClassStudents.length; i++){
        console.log(secondClassStudents[i])
    }
} */

/* printStudents(students)
console.log("___________________________")
printStudents(secondClassStudents) */




function sum(num1,num2){
    //num1 and num2 parameters
    console.log(num1+num2)
}

/* sum(2,3) //2 and 3 are arguments

sum(3,4) // 3 and 4 arguments
sum(162,453) */

//rest operator ...
function total(...nums){
    let sum = 0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i]
    }
    console.log(sum)
}

/* total(1,2,3)
total(1,2,3,4,5,6,7) */





//rest should be always in the end
/* function math(operation,...nums){
    switch(operation){
        case "sum":
            let result = 0;
            for(let i=0;i<nums.length;i++){
                result+=nums[i]
            }
            console.log(result)
            break;
        case "substract":
            let result1 = 0;
            for(let i=0;i<nums.length;i++){
                result1-=nums[i]
            }
            console.log(result1)
            break;
        case "multiply":
            let result2 = 0;
            for(let i=0;i<nums.length;i++){
                result2*=nums[i]
            }
            console.log(result2)
            break;
        default:
            console.log(num1/num2)
    }

} */


/* function math(operation,num1,num2){
    switch(operation){
        case "sum":
            console.log(num1+num2)
            break;
        case "substract":
            console.log(num1-num2)
            break;
        case "multiply":
            console.log(num1*num2)
            break;
        default:
            console.log(num1/num2)
    }

} */

/* math("sum",2,4)
math("multiply",5,5) */


function createRandomNumber(){  
    const random = Math.floor(Math.random()*50) //0-49
    /* console.log(random) */
    return random

}

/* let number1 = createRandomNumber()
let number2 = createRandomNumber() */


console.log(`I have created a random value  using a function , ${createRandomNumber()} is my random number `)



//Function Expression
// when you store your function into a variable as a value it is called function expression

//function declaration
/* function printName(name){
    console.log(name)
} */



//function expression
/* const printName = function(name){
    console.log(name)
}


printName("Naqvi") */

//arrow function
const printName = name => console.log(name)
//press and hold ctrl and click on the function will talk you to function definition
printName("Syed")
























