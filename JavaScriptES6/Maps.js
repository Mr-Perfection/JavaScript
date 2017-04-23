function testMap(...values) {

  let map = new Map(values);
  map.set('testing', {'mad': 'max'});
  console.log(map.get('testing'));
  console.log(map.has('t1esting'));
  return map;
};

let ks = ['a','b'],
    vs = [1,2],
    as = ['ab','cd'];
console.log(testMap(ks,vs,as));
/*
{ mad: 'max' }
false
Map { 'a' => 'b', 1 => 2, 'ab' => 'cd', 'testing' => { mad: 'max' } }
*/
