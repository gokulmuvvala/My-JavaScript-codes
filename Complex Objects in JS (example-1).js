// Complex Objects in JS (example-1)

// Creating a Complex Object
Laptop = {
    // Declaring the object variables 
    name: "Dell XPS 40",
    Processor: "I5 8th Gen",
    // Creating Object inside a object
    Specs : {
        cpu : "Mali cpu",
        ram : "16gb ram"
    }
}

// Printing the specific properties in an object
console.log(Laptop.name); // with help of (.) operator
                 // OR
console.log(Laptop.Specs); //Printing the  Nested Object
console.log(Laptop.Specs.ram); //Printing the properties inside the Nested Object

// Deleting the object property by the help of the Deleting property
delete Laptop.name
console.log(Laptop); // with help of (.) operator