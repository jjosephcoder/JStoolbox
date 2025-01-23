//Take a whole nunmber and split it up in to seperate elements to form a new Array
// 10 would equal the following array monkeyArray

function monkeyCount(n) {

  const monkeyArray =[];
 
  for (let i=1; i<=n; ++i){
  monkeyArray.push(i);
}
  return monkeyArray;
}