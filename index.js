// A variable is a container for storing Data
// A Variable behaves as if it was the value that it contains

// Two steps:
// 1. Declaration (var, let, const)
// 2. Assignment (= assignment operator)




let firstname = "Migz" //strings
let age = 30; //numbers
let student = false; //booleans

console.log("Hello",firstname);
console.log("You are",age,"Years old");
console.log("Enrolled:",student);

document.getElementById("p1").innerHTML = "Hello " + firstname
document.getElementById("p2").innerHTML = "You are " + age + " Years old"
document.getElementById("p3").innerHTML = "Enrolled: " + student;