function testWeakSet(...values) {

  // let set = new setWeakSet(values); YOU CANT INITIALIZE LIKE SET DOES
  let set = new WeakSet();
  let value = {name: 4};
  console.log(value);
  set.add(value);
  set.add({name: 'John Doe'});
  console.log(set.has({name: 'John Doe'}));
  return set;
};


console.log(testWeakSet({'a': 1},{'b': 2},{'c': 3}));

// neither of this data structure cannot be iterated. sucks!
// weird. not working.
