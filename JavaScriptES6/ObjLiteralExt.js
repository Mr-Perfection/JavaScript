/*
Syntactic improvements to defining object literals
Shorthand prop. assignment
Shorthand methods
Computed props.
use Object.assign() props to copy objects to new object.
*/

function objLiteralExt() {
  let x = 'test',
      y = 5;

  let obj = {
    x,y
  }

  console.log(obj.x, obj.y);
  let objectMethod = {
    someMethod (param) {
      console.log(param);
    }
  };

  objectMethod.someMethod('hellow world!');

  let dynamicPropName = {
    [x + y]: 'Some value'
  };
  // x = test y = 5
  console.log(dynamicPropName.test5);

  let composedObj = Object.assign({}, obj, objectMethod, dynamicPropName);
  console.log(composedObj);
}

objLiteralExt();
