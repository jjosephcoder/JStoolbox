function getFirstPython(list) {

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