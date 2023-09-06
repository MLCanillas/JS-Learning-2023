// how to accept user input
//make sure to have <script src="index.js"></script> inside your html code

//EASY WAY With a window prompt

//let username = window.prompt("What's your name?");
//console.log(username);



// DIFFICULT WAY HTML textbox


let username;
document.getElementById("myButton").onclick = function(){
 username = document.getElementById("myText").value
 console.log(username);
 document.getElementById("myLabel").innerHTML = "Hello " + username;
}

