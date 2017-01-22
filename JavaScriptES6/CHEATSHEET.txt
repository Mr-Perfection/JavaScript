# Memo

## babeljs.io #to manage all different javascript versions

## destructuring
```js
var foo = {
 bar: 1,
 baz: 2
};

var  {bar} = foo;

var tenses = ["a","b". "c"];
var [firstPerson, secondPerson] = tenses; # firstPerson = a, secondPerson = b

Promise.all([promise1, promise2]).then(function([results1, results2]) {

});

var foo = 2;
var obj = {
 bar: 1,
 foo,
} #foo, foo: 2

var name = "will";
var age = 34;
some.method({ name, age});

{
 name: name,
 age: age
}

var name = "will";
var obj = {
 ["name" + name]: "some value"
}

function calcBmi( {weight: w, height: h, max = 25, callback}) {
 var bmi = weight / Math.pow(height, 2);
 if (bmi > max) {
  console.log("you're overweight");
 }
 if (callback) {
  callback(bmi);
 }
}

calcBmi(weight, height, max: 25);
calcBmi(weight, height, null, callback: function() {});
calcBmi(weight, height, callback: function() {});


//template strings

var name = "will";
var  thing = "party";
var gree = "hi, my name is " + name + "and I like to " + thing + ".";

var greet = `hi, my name ${name} and I like to ${thing}`;

//block scoping

var a = 1;
if (true) {
 var b = 2; # means var b is declared in hoisting and set it to 2.
 const bar = 2; # const is blocked scope and cannot be overwritten.
}
console.log(b); # b = 2


class Parent {
  constructor() {

  }
  foo() {

  }
  static bar() {

  }
}

var parent = new Parent();
parent.foo();
Parent.bar();

class Child extends Parent {
  constructor() {
   super()
  }
  baz() {

  }
}
var child = new Child();
child.foo();
Child.bar();


//generator functions

//arrow functions
var foo = function(a, b) {
  return a + b;
};

var  foo = (a, b) => {
  return a + b;
}

do.something(function(a, b){});
do.somethiing((a, b) => { return a + b; })
do.somethiing((a, b) => a + b)
do.somethiing(a => a++)
[0,1,2].map(val => val++); #[1,2,3]

var module = {
  age: 30,
  foo: function() {
    setTimeout(function() {
      console.log(this.age);
    }.bind(this), 100);
  },
  bar: function() {
    setTimeout(() => {
      console.log(this.age);
    }, 100);
  }
};

module.foo();

//Module system

var myModule = require("myModule");
module.exports.foo = function() {

};
module.exports.bar = function() {

};

export function foo() {

}

export function bar() {

}

//another file
import myModule from "myModule";
import {foo, bar} from "myModule";
import {each, omit} from "lodash";
import {foo as foolish, bar} from "myModule";
console.log(foolish); 3
omit(asfdas, "eaf");


async function () {
  var friend = await $.get("http://someside.com/friends");
  console.log(friends);
}

```
