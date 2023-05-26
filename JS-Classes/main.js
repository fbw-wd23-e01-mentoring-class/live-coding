//literal way

let user = {
    name:"Niko",
    age:23,
    city:"Berlin"
}


//factory function
function User(name,age,city){
    return {
        name,age,city
    }
}

const user2 = User("Ion",24,"Hamburg") //=> new prototypeObject
const user3= User("Peter",32,"Bonn") // =>  new prototypeObject

/* console.log(user2)
console.log(user3) */


//Contructor Function
/* function Student(name,age,city){
    this.name= name;
    this.age=age;
    this.city=city
 
}
Student.prototype.getStudentDetails=function(){
    console.log(this.name)
}


let student = new Student("Joseph",24,"Berlin") // => {} this is pointing to {} object

console.log(student)
student.getStudentDetails() */


/* class Student {
    constructor(name,age,city){
        this.name= name;
        this.age=age;
        this.city=city
    }
   
    getStudentDetails(){
        console.log(this.name, this.age)
    }
}

const student = new Student("Marvin",25,"Berlin") // share same prototype 
const student2 = new Student("John",32,"Hamburg") //share same prototype
console.log(student)
console.log(student2)
student.getStudentDetails()

student2.getStudentDetails() */


class Institue {
    constructor(instituteName, location, students ){
        this.instituteName= instituteName
        this.location=location
        this.students=students
    }
    getInstituteDetails(){
        console.log(`Instutue name is ${this.instituteName} , located at ${this.location} and has ${this.students} students`)
    }
}

const bootcamp = new Institue("DCI", "Berlin", 1200)
bootcamp.getInstituteDetails()

class DciStudent extends Institue {
    constructor(name, age,className, institute, location, students){
        super(institute="DCI",location="Berlin",students=1200)
        this.name= name;
        this.age= age
        this.className=className  
    } 
    getStudentDetails(){
        console.log(`student name is ${this.name}, ${this.age} year old, studying in ${this.className} class`)
    }
}
const student = new DciStudent("John",23,"fbw32")
console.log(student)
student.getInstituteDetails()
student.getStudentDetails()
