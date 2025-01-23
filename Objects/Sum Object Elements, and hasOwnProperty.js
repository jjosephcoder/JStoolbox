//Sum all the elements of the object with a for loop checking if the element has a value and if true adding it to the total variable for the total bill,
//increment the counter by one this will become the value to divide the bill by later   
    
   var total =0;
   car counter =0;
   for( var el in x ) {
    if( x.hasOwnProperty( el ) ) {
    total += ( x[el] );
    counter = counter +1;
 }
}