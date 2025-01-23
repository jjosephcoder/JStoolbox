/*Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!*/

function getSum( a,b )
{
   //return a if the numbers are equal else...
   if (a == b) return a;


   //b is less than a
   else if (a < b) return a + getSum(a+1, b); a + the sum of a+1+b example GetSum(-1, 2) == 2  would be =1 + sum 0f (-1+ -1+2) = -1 + 1 = 2

   //else a less tha b 
   else return a + getSum(a-1,b); GetSum(-1, 0) == -1 // -1 + 0 = -1 would be sum of (-1 + sum of -1+0) = =1 + 0 = -1
}