'use strict';

// make a variable
var username = prompt('Welcome! What is your name?');

// print out whatever's in that variable
console.log(username);

//"concatenate", or add, a variable
console.log('Hi, ' + username + '!')

    document.write('Hi, ' + username + '!');

var wantToOrder = prompt('We are so glad you are ready to order custom kicks. How soon do you plan to order your new kicks?');

if (wantsToOrder === 'yes') {

    document.write('<p>We're so glad you're ready to order new kicks.</p>');

} else {
    document.write('<p>Feel free to browse. Also, ask for any help you need from a consultant.</p>');

}