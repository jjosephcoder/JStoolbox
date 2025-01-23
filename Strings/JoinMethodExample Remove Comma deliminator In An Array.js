function createPhoneNumber(numbers){
  
  numbers.splice(0,0, "(");
  numbers.splice(4,0, ") ");
  numbers.splice(8,0,"-");
  
  return(numbers.join('')+"");

} 

function createPhoneNumber(numbers){
  
//use the splice function to manipulate the array and return the new string, splice method enter a start value where to start in the array and the how many
//characters to dleete, followed bt the charatcer you want to add at given loaction in the array
  numbers.splice(0,0, "(");
  numbers.splice(4,0, ") ");
  numbers.splice(8,0,"-");
  
//Join removes the deliminator characters in the array in our case this is the , so we use ' ' to remove the commas and "" to replace with no character,
//this then truncates all the phone numbers together.
  return(numbers.join('')+"");

} 