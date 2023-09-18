// switch = statement that examines a value
// for a match againts many case clauses.
// more efficient that many "else if" statements.

let grade = "pizza";

switch(grade){
case "A":
    console.log("You did great!");
    break;

case "B":
    console.log("You did good!");
    break;

case "C":
    console.log("You did okay!");
    break;

case "D":
    console.log("You passed ... barely");
    break;

case "F":
    console.log("You FAILED!");
    break;
default:
    console.log(grade, "Is not a letter grade!");

}