var testArray = [1,2,3,4,55,66,23];

console.log("The max in "+testArray+" is: "+findMax(testArray));

function findMax(inArray) {
	var max = 0;
	for(var i=0; i<inArray.length; i++)
	{
		if(inArray[i] > max) {
			max = inArray[i];
		}
	}
	return max;
}

