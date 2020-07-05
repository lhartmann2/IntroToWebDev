function countingCharacters(stringToCount) {
	console.log(stringToCount + " has " +
		stringToCount.length + " characters.");
}

function countingCharacters2(stringToCount, charToFind) {
	var charCount = 0;
	for(var i=0; i<stringToCount.length; i++) {
		if(stringToCount[i] == charToFind) {
			charCount++;
		}
	}
	
	console.log("String to search in: " +stringToCount);
	console.log("Character to find: "+charToFind);
	console.log(charToFind + " appears " +charCount+ " times.");
}

function countingCharacters3(str, search) {
	var count=0;
	var numChars = search.length;
	var lastIndex = str.length - numChars;
	for(var i=0; i<=lastIndex; i++) {
		var current = str.substring(i, i + numChars);
		if(current == search) {
			count++;
		}
	}
	return count;
}