/*
When using Template Literals, make sure to use `` (ticks) and wrap any code within ${ and }
*/
function template() {
  let temp = `this is a
templeate`;
  let a = "xxx",
      b = "yyy";

  function reversedString(s){
    return s.split('').reverse().join('');
  }

  console.log(`a is ${a}  and b is  ${b} reversed is ${reversedString(temp+a+b)}`);

  function str(literals, ...values) {
    return literals[2] + values[2] + literals[2] + values[2];
  }
  console.log(str`a is ${a}  and b is  ${b} reversed is ${reversedString(temp+a+b)}`);
}

template()
//a is xxx  and b is  yyy reversed is yyyxxxetaelpmet
//a si siht
//reversed is yyyxxxetaelpmet
//a si siht
