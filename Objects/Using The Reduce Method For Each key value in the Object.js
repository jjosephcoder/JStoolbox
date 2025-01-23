function splitTheBill(x) {
  //let the average variable equal the sum of all the object values of object x, the reduce function where a is the iterator or accumulater is basically
 //goes through the object one element at a time until it reaches the end of the object, adding the each and every key value to the previous until the
 //the end of the object is reached, then divide this sum by the length of the object x

  //GET THE AVERAGE
  let average = Object.values(x).reduce((a,b)=> a + b) / Object.values(x).length;

  //Subtract the average, for the object entries in x and each key and value assign a new value to the keys value that equals the current keys value - average
  Object.entries(x).forEach(([key, value]) => Object.values(x[key]= value - average));

  //Now round down each of the key values in x to 2 decimal places using .toFixed method, parseFloat removes all the expodential after ensuring the
 // the values are integers if not it converts them from string values to integers.000000
  Object.entries(x).forEach(([key, value]) => Object.values(x[key]= parseFloat(x[key].toFixed(2))));
  return x;
}


function splitTheBill(x) {
  let average = Object.values(x).reduce((a,b)=> a + b) / Object.values(x).length;
  Object.entries(x).forEach(([key, value]) => Object.values(x[key]= value - average));
  Object.entries(x).forEach(([key, value]) => Object.values(x[key]= parseFloat(x[key].toFixed(2))));
  return x;
}

function splitTheBill(x) {
  //average variable equals sum of all the values of the object divided by the object length number of elements in the object
  let average = Object.values(x).reduce((a,b)=> a + b) / Object.values(x).length;
  //For each key value in the object - average, this sets the new values to each of the elements based up what each person should of paid
  Object.entries(x).forEach(([key, value]) => Object.values(x[key]= value - average));
  //For each key value in in the obect cobvert the values using parseFloat to make sure the number is not a string before we make its value equal
  // 2 decimal places with the .toFixed method
  Object.entries(x).forEach(([key, value]) => Object.values(x[key]= parseFloat(x[key].toFixed(2))));
  return x;
}