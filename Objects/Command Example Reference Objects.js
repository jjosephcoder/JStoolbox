//WORKING WITH ARRAYS AND ARRAYS OF OBJECTS

//FIND THE INDEX ELEMENT NUMBER

	let result= haystack.indexOf("needle");
	return ("found the needle at position " + result)

//SEARCH FOR MULTIPLE PROPERTY KEY VALUES

	let europe = list.reduce((key, property) => (property.continent === "Europe" && property.language === 'JavaScript' ? key + 1 : key),   0 );  
	return (europe)

//ITERATE THROUGH AN ARRAY OF OBJECTS, SEARCH FRO PROPERTY VALES AND ADD OBJECT KEY GREETING

	for (let i=0; i<list.length; i++){
        
      	 //Object new Key "greeting"       
      	 list[i]["greeting"] = 'Hi ' + list[i].firstName + ', what do you like the most about ' + list[i].language + '?'
   	   }
	return (list)

//RETURN BOOLEAN BASED ON SEARCH OF KEY PROPERTY VALUE

 	let output='';
  	let ruby =0;
 	//if using the reduce function we find the value of 'Ruby' in the prperty.language key return true else false, assign true or false boolean to the ruby 	variable.
  	if (ruby=list.reduce((key, property) => (property.language === 'Ruby' ? true : key),   false )) {
       }
       return(ruby)
       }


//SEARCH FOR STRING IN KEY PROPERTY VALUES IN FIND PYTHON RETURN FirstNmae and Country KEY PROPERTY VALUES

  var pythonDevelopers="";
  
  //If you find 'Python' in the list objects elements return the firstname and country from the object, we assign these values to the pythonDevelopers
  //variable, else return ("There will be no Python developers");
  if(pythonDevelopers = list.find(el => el.language === 'Python')){
    
    pythonDevelopers= `${pythonDevelopers.firstName}, ${pythonDevelopers.country}`
    return pythonDevelopers
  }
  {
    return ("There will be no Python developers");
  } 
  }


//IF ALL KEY PROPERTY VALUES OF .LANGUAGE ARE TRUE RETURN BOOLEAN TRUE ELSE FLASE
	function isSameLanguage(list) {
  	for (let i = 0; i < list.length - 1; i++) {
    	if (list[i].language !== list[i + 1].language) {
        return false
        }
        return true
        }








