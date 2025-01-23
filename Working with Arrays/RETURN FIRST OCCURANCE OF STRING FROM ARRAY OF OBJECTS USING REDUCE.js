function countDevelopers(list) {

//let europe = result of condition which uses the reduce method to go through the array of objects, and if the object key values of property = 'Europe' and
// the property.language key = 'JavaScript' return europe, this will find the first occurance and then return

 let europe = list.reduce((key, property) => (property.continent === "Europe" && property.language === 'JavaScript' ? key + 1 : key),   0 );  
 
 return (europe)

}