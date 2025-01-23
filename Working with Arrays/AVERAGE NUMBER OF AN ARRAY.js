function getAverage(marks){

  let counter = 0;
  let elements = 0;
  let result =0;
  
  // For loop to ieterate through all the elemnts of the array
  for (i=0; i<marks.length; i++){
  
    /sum variable to add up all the elements of the array
    counter = counter + marks[i]  
   
    //elements to equal the sum of all the elements in the array and adding 1 as the first index of an array is zero
    elements = elements +1
     
    //result = sum / no of elements in the array and round down to closest full iteger to remove decimal places
    result = Math.floor(sum/elements)
  }
  
  return  (result)
 
}