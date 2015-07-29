function infoCheck(form){

	if(!checkName(form.firstName.value)){		//check firstname: character only and minimum 2 characters
		alert("Please enter your first name, it should contain at least 2 characters");
		form.firstName.focus();
		return false;
	}
	if(!checkName(form.lastName.value)){		//check lastname: character only and minimum 2 characters
		alert("Please enter your last name, it should contain at least 2 characters");
		form.lastName.focus();
		return false;
	}

	if(form.message.value.length < 5){		//check message: minimum 20 characters
		alert("Please enter at least 5 characters in the message box.");
		form.message.focus();
		return false;
	}

	if( !checkEmail(form.email.value)){		//check email
		alert("Please enter a valid Email address.");
		form.email.focus();
		return false;
	}
	return true
}



function checkEmail(email){
	 
	 if (email == "") {        //cannot be empty
		return false;
	 }

	 var invalidChars = " /:,;";
	 for (i=0; i<invalidChars.length; i++) {
		var invalidchar = invalidChars.charAt(i)
		if (email.indexOf(invalidchar,0) > -1) {   //found invalid char
		return false
		}
	 }

	 var periodPos = email.indexOf(".",atPos)
	 if (periodPos == -1) {     	        	//must contain a . char
		return false
	 }
	 if (periodPos+2 > email.length) { return false; } //must have at least 2 chars after .

	 var atPos = email.indexOf("@",1)
	 if (atPos == -1) {			//cannot find @ char
		return false
	 }

	 if (email.indexOf("@",atPos+1) > -1) { //only need one @ char
		 return false
	 }	 

	 return true;   //pass all check
}




function  checkName(name) {
	for ( i = 0; i < name.length; i++) {
		if(!isNaN(name.charAt(i)))
		return false
	}
	if(name.length < 2){return false;}
	return true;
}

function  checkFName(name) {
	if(name.length < 2){return false;}
	return true;
}


$( document ).ready(function() {
	$("#submit").hover(function(){
			$(this).stop().animate({
				opacity:"0.8"
				}, 500);
			},function(){
				$(this).stop().animate({
				opacity:"1"
			}, 500);
	});



	
});

