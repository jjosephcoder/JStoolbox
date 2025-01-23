//Solution 1
//We create a newArray by pusing each of the people[i].pets paired key values in to it, 
//push adds each item to the end of the newArray, then we use the flat method to 
//return a one dimensional array, as the original array can contain numerous objects making it multi dimensional

/*function gatherPets(people) {
  let newArray = [];
  for (let i = 0; i < people.length; i++) {
    newArray.push(people[i].pets);
  }
  return newArray.flat();
}
*/


//Solution 2
//Return a one dimensional array by using flatMap method which will return a new array of all 
//the pets keys in the people array, and flatten the array if it 
//has more than one array within it, in our case we have a multi dimensional array of objects
function gatherPets(people){
  return people.flatMap(key => key.pets);
}

//Examples:

//gatherPets([]); // should return []

//gatherPets([{ name: 'Malcolm', pets: ['Bear', 'Minu'] }]);
// should return ['Bear', 'Minu']

gatherPets([
  { name: 'Malcolm', pets: ['Bear', 'Minu'] },
  { name: 'Caroline', pets: ['Basil', 'Hamish'] },
]);
// should return ['Bear', 'Minu', 'Basil', 'Hamish']