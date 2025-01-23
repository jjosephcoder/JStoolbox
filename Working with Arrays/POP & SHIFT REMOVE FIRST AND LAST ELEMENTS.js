function sumArray(array) {
  
 let sum = 0; 
 if (array === null) return 0;
 array.sort(function(a,b){
 return a -b;
 });
 array.pop()
 array.shift() 
 
 let newArray = array
 for (i=0; i < newArray.length; i++) sum += newArray[i];
 return sum;
      