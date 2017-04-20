/*
  New methods & props
  3 new props:
  1. EPSILON
  2. MAX_SAFE_INTEGER
  3. MIN_SAFE_INTEGER
*/

function updateNumberObj() {
  console.log(Number.EPSILON);
  console.log(Number.isFinite(1));
  console.log(Number.isFinite(Infinity));
  console.log(Number.isInteger(1));
  console.log(Number.isInteger(1.1));

  console.log(Number.MIN_SAFE_INTEGER);
  console.log(Number.MAX_SAFE_INTEGER);

  console.log(Number.isSafeInteger(1));
  console.log(Number.isSafeInteger(Math.pow(2,53)));

  console.log(isNaN('NaN'));
  console.log(Number.isNaN(NaN));
}

updateNumberObj();
