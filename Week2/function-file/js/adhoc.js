// 1) Create a function called wrapINBlockquote that will take in a single value and return a string that wraps the text in an html blockquote tag.




function wrapInBlockquote(text) {
    return '<blockquote>' + text + '<blockquote>';
  }
  


// 2)Write the JavaScript code to get the element with the id of "leadQuote" and, using the function in step 1, wrap the contents of that element in a blockquote.
var tag = document.getElementById('leadQuote');
// var tag = document.queryselector('#leadquote')
tag.innerHTML = wrapInBlockquote(tag.innerHTML);