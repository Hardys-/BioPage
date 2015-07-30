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
		console.log("run this");	// Get the form.
	 
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
		console.log("run in check");
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


	    // Get the form.



function loadXMLDoc()
{
var xmlhttp;
var txt,x,xx,i;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    txt="<p class=\"mestitle\"><br/>Messages to Hao:</p><br/>";
    x=xmlhttp.responseXML.documentElement.getElementsByTagName("record");
    for (i=0;i<x.length;i++)
      {
      txt=txt+"<strong style=\"background-color:#f39951;padding:1px 6px; border:0px; border-radius:2px;color:#ffffff; font-family:Calibri; \">";
      xx=x[i].getElementsByTagName("firstname");
        {
        try
          {
          txt=txt + xx[0].firstChild.nodeValue + ": </strong><br/><div style=\"list-style-type: none;margin-top:10px;margin-left:25px; color:#666666; font-family:Calibri; width:650px \">";
          }
        catch (er)
          {
          txt=txt + "?</strong><br/><div style=\"list-style-type: none;margin-top:10px;margin-left:25px; color:#666666; font-family:Calibri; width:650px \">";
          }
        }
      xx=x[i].getElementsByTagName("message");
        {
        try
          {
          txt=txt +  xx[0].firstChild.nodeValue + "</div><br/><br/>";
          }
        catch (er)
          {
          txt=txt +  "? </div><br/><br/>";
          }
        }
      $("header").css("height",$("header").height()+120+'px');
      }
    document.getElementById('myDiv').innerHTML=txt;
    }
  }
xmlhttp.open("GET","message.xml",true);
xmlhttp.send();
}






$( document ).ready(function() {
	if($("header").height() < 400){$("header").css("height",520+'px');}
	$("#submit").hover(function(){
			$(this).stop().animate({
				opacity:"0.8"
				}, 500);
			},function(){
				$(this).stop().animate({
				opacity:"1"
			}, 500);
	});



	$("#submit").click(function(){
		    var form = $('#contact-form');
		    console.log("run in click()");
		    // Get the messages div.
		    var formMessages = $('#form-messages');

		    // TODO: The rest of the code will go here...
		    // Set up an event listener for the contact form.
		    $(form).submit(function(event) {
		    // Stop the browser from submitting the form.
		    event.preventDefault();
		   
		    });

			// Serialize the form data.
			var formData = $(form).serialize();
		   // Submit the form using AJAX.
	       	    $.ajax({
		    type: 'POST',
		    url: $(form).attr('action'),
		    data: formData
		    }).done(function(response) {
		    // Make sure that the formMessages div has the 'success' class.
		    $(formMessages).removeClass('error');
		    $(formMessages).addClass('success');

		    // Set the message text.
		    $(formMessages).html(response);
		    $("div.main").fadeOut('swing',function(){$("div.main").css("display","none");})
		    // Clear the form.
		    $('#firstName').val('');
		    $('#lastName').val('');
		    $('#email').val('');
		    $('#message').val('');
		    loadXMLDoc();
		    }).fail(function(data) {
		    // Make sure that the formMessages div has the 'error' class.
		    $(formMessages).removeClass('success');
		    $(formMessages).addClass('error');
		    // Set the message text.
		    if (data.responseText !== '') {
			$(formMessages).append(data);
		
		    } else {
			   $(formMessages).text('Oops! An error occured and your message could not be sent.');
		    }
		    });
	
	
	});
});



