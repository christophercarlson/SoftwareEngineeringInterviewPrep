//not all function needs names. 
// only function plus has scope to a and b. 

function plus(a, b) {
  var sum = a + b
  return sum
}
console.log(plus(3, 3))

// AN anonymous function
var plus2 = function (a, b) {
  return console.log(a + b)
}(2, 7); //this will fire the function right when loaded. 
//use full when only needed once. 

function plus3(a, b) {
  return (console.log(a + b), console.log(this), console.log(arguments))
}
plus3(3, 3) // multiple returns 

var calc = {
  status: 'awesome',
  plus4: function (a, b) {
    return (
      console.log(this),
      console.log(a + b),
      console.log(arguments),
      console.log(this.status)
    )
  }
}
calc.plus4(3, 3) // invoking function as methods in an object
//The binding of this, happens at invocation time 

//constructing an object(Making a function a objects constructor) this is no javascript
// way of being Object oriented
var dog = function () {
  var name, breed;
  return console.dir(this)
  //The Console method dir() displays an interactive list of the properties of the specified JavaScript object. The output is presented as a hierarchical listing with disclosure triangles that let you see the contents of child objects.
}
//creating a dog object based of of this function.
firstDog = new dog;
firstDog.name = "rover"
firstDog.breed = "doberman"
console.log(firstDog.name, firstDog.breed)




var speak = function (saywhat) {
  console.log(saywhat)
}

var dog2 = function () {
  var name, breed
}

dog2.prototype.speak = speak; //giving all instance of object a function

firstDog1 = new dog;
firstDog1.name = "rover"
firstDog1.breed = "doberman"

// EXPANDING OBJECTS THROUGH prototype
// Multiple objects can inherit 
// All Objects inherit properties
// declaration inherit from function
// function constructor inherits from object

// PROTOTYPE GIVE YOU SUPER POWERS TO EXPAND ALL FUNCTIONALITIES


//INVOKING THROUGH CALL AND APPLY
var talk = function (what) {
  console.log(this.love);
  console.log(this.normal);
}

var saySomething = { normal: 'meow', love: 'purr' }
talk.call(saySomething)
//or

var talk2 = function (what) {
  console.log(what);


}
var saySomething2 = { normal: 'meow', love: 'purr' }
talk.call(saySomething2, saySomething2.normal)
talk.apply(saySomething2, ['meuff'])
//APPLy allows us to pass an array argument


// THE ARGUMENT PARAMETER
var plus5 = function () {
  var sum = 0;
  for (let index = 0; index < arguments.length; index++) {
    sum += arguments[index]
  }
  return sum
}
console.log(plus5(2, 2, 2, 2));


//ANONYMOUS CLOSURE or SELF EXECUTING FUNCTION
(function () {
  console.log('foo');
})();
//this changes to function expression.



//SCOPE
function myDog() {
  var dogName = 'fido';
  function otherDog() {
    var dogName = 'rover'
    console.log(dogName + ' says woof')
  }
  otherDog()
}
myDog();

//MODULES, NAMESPACING, RETURN STATEMENTS
//USING NAME SPACING TO PROTECT ANY VARIABLE FROM OUTSIDE SCOPE. 
var ray = (function () {
  return {
    speak: function () {
      console.log("hello")
    }
  };
})();

ray.speak()

var ray2 = (function () {
  var DEFAULTS = {
    say: "hello"
  }
  return {
    speak: function () {
      var myArguments = arguments[0] || '';
      var statement = myArguments.say || DEFAULTS.say
      console.log(statement)
    }
  };
})();

ray2.speak({ say: "howdy" })


//CHAINING  
var ray3 = (function () {
  var DEFAULTS = {
    say: "hello",
    speed: 'normal'
  }
  return {
    speak: function () {
      var myArguments = arguments[0] || '';
      var statement = myArguments.say || DEFAULTS.say
      console.log(statement)
      return this;
    },
    run: function () {
      var myArguments = arguments[0] || '';
      var statement = myArguments.speed || DEFAULTS.speed
      console.log('running..' + running)
      return this;
    }
  }
})();

ray3.speak({ say: "howdy" })

