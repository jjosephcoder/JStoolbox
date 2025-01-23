//TO FIXED RETURNS A NUMBER TO A DEFINED NUMBER OF DECIMAL PLACES

    Object.values(shouldRecieve).forEach((key, index) => {
    shouldRecieve[keys[index]] = parseFloat((shouldRecieve[keys[index]] - shouldPay).toFixed(2))


//PARSE FLOAT

//CONVERTS A STRING TO A NUMBER


//SUM INTERGERS BETWEEN TWO PARAMETERS, CONVERT NEG TO POSITIVE

	function getSum( a,b )
	{
   	//return a if the numbers are equal else...
   	if (a == b) return a;
   	//b is less than a
   	else if (a < b) return a + getSum(a+1, b); a + the sum of a+1+b example GetSum(-1, 2) == 2  would be =1 + sum 0f (-1+ -1+2) = -1 + 1 = 2
   	//else a less tha b 
   	else return a + getSum(a-1,b); GetSum(-1, 0) == -1 // -1 + 0 = -1 would be sum of (-1 + sum of -1+0) = =1 + 0 = -1
	}


//SQUARING NUMBERS OF AN ARRAY
	function squareSum(numbers){
  	let total = 0;
  	for (i=0; i<numbers.length; i++){
  	total = total + numbers[i]*numbers[i]
        }
    	return total;
	}


//parseFloat()

The parseFloat() function parses an argument (converting it to a string first if needed) and returns a floating point number.

Examples

parseFloat(3.14);
parseFloat('3.14');
parseFloat('  3.14  ');
parseFloat('314e-2');
parseFloat('0.0314E+2');
parseFloat('3.14some non-digit characters');
parseFloat({ toString: function() { return "3.14" } });


//Math.round rounded to the nearest integer.


//Math.floor round to closest full integer


//Math.abs (Turn Neg No into Positive WHOLE NUMBER)

//FIND OPPOSITE NEG VS POSITIVE

function opposite(number) {
    let result =0; 
    if (number >0){
    result = number*(-1);
    return result;
    }else{
    result = Math.abs(number)
    return result; 
    }


//MODULO
// return the result of modulo that returns the remainder left after dividing two numbers in this case we divide by 2 and if the condition is false
//we retrun "odd" else "Eeven" the ? denotes a condition  

	function even_or_odd(number) {
	return number % 2 ? "Odd" : "Even"
	}

//MATH.ceil ROUNF NUMBER UPWARDS TO NEXT INTEGER, MATH.FLOOR ITS OPPOSITE COUNTERPART
extraCharges =Math.ceil(extraCharges)*10;


