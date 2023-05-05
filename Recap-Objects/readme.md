Task 1
Given the data below, write a loop to fill the array people with objects containing data from each person.
Inside the loop create also 2 other properties:
fullName: it combines the firstName and lastName together
introduce: it's a method that returns a string like "Hello, my name is Mark Emin, I live in New York and I am 18 years old"
const people = [];
const firstNames = ["Mark", "Sandra", "Dina"];
const lastNames = ["Emin", "Mellow", "Red"];
const ages = [18, 27, 31];
const cities = ["New York", "Berlin", "Barcelona"];
After the loop, the people object should look like this:
[
  {
    firstName: "Mark",
    lastName: "Emin",
    age: 18,
    city: "New York",
    fullName: "Mark Emin",
    introduce: function() {...},
  },
  {
    firstName: "Sandra",
    lastName: "Mellow",
    age: 27,
    city: "Berlin",
    fullName: "Sandra Mellow",
    introduce: function() {...},
  },
  ...
]
Task 2
Given the person object below, add a method greet to it.
const person = {
  firstName: "Tim",
  age: 28
}
The method greet should take a string in input and print a custom greeting depending on the input.
Make sure to capitalize the first letter of the string in input.
For example
console.log(person.greet("hi")); // Hi, my name is Tim
console.log(person.greet("hello")); // Hello, my name is Tim
console.log(person.greet("hey")); // Hey, my name is Tim
console.log(person.greet("good morning")); // Good morning, my name is Tim
Task 3
You are working on a fighting videogame.
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
For example, if we have 2 characters called ryu and ken: