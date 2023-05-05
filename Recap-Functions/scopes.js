// before ES6 
// there were 2 scopes
// global and local

//modern JS
//global 
//functional scope
//block scope

//global
let name = "John"

if(name==="john"){
    let age=23 //block scoped variable
    console.log(age)
    console.log(name)
}

/* console.log(age) *//*ReferenceError: age is not define  */

function printNumber(){
    let num = 9; //functional scoped variable
    /* console.log(num) */
   
    //lexical scope
    function anotherFunc(){
        
        let number=23; //functional scoped variable
        console.log(num) //lexical scoped variable //Closure
    }

    return num
}

/* console.log(num) */
console.log(printNumber())

