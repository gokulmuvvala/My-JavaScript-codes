//Template Literal ``(Back ticks)

let num1 = 25;
let num2 = 40;
let Result = num1 + num2;

// The Output That i want print is (The addition of num1 and num2 is 65)

//Method 1 for printing
//console.log("The addition of " + num1 +" and " + num2 + " is " + Result);

// Method 2 for printing
console.log(`The addition of ${num1} and ${num2} is ${Result}`); // Here $(variable)

// With template literal we can also do print some data in new line
console.log(`My name is 
gokul kumar`);

