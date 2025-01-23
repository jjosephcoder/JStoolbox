//Create an array that wi;ll return an array of the first (n) multiples of (x).
//exmaple countBy(1,10) === [1,2,3,4,5,6,7,8,9,10] Start the iteration of the for lopp at 1 as we dont want 0 as a value fof the first element of the array
countBy(2,5) === [2,4,6,8,10]

function countBy(x, n) {
  var z = [];
  for ( i =1; i<=n; ++i){
  let m = (i * x);
  
  z.push(m)
    
  }
  return z;
}