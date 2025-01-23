//COUNT ALL OCCURACES OF CHARACTERS AND RETURN NUMBER OF

	function getCount(str) {
	let counter = 0;  
	var a = (str.match(/a/g) || []).length;
    	var e = (str.match(/e/g) || []).length;
   
   	counter = a+e
  
  	return counter
	}


//SPLICE AND JOIN ADDING CHARACTER AND JOINING CHARACTERS TO AN ARRAY OR STRING

	function createPhoneNumber(numbers){
  
	numbers.splice(0,0, "(");
  	numbers.splice(4,0, ") ");
  	numbers.splice(8,0,"-");
  
  	return(numbers.join('')+"");
	} 


//PARSE INT RETURNS A INTEGER EQUIVALENT OF A STRING

	largest =parseInt(largest)



//SLICE REMOVE CHARACTERS, STRAT AND END POSITION OF THE STRING(ARRAY)

	function removeChar(str){
  	var output="";  
 	output = str.slice(1,[-1]);
	return (output)
	};


//SPLIT ON EACH CHARACTER
	
	function doubleChar(str) {
 
  //By passing no character in the "" we instruct the split method to split every character in the string, this creates an array of characters we assign to output
  //This example doubles up each character by splitting the string in to individual characters and doubling through the use of a For Loop iterating through the
  //Array
	let output=str.split("");
  	let result = "";
  	for (i=0; i < str.length; i++){
      	result = result + output [i] + output[i]    
      	}
	return (result)
	}


//STRIP REMOVE SPACES
	function noSpace(x){
       	let strip=x.replace(/\s/g, ''); //g is global so it removes all occurances not just the first one it finds in the string
    	return strip;

	}

//FIND AND REPLACE CHARACTERS IN A STRING

	function replace(s){
    	var output = s.replace(/([aeiouAEIOU])/g, "!");
  	return (output);
	}


//STRING REPEAT REPEAT A STRING PASSED AS S BY N NUMBER OF TIMES
	
	function repeatStr (n, s) {
   	let output = "";
  	output = s.repeat(n); 
  	return output;
	}


//LOWERCASE METHOD
 word=word.toLowerCase();


//CHARACTER OCCURANCE AND BOOLEAN IF OCCURANCE > 1 RETURN ) INSTEAD OF THE CHARACTER PROVIDED, ELSE ( USE MAP TO MAP THE CHARACTER DEPENDANT UPON CONDITION RETURN
//JOIN TO JOIN ALL THE ELEMENTS AND RETURN AS A STRING
function duplicateEncode(word){
  word=word.toLowerCase();
  characterOccurance = {}    
  word.split('').forEach(char => { 
  
  if(characterOccurance[char]){ 
     characterOccurance[char] += 1; 
  
   }else{
    characterOccurance[char] = 1;
   }
   })
  
  
   let output = word.split('').map(
                    char => characterOccurance[char] == 1 ? '(' :')' 
                    ).join('');
   return output;
   }



//TEMPLATE LITERAL HELPS TO GET AROUND DELIMINATOR CHARACTER PROBLEMS WHEN PASSING STRING VALUES TO RETURN
//Variable plus the .fistName and country values from an object  

    pythonDevelopers= `${pythonDevelopers.firstName}, ${pythonDevelopers.country}`
    return pythonDevelopers


