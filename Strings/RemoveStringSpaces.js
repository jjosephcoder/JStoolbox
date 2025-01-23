function noSpace(x){

  //Use the .replace method to remove the string spaces /g is global so it removes all occurances not just the first one it finds in the string
  let strip=x.replace(/\s/g, ''); 
  
  return strip;
}