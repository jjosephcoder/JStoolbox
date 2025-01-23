function greetDevelopers(list) {

     //For loop to iterate through the arraay of objects and return a object greeting with this string
     //Hi < firstName here >, what do you like the most about < language here >? 
     for (let i=0; i<list.length; i++){
        
       //Object new Key "greeting" associated value "'H' + the rest etc.....       
       list[i]["greeting"] = 'Hi ' + list[i].firstName + ', what do you like the most about ' + list[i].language + '?'
      }
     
 
    return (list)
}