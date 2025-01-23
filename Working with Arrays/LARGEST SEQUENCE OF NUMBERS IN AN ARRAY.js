function solution(digits){

let largest = "";
//Iterate through the array
for (let i = 5; i <= digits.length; i++) {
    // for each loop let slice starting position of 5 as i is set to 5 then we - 5 characters, this is our start position, and our end position is always i 5
    //characters ahead so the first iteration will be 0-5, then the next block 1-6, 2,7 etc until we reach the end of the array
    let slice = digits.slice(i - 5, i);
    //we then compare slice to largest if the slice value is greater than largest assign the value of slice to the largest variable, this continues to the end
    //of the for loop
    if (slice > largest) largest = slice;
    //Use parse Int to turn the string value in to an integer
    largest =parseInt(largest)

}

//return the integer value which is the largest sequence of 5 numbers from the array  
return(largest);

}