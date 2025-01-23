parseFloat()

The parseFloat() function parses an argument (converting it to a string first if needed) and returns a floating point number.


Examples

parseFloat(3.14);
parseFloat('3.14');
parseFloat('  3.14  ');
parseFloat('314e-2');
parseFloat('0.0314E+2');
parseFloat('3.14some non-digit characters');
parseFloat({ toString: function() { return "3.14" } });
