//Returns the index number of the "needle" string in the array and this is concatenanted with the string in the return statement

function findNeedle(haystack) {
  let result= haystack.indexOf("needle");
   return ("found the needle at position " + result)
  
}

var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];