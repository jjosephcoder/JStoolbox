
  function findOdd(array) {
    
    
    let element = 0;

    
    for(let i = 0; i < array.length; i++) {
        
    let tempInt = array[i];
    let tempCount = 0;
        
    for(let j = 0; j <array.length; j++) {
            
      if(array[j]===tempInt) {
         tempCount++;
            
           }
       }
     
    if(tempCount % 2 !== 0) {
            
   
    element = tempInt;
        }
    }
    
    return element;
    }
 