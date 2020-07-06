function clearErrors() {
	for(var i=0; i<document.forms["numberFun"].elements.length; i++) {
		if(document.forms["numberFun"].elements[i].parentElement.className.indexOf("has-") != -1) {
			document.forms["numberFun"].elements[i].parentElement.className = "form-group";
		}
	}
}

function resetForm() {
	clearErrors();
	document.forms["numberFun"]["startNum"].value = "";
	document.forms["numberFun"]["endNum"].value = "";
	document.forms["numberFun"]["stepNum"].value = "";
	document.getElementById("results").style.display = "none";
	document.getElementById("submitButton").innerText = "Submit";
	document.forms["numberFun"]["startNum"].focus();
}

function validateItems() {
	clearErrors();
	
	var start = document.forms["numberFun"]["startNum"].value;
	var end = document.forms["numberFun"]["endNum"].value;
	var step = document.forms["numberFun"]["stepNum"].value;
	
	if(start == "" || isNaN(start)) {
		alert("Starting value must be an integer.");
		document.forms["numberFun"]["startNum"].parentElement.className = "form-group has-error";
		document.forms["numberFun"]["startNum"].focus();
		return false;
	}
	
	if(end == "" || isNaN(end) || end <= start) {
		alert("Ending value must be an integer greater than the starting value.");
		document.forms["numberFun"]["endNum"].parentElement.className = "form-group has-error";
		document.forms["numberFun"]["endNum"].focus();
		return false;
	}
	
	if(step == "" || isNaN(step) || step < 0) {
		alert("Step value must be a positive integer.");
		document.forms["numberFun"]["stepNum"].parentElement.className = "form-group has-error";
		document.forms["numberFun"]["endNum"].focus();
		return false;
	}
	
	document.getElementById("results").style.display = "block";
	document.getElementById("submitButton").innerText = "Recalculate";
	
	document.getElementById("addResult").innerText = Number(num1) + Number(num2);
	document.getElementById("subtractResult").innerText = num1 - num2;
	document.getElementById("multiplyResult").innerText = num1 * num2;
	document.getElementById("divideResult").innerText = num1 / num2;
	
	return false;
}