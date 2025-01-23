//Using the join function to convert all the elements of an array in to a string, then using strip to remove all occurances of the , deliminator and to replace
//with a space.

function smash (words) {
  let newArray=[];
  newArray=words.join();
  let strip=newArray.replace(/,/g, ' ');
 
  return strip;
  }

Test.assertEquals(smash(["hello"]), "hello");
Test.assertEquals(smash(["hello", "world"]), "hello world");