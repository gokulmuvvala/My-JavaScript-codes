// Constructor function example

// Declaring the constructor function
function job(name,location)
{
    this.name = name;
    this.location = location;
// creating a function 
this.work= function()
{
console.log("Hello world");
}
}

// creating object
let employee1 = new job("Ravi","Mumbai");
let employee2 = new job("Manoj","Pune");

// changing the properties inside the objects with help of key

employee1.name = "kiran";

// printing the employee1 object properties
console.log(employee1);