function findBiggestFraction(a,b) {
    var result;
    a>b ? result = ["firstFraction", a] : result = ["secondFraction", b];
    return result;
}

var firstFraction = 3/4;
var secondFraction = 5/7;

var fractionResult = findBiggestFraction(firstFraction,secondFraction);

console.log("First fraction result: ", firstFraction);
console.log("Second fraction result: ", secondFraction);
console.log("Fraction " + fractionResult[0] + " with a value of " + fractionResult[1] + " is the biggest!");


//anonymous function

var a = 3/4;
var b = 5/7;

var theBiggest = function() {
  var results;
    a>b ? results = ["firstFraction", a] : result = ["secondFraction", b];
    console.log(results);
}

theBiggest();
console.log("directly calling the anonymous function gives the entire fucntion itself");
console.log(theBiggest);
