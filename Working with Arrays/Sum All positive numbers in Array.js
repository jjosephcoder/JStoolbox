function positiveSum(arr) {
  
  let sum =0;
//iterate through an array one lemenet at a time using i as the iteration variable, i < arr.length termination condition for the array if i less than
//the array.length
  for (i = 0; i < arr.length; i++ ){
    
   //if the current array element is greater than the value of zero, add the current array element value to the sum variable
  if (arr[i] >0) 
  sum += arr[i];
 }
  //once for loop completes return the sum
  return sum;
  }

function positiveSum(arr) {
  
  let sum =0;
  for (i = 0; i < arr.length; i++ ){
    if (arr[i] >0) sum += arr[i];
}
  
  return sum;
  }