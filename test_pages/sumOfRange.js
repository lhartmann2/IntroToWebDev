var testArray = [17, 42, 311, 5, 9, 10, 28, 7, 6];

var sum = 0;

for(var i=0; i<testArray.length; i++) 
{
	sum += testArray[i];
}

console.log("Sum of "+testArray+" is: "+sum);