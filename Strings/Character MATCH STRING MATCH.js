//Return all global occurances of each of the vowels in the string, amd return the length as a number so basically a count of all the elements of the array
//created

function getCount(str) {

  let counter = 0;
  
    var a = (str.match(/a/g) || []).length;
    var e = (str.match(/e/g) || []).length;
    var i = (str.match(/i/g) || []).length;
    var o = (str.match(/o/g) || []).length;
    var u = (str.match(/u/g) || []).length;
    counter = a+e+i+o+u
  
  return counter
}