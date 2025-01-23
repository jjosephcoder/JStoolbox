You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return:

true if at least one Ruby developer has signed up; or
false if there will be no Ruby developers.
For example, given the following input array:


//If at least one of the develoeprs has signed up for the Ruby course return true, else false
function isRubyComing(list) {

    
  let output='';
  let ruby =0;
 //if using the reduce function we find the value of 'Ruby' in the prperty.language key return true else false, assign true or false boolean to the ruby variable.
  if (ruby=list.reduce((key, property) => (property.language === 'Ruby' ? true : key),   false )) {
    
  }
  return(ruby)
   
}