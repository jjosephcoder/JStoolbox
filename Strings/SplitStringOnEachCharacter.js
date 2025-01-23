function doubleChar(str) {
 
  //By passing no character in the "" we instruct the split method to split every character in the string, this creates an array of characters we assign to output
  let output=str.split("");

  let result = "";
 

  for (i=0; i < str.length; i++){
      result = result + output [i] + output[i]    
   
      }
 
  return (result)

}