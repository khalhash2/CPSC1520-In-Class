/* main.js
This is a comment block, enclosed in a slash + asterisk and ending with an asterisk+slash
*/
/*If you put your script as the last part of the body, it will be the last thing loaded
Javascipt files run as soon as they are loaded by the browser*/
//demo of calling a function - console is the javascipt editor environment in the browser
//console.log(message);
console.log('main.js is loaded');
// the updateInnerHTML function has two parameters:
// - selestor - is  a string that identifies which DOM element to get/select
// - newValue - is a string that will be the new value for the selector's innerHTML
function updateInnerHTML(selector, newValue) {
    document.querySelector(selector).innerHTML = newValue;
  }

function strong(value) {
    //combining strings to produce a new string is called concatenation
    return '<strong>' + value + '</strong>';
  }
  