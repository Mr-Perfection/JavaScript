function testSet() {
  let arr = [1,2,3,4,3];
  let set =new Set(arr);
  let set2 =new Set(['a','b','c','d']);
  console.log(set);
  console.log(set.size);
  set2.forEach(function (value, index, set) { //first two args are the same (since keys are only available in set().)
    console.log('hello',value);
    console.log('hello',index);
  });
  set.add('hello');
  set.add('world');
  set.add('world').add('blah');
  console.log(set);
  set.delete('world');
  console.log(set);
  set.clear();
  console.log(set);

}

testSet();
