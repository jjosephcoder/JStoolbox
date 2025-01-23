//BOOLEAN TRUE FALSE RETURN ON OBJECT KEY PROPERTY VALUE
//if using the reduce function we find the value of 'Ruby' in the prperty.language key return true else false, assign true or false boolean to the ruby variable.
	function isRubyComing(list) {
   	let output='';
  	let ruby =0;
	if (ruby=list.reduce((key, property) => (property.language === 'Ruby' ? true : key),   false )) {
    	}
  	return(ruby) 
	}


//OBJECT KEY PROPERTY VALUES COMPARISON
var list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
];


//Search through th array and if all the .language object properties are not equal return false, else return true.
	function isSameLanguage(list) {
  	for (let i = 0; i < list.length - 1; i++) {
    	if (list[i].language !== list[i + 1].language) {
     	 return false
    	}
  	}
 	 return true
	}

//ITTERATE THROUGH AN ARRAY OF OBJECTS, ADD KEY AND KEY PROPERTIES FROM PARENT OBJECT
	function greetDevelopers(list) {

     //For loop to iterate through the arraay of objects and return a object greeting with this string
     //Hi < firstName here >, what do you like the most about < language here >? 
     	for (let i=0; i<list.length; i++){
      //Object new Key "greeting" associated value "'H' + the rest etc.....       
       	list[i]["greeting"] = 'Hi ' + list[i].firstName + ', what do you like the most about ' + list[i].language + '?'
     	 }
       	 return (list)
	}


//OBJECT PROPERTY VALUE RETRIEVAL . NOTATION

	function animal(obj){

	//let equals the concatenation of strings and oject paired key values

 	 let output = "This " + obj.color + " "+ obj.name + " has " + obj.legs + " legs." 
 	 return (output)
	}

	animal({name:"dog",legs:4,color:"white"})


//SEACH FOR KEY PROPERTIES AND IF TRUE RETURN STRING
	function countDevelopers(list) {

	//let europe = result of condition which uses the reduce method to go through the array of objects, and if the object key values of property = 'Europe' and
	// the property.language key = 'JavaScript' return europe, this will find the first occurance and then return

 	let europe = list.reduce((key, property) => (property.continent === "Europe" && property.language === 'JavaScript' ? key + 1 : key),   0 );  
 
 	return (europe)
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




//SUM ALL THE ELEMENTS OF AN OBJECT HAS OWN PROPERTY 
    
  	var total =0;
  	car counter =0;
   	for( var el in x ) {
    	if( x.hasOwnProperty( el ) ) {
    	total += ( x[el] );
    	counter = counter +1;
 	}
	}


//REDUCE METHOD FOR AN OBJECT, SUM ALL KEYS, DIVIDE BY OBJECT ARRAY LEGNTH FOR AVERGAE, THEN - AVERAGE FROM EACH KEY VALUE, THEN MAKE EACH KEY VALUE A INTEGER
//TO 2 DECIMAL PLACES
function splitTheBill(x) {
  let average = Object.values(x).reduce((a,b)=> a + b) / Object.values(x).length;
  Object.entries(x).forEach(([key, value]) => Object.values(x[key]= value - average));
  Object.entries(x).forEach(([key, value]) => Object.values(x[key]= parseFloat(x[key].toFixed(2))));
  return x;
}