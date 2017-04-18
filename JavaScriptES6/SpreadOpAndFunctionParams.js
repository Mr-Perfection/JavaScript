/*
Params features and Spread
  Default params
  Rest Params
  Spread Ops
*/



function test(something = "default param", somethingElse = something + " olah!") {
  console.log(something,somethingElse);
};

test("what");
test("what","dam");
test(undefined,"dam");
// Output
/*
what what olah!
what dam
default param dam
*/


// Spread operator

function sum(a,b,c) {
  return a+b+c;
}

let nums = [1,2,3];
console.log(sum(...nums));
console.log([...nums,4,5]);

function joinStuff(...stuff){
  return stuff.join('-');
}
console.log(joinStuff('a','b','c'));
// 6
// [ 1, 2, 3, 4, 5 ]
// a-b-c
