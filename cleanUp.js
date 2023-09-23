// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askForName() { 
  console.log("Hello, what is your name?")
 }
// modified fuction so that the console.log was on a seperate line, move {} 
// onto seperate lines, added a console.log(=========) after each function to see
// clearly when each function happens

askForName()
console.log("=========");


// EX 2:
function addThreeNums(first, second, third) {
  var sum = first + second + third
  return sum;
}
// cleaned up syntax of function, made the body of the function 
// properly indented, since the function returns a value, added 
// console.log() statements arround each of the times the function is called


console.log(addThreeNums(1, 2, 3));
console.log(addThreeNums(4, 2, 7));
console.log("=========");

// EX 3:
function makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil," + 
  "pine nuts, garlic, salt, pepper.");
  console.log("Pulse basil and pine nuts.");
  console.log("Add garlic and cheeses.");
  console.log("Slowly pour in oil.");
  console.log("Season.")
}

// Fixed that function was not spelled correctly , 
// moved the } to another line for readability, broke the first console.log into 
// 2 parts for readability, added periods "." also for readability

makeFreshPesto();
console.log("=========");

//  EX 4:
function average(num1, num2) {
  var sum = num1 + num2;
  var avg = sum / 2;
  return avg
}
// moved body of function inline with the rest of the method,
// properlly indented the body of the function, added console.log() that calls the function to test it

console.log(average(25,7))
console.log(average(13,49))

console.log("=========");
