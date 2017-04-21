console.log(Array.of('test',[1,3],{name:'Stephen Lee'}));
console.log(['test', [1,3]]);

function testArray(){
  return Array.from(arguments);
}

let superheros = [{
  name: 'Stephen Lee',
  superheroName: 'Spiderman'
}, {
  name: 'Jamaes Bond',
  superheroName: 'Reckless'
}];

function findHeroByName(name) {
  return superheros.find( function (item) {
    return item.superheroName === name;
  });
}

function findHeroIndex(name) {
  return superheros.findIndex(function (item) {
    return item.superheroName === name;
  });
}

console.log(testArray('hello', 'Stephen',[1,2,3]));
console.log(findHeroByName('Reckless'));
console.log(findHeroByName('Reckles'));
console.log(findHeroIndex('Reckless'));
console.log(findHeroIndex('AAAAA'));

/*
[ 'test', [ 1, 3 ], { name: 'Stephen Lee' } ]
[ 'test', [ 1, 3 ] ]
[ 'hello', 'Stephen', [ 1, 2, 3 ] ]
{ name: 'Jamaes Bond', superheroName: 'Reckless' }
undefined
1
-1
*/

console.log(superheros.copyWithin(0, 1)); // copy 1st element into 0th element
superheros = [{
  name: 'Stephen Lee',
  superheroName: 'Spiderman'
}, {
  name: 'Jamaes Bond',
  superheroName: 'Reckless'
}];
console.log(superheros.copyWithin(1, 0)); // copy 0th element into 1st element


/*
[ { name: 'Jamaes Bond', superheroName: 'Reckless' },
  { name: 'Jamaes Bond', superheroName: 'Reckless' } ]
[ { name: 'Stephen Lee', superheroName: 'Spiderman' },
  { name: 'Stephen Lee', superheroName: 'Spiderman' } ]

*/
