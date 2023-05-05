/* const { stdin, stdout } = require("process")
const readline = require("readline")

const r = readline.createInterface({
    input:stdin,
    output:stdout
}) */
// loops 
// numeric loop (depends on number)
// conditional loop (depends on condition)

/* console.log("hello world") */


/* for( let i=0 ; i<100 ; i++){
    console.log("hello world")
} */

// while 
// do-while

const prompt = require("prompt-sync")({sigint:true})



/* let age = prompt("how old are you ? ")
while(Number(age) < 18){
    console.log("you are too young!")
    age = prompt("how old are you ? ")
}

console.log("you are allowed to enter") */
/* let age;
do{
    age = prompt("how old are you ? ")
    if(age<18){
        console.log("you are too young")
    }else{
        console.log("you are allowed")
    }
}while(Number(age) < 18) */


//initialization
//conditional expression
//increment or decrement expression
/* for(let i = 0; i<10 ; i++ ){
    //block of code
} */

/*  let i = 10; // initialization

while(i<20 ){ //contional expression 
    console.log(i)
    i++;
}  */

let sentence = "Hello World, I am a long sentence" //iterable objects Symbol.iterator
/* console.log(sentence.charAt(0))
console.log(sentence.charAt(1))
console.log(sentence.charAt(2)) */

 for(let i = 0; i<sentence.length ; i++ ){
    //block of code
  /*   console.log(sentence.charAt(i)) */
    /* console.log(sentence[i]) */
} 



/* let cities = ["berlin","frankfurt","hamburg","bonn"] *///iterable objects Symbol.iterator

/* console.log(cities[0].slice(0,3).toUpperCase()) 
console.log(cities[1])  */

/* for(let i=0;i<cities.length; i++){
    console.log(cities[i])
} */

/* let numbers=[1,2,3,4,5,6,7,8,9,10,12,14,34]

let sum = 0;
for(let i=0;i<numbers.length;i++){
    //sum = sum+numbers[i]
    sum+=numbers[i]
}

console.log(sum/numbers.length )*/


/* for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]*numbers[i])
}
 */



/* let cities = ["berlin","frankfurt","hamburg","bonn"]

for(let i=0;i<cities.length;i++){
    let city = cities[i]
    for(let x=0;x<city.length;x++){
        console.log(city[x] )
    }
} */

