function newStringMethods() {
  let testString = 'hello my elo name is Stephen Lee';
  let testString2 = 'hello';
  console.log(testString.startsWith('hel',1));
  console.log(testString.startsWith('hel',0));
  console.log(testString.startsWith('el'));
  console.log(testString.includes('el'));
  console.log(testString.endsWith('e'));
  console.log(testString.endsWith('e',testString.length-1));
  console.log(testString.endsWith('ee',testString.length));

  console.log(testString2.repeat(2));
}

newStringMethods();
/*
result:

false
true
false
true
true
true
true
hellohello
*/
