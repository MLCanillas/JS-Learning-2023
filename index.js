//useful string properties & methods

let username = "   Migz   ";
let phoneNumber = " 0956-572-6634";

//console.log(username.length);
//console.log(username.charAt(0));
//console.log(username.indexOf("o"));
//console.log(username.lastIndexOf("o"));

//username = username.trim();
//username = username.toUpperCase();
//username = username.toLowerCase();

phoneNumber = phoneNumber.replaceAll("-","/");

console.log(phoneNumber);
