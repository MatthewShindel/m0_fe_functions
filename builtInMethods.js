// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();

// This method is taking a string as an input and converting all of the characters inside of it into lower case.
// Once the methods run, it then returns that string in lower case. You need to use console.log to see the result.


"Hello World".includes("Hello");
// This method checks to see if a value it is given, a character or a string, is somewhere within the string. It that value is found inside
// the string, then it return the boolean value true. If it doesn't find that value inside the string, it returns false. As this string does include
// the string "Hello", then the method returns true.
"Hello World".endsWith("Hello");
// This value looks at the end of string and checks if the value it is given exists at the end of string. If the string does end in that value, then it returns true
// If that value is not at the end of the string, it returns false. This value is case sensitive. Since this String doesn't end with "Hello",
// The methods returns the value false


"Hello World".endsWith("rld");
// This method is checking if the string "Hello World" ends with the string "rld". endsWith is case sensitive, but doesn't care about whole words.
// Thus, when this methods runs, it sees that the string does end with "rld", and thus returns the values of true;



// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
var firstString = "My name is Matthew Shindel, and I own a dog.";
var secondString = "To make hard boiled egg, you first need eggs, water, and a sauce pan."
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.
// This method will change the value of firstString, making all of the characters upper case. It will then return firstString in upper case, which we can 
// print out using console.log()
console.log(firstString.toUpperCase());
// This method will check to see if the string "eggs" exists within the string secondString. Since "eggs" does exist within secondString, the method returns true
// We print out this value with console.log()
console.log(secondString.includes("eggs"));

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));

console.log("=============")


// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
var firstArray = ["Celery"];
var secondArray = [365, 6, 45, 3, 24, 19, 81, 100];
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

// The Push method adds new values to the end of an array, then returns the new length of the array
// In this instance, first array has an inital length of 1, then push() adds 4 more elements are added to the end of the array, 
// then push() returns the new length of the array, which is 5
console.log(firstArray);
console.log(firstArray.push("Tomatoes", "Carrots", "Onions", "Chicken"));
console.log(firstArray);

console.log("============");

// The pop() method removes the last element for the array, then returns that element. This method permenantly changes the array, meaning that
// if you call the array again after the method, the array will have the last element removed.
console.log(secondArray);
console.log(secondArray.pop());
console.log(secondArray);
console.log(secondArray.pop());
console.log(secondArray);



