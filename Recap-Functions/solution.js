

function cutStrings(array,number){
    let resultArray=[]
    for(let i=0;i<array.length;i++){
        if(array[i].length>number){
         resultArray.push(array[i].slice(0,number)+"...")
        }else{
            resultArray.push(array[i])
        }
        
    }
    return resultArray
}

console.log(cutStrings(["Hello my name is Max","I am ", "Today is quite sunny outside", "Cats are the best", "This movie is boring"], 10))

console.log(cutStrings(["Hello my name is Max", "Today is quite sunny outside", "Cats are the best", "This movie is boring"], 2))


//task 11

function durationInHours(array){
    let resultArray=[]
    for(let i=0;i<array.length;i++){
        resultArray.push( Math.floor(array[i]/60))
    }
    return resultArray
}

console.log(durationInHours([120, 60, 80, 90, 100])); // [2, 1, 1, 1, 1]
console.log(durationInHours([50, 20, 180])); // [0, 0, 3]


//task 12

function reverseWords(array){
    let resultArray=[]

    for(let i=0;i<array.length;i++){
        resultArray.push(array[i].split("").reverse().join("")) 
    }
    return resultArray;
}

console.log(reverseWords(["cat", "shoe", "one", "sos", "hello"])); // ["tac", "eohs", "eno", "sos", "olleh"]


