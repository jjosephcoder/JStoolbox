var list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
];


//Search through th array and if all the .language object properties are not equal return false, else return true.
function isSameLanguage(list) {
  for (let i = 0; i < list.length - 1; i++) {
    if (list[i].language !== list[i + 1].language) {
      return false
    }
  }
  return true
}
