// Array.map()
// returns an array with same length

/* const numbers = [1,2,3,4,5] */ //=> [1,4,9,16,25]
/* let sqaureArray=[]
for(let i=0;i<numbers.length; i++){
    sqaureArray.push(numbers[i]*numbers[i])    
}

console.log(sqaureArray) */
/* const sqauredNumbersArray = numbers.map((num)=>num*num)
console.log(sqauredNumbersArray);
 */


//change john age from 17 to 18
/* const users = [ 
    {name:"Lean",age:23} , 
    {name:"Tim",age:25}, 
    {name:"John",age:17}] */


/* const updatedUsers = users.map(user=>{
    if(user.name==="John"){
        user.age=18;
        return user
    }else{
        return user
    }
}) */
/* const updatedUsers = users.map(user=>user.name==="John"? {...user,age:18}: user)
console.log(updatedUsers) */

/* const articles = [{pulisher:"http://image.link.jpeg", heading:"this is first article", time:"12.02.2023", image:"http://image.link.jpeg"}, {pulisher:"http://image.link.jpeg", heading:"this is second article", time:"12.02.2023", image:"http://image.link.jpeg"}  ] */




//Array.filter()
//returns an array with any length

/* const characters = ["a","b","c","d","e"] //=> ["a","b","d","e"]

const updatedCharacters = characters.filter(char => char!=="c") //=> ["a","b","d","e"] 
console.log(updatedCharacters) */


const users = [ 
    {name:"Lean",age:23,className:"fbw32"} , 
    {name:"Tim",age:25,className:"fbw43"}, 
    {name:"John",age:17,className:"fbw32"}, 
    {name:"Tina",age:16,className:"fbw43"}
] 

/* 
const underAge = users.filter(user=>user.className==="fbw32")

console.log(underAge) */


//Array.reduce()
//returns any type of data back (string , number, boolean, array, object)

const numbers = [341,435,213,123,325,567] //=> number 2004

const sum = numbers.reduce( (acc,item)=>acc+=item ,0 )
console.log(sum)

//occurence of each number inside the array
const randomNumbers= [1,1,2,3,2,1,4,5,3,2,6,7,4,5,3,3,2,1,1,1,1] // => {"1": 3, "2": 4, "3": 5 ....}

const result = randomNumbers.reduce((acc,item)=>{
    if(!acc[item]){ 
        acc[item]=1
    }else{
        acc[item]++;
    }
    return acc
}, {} )
console.log(result)


const chars= ["h","e","l","l","o"] //=>hello
const text  = chars.reduce((acc,item)=>acc+=item , "")
console.log(text)