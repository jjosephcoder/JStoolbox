getFirstAndLast(['a', 'b', 'c', 'd', 'e', 'f']);
// should return ['a', 'f']

getFirstAndLast([42, 100, 25, -3]);
// should return [42, -3]

getFirstAndLast([10, 50]);
// should return [10, 50]

getFirstAndLast([5]);
// should return [5]


function getFirstAndLast(array) {
  //Create a new array containingn only the first an last items of the array
  //Delare a newArray
  //let output=[];  
  let output = array.splice(0,1)
  let output2 =array.splice(-1,1)
  let final = output + ',' + output2;
  console.log(final);
 return (final);
  
}
