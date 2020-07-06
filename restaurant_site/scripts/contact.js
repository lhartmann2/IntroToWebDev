function clearErrors() {
	for(var i=0; i<document.forms["contact"].elements.length; i++) {
		if(document.forms["contact"].elements[i].parentElement.className.indexOf("has-") != -1) {
			document.forms["contact"].elements[i].parentElement.className = "form-control";
		}
	}
}

function resetForm() {
	clearErrors();
	document.forms["contact"]["name"].value = "";
	document.forms["contact"]["email"].value = "";
	document.forms["contact"]["phone"].value = "";
	document.forms["contact"]["reason"].value = "default";
	document.forms["contact"]["info"].value = "";
	document.forms["contact"]["name"].focus();
}

function validateItems() {
	clearErrors();
	
	var name = document.forms["contact"]["name"].value;
	var email = document.forms["contact"]["email"].value;
	var phone = document.forms["contact"]["phone"].value;
	
	if(name == "") {
		alert("Please fill out your name.");
		document.forms["contact"]["name"].parentElement.className = "form-group has-error";
		document.forms["contact"]["name"].focus();
		return false;
	} else if(email == "") {
			alert("Please enter a valid email address.");
			document.forms["contact"]["email"].parentElement.className = "form-group has-error";
			document.forms["contact"]["email"].focus();
			return false;
	} else if(phone == "" || isNaN(phone) || phone.length != 10) {
			alert("Please enter a 10-digit phone number.");
			document.forms["contact"]["phone"].parentElement.className = "form-group has-error";
			document.forms["contact"]["phone"].focus();
			return false;
	} else {
		alert("Data is validated and ready for submission.");
		return false;
	}
}