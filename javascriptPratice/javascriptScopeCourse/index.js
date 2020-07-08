var warrior = 'ninja'

const screamwarrior = () => {
  let warrior2 = 'Samurai';
  //Even though this is in a function this can be reached anywhere on file because it is global. 
  // If we use "strict" we cannot use global 
  warrior3 = 'viking'
  return {
    shootWarrior: () => {
      return console.log(warrior, warrior2)
    }
  }
}

// Inside this function we have access to the global variable warrior,
// Inside the function scream warrior we have access to the variable
// warrior2, so in a way this allows us to make that variable private. 
// In summary closures are a way of using variables without making them global,
// or accessible everywhere 
const newWarrior = screamwarrior()
newWarrior.shootWarrior();
//console.log(warrior, warrior2) //this wont work do not have access to warrior 2 

// let and const Are BLOCK SCOPE: 


//HOISTING
//when you declare variable at the bottom of your code they get registered at the top

//the variable 'sample' will be instantiated her, but the nine wont be registered yet 
let example = function () {

}
var sample = 9


// GLOBAL VARIABLES
const warrior2 = {
  name: 'julian',
  type: 'ninja',
  weapon: 'Shuriken',
  agility: 79
}//this is global

// LOCAL SCOPE
// With local variables many function could have the same variable if you please
// because the variables dies when the function completes. 

// CHALLENGE 

const num1 = 8;

multiply = () => {
  let num2 = 8;
  return console.log(num1 * num2)
}

console.log(multiply());