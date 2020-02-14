//contsnats
function logScope() {
  var localVar = 2;
  console.log(localVar);
  if (true) {
    let localVar = "I am different";
    console.log("Nested Let usage", localVar);
  }
  console.log(localVar);
}

const MYCONSTANT = 5;
console.log(MYCONSTANT);

logScope();
