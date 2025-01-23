function initializeNames(name) {

//Split the name string in to an array seperateNames
  let seperateNames = name.split(' ');

//Create a variable for the final output
  let output = name;

//If the number of elements or words is greater than 2 we need to abbreviate middle names
  if(seperateNames.length>2){
      //First name equals the value of index 0 in the seperateNames array
	  const firstName = seperateNames[0];
	  //define the middleName variable
      let middleName = "";
	  //For loop starts at position 1 and end -2 from the seperateNames.length here we are only executing code in the
	  //loop if the elements fall inside the words fall inside the first and lastName
      for(let i=1; i<=seperateNames.length-2; i++){
                 
         //for each middle name add a space, and the value of seperateNames at the current index position be this the
		 //first and or middle second name and append with the . period
		 middleName += " "+seperateNames[i][0]+".";
      }
	  //Define the lastName value to equal the last element value of the seperateNames array
      const lastName = seperateNames[seperateNames.length-1];
	  //Now lets construct the string using the value nin firstName + middleName + lastName
      output = firstName + middleName +" "+ lastName;
  }

  return output;
}



//Option2 
function initializeNames(str){
   return str.trim()
      .replace(
        /\s(?=\b)(\w+)(?=\b\s)/gi,
        (m,g)=> " " + g.slice(0,1) + "."
      )
}