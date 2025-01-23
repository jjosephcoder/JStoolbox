function replace(s){
  
/*assign the value of the .replace method to the var variable, we search for the following characters aeiouAEIOU both lower and upper case derivitives of the vowels, globally so more that one occurance is catered for and then we replace the occurances with an ! mark*/
  var output = s.replace(/([aeiouAEIOU])/g, "!");
 
  return (output);
}