function sumArray(array) {
  
 let sum = 0; 
 if (array === null) return 0;
 array.sort(function(a,b){
 return a -b;
 });
    
 let newArray = array.slice(1,-1);
 for (i=0; i < newArray.length; i++) sum += newArray[i];
 return sum; 
  
}

function sumArray(array) {
  
 let sum = 0; 
//if array is empty return null value
 if (array === null) return 0;

//SORT THE ARRAY NUMBER IN TO ASCENDING ORDER 
// a -b retuns increasing list of numbers from the sorted array 1,2,6,8,10
// a < b returns highest to lowest numbers in the array 10,8,6,2,1

array.sort(function(a,b){
 return a -b;
 });
 
//Use Slice to remove the first and last elements of the Array and assign to newArray variable   
 let newArray = array.slice(1,-1);
//For loop to sum all the elements of the array 
 for (i=0; i < newArray.length; i++) 
//For each iteration add the current newArray element or value to the sum variable, once the for loop terminates return the value of sum
sum += newArray[i];
 return sum;
  
}
