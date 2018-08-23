var animal = "dog"

function myAnimal(){
  return animal
}

function yourAnimal(){
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  
  var animal2 = "cat"
  return animal2
}

function add2(n){
  
  // Feel free to move things around!
  const two = 2
  return n+=2
}




function funkyFunction() {
  var funkyFunction = 'FUNKY!';
  return function theFunk() {
    return funkyFunction;
  }
}

funkyFunction()()

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.

var theFunk = funkyFunction()
theFunk()
funkyFunction()
// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.

var theFunk = funkyFunction()
theFunk()




var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var x = funkyFunction()
var theFunk = x()
theFunk()