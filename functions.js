// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 

function greetings(){
    return "Hello there!";
}

var firstGreeting = greetings();
console.log(firstGreeting);
var secondGreeting = greetings();
console.log(secondGreeting);


console.log("============");

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
function customGreeting(name){
    return `Hello, nice to meet you, ${name}.`;
}
var firstCustomGreeting = customGreeting("Matthew");
console.log(firstCustomGreeting);
var secondCustomGreeting = customGreeting("Daisy");
console.log(secondCustomGreeting);

console.log("============");


// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
function greetPerson (firstName, middleName, lastName){
    return `It's nice to meet you, ${firstName} ${middleName} ${lastName}.`
}
var helloPerson1 = greetPerson("Matthew", "Adam" , "Shindel");
console.log(helloPerson1);
var helloPerson2 = greetPerson("Janet", "Mui", "Shindel");
console.log(helloPerson2);

console.log("============");


// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.
function square(number){
    var squareNumber = Math.pow(number, 2);
    return `The square of ${number} is ${squareNumber}.`
}
var firstSquare = square(14);
console.log(firstSquare);
var secondSquare = square(27);
console.log(secondSquare);

console.log("============");


// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

function checkStock(stockValue,Item){
    if (stockValue >= 4){
        console.log(`${Item} is stocked`);
    }else if (stockValue >= 1){
        console.log(`${Item} - running LOW`)
    }else {
        console.log(`${Item} = Out of Stock!`)
    }
}

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"

console.log("============");
