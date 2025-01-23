//Return the power of 2
//Create an array and then iterate through a loop until we meet the value of n, and for each loop push the value of 2
// multiplied by the power of i in to myArray, finally return myArray.

function powersOfTwo(n){
  let myArray = [];
  
  for (var i=0; i<=n; i++){
  //We can use the Math.pow method to raise a number by the power of, the first parameter is 2 and the second is the 
  //each number of our loop includes n itself, alternatively we could use
    //myArray.push(2**i); The exponentiation operator (**) raises the first operand to the power of the second operand.
    
    myArray.push(Math.pow(2,i));
  }
  return myArray
}
function powersOfTwo(n){
  let myArray = [];
  
  for (var i=0; i<=n; i++){
    
    myArray.push(Math.pow(2,i));
  }
  return myArray
}
