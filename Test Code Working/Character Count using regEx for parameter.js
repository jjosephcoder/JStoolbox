function countChars (str, char) {
//Create a variable that equals the value of the regEx function, //which includes the char parameter passed from the main function,
//and the g switch for global, thus search for more than one occurance  
let regEx = new RegExp(char, 'g');

//Return the total number of occurrences of the match function to a //number.length

let charCount = (str.match(regEx) || []).length;
  
    return (charCount);
}

countChars("hello my name is Jon", "J")
