
//First returning null if the the array is empty else sort the array in ascening order a < b instead of a,b will retunr highest to lowest
 if (array === null) return 0;
 array.sort(function(a,b){
 return a -b;
 }