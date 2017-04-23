// Iterators are objects with next() method
// the method returns an object with value and done props
// the value prop is current value
// done indicates when there ar emore items

function testIterator(...values) {
  let mySet = new Set(values),
      items = mySet.entries();

  console.log(items.next());

  let myMap = new Map([['a',1],['b',2]]),
      mapItems = myMap.entries();
  console.log(mapItems.next());
};

testIterator('a','b','c');
