/*
  A New Scope
    Use the let keyword to declare block-scoped variables
    no changes to var
*/

var _ = require('underscore');

function sayHello() {
  // console.log(block);
  if (true) {
    let block = 'hi';
    let a = 1,
        b = 2,
        c = 3;
    console.log(a,b,c);
  }
}

const PI = 3.14;

let obj = {
  test: 'test'
};

const referenceTest = obj;
obj.test = 'hello';
console.log(referenceTest);
sayHello();

/*
SUMMARY:
  Block Scope
  Use let or const to create a block-scoped variables
  Visible only inside the containing block
  Block scoped variables are not hoisted

*/
