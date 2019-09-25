'use strict';

// make a variable
var username = prompt('Welcome! What is your name?');

// print out whatever's in that variable
console.log(username);

//"concatenate", or add, a variable
console.log('Hi, ' + username + '!')

    document.write('Hi, ' + username + '!');

var wantsToOrder = prompt('You\'re ready to order your new kicks?');

if (wantsToOrder === 'yes') {

    document.write(' Glad you\'re ready to order new kicks. ');

} else {
    document.write('<p>Feel free to browse. Also, ask for any help you need from a consultant.</p>');

}