function logovalid()
{
	
	
	/*if(document.getElementById("sel_1").value == "0" || document.getElementById("sel_1").value == "Select")
	{
		alert("Please Select Your Package");
		document.getElementById("sel_1").focus();
		return false;
	}*/
	
	if(document.getElementById("ld_name").value == "" || document.getElementById("ld_name").value == "Name")
	{
		alert("Please Enter Your Name");
		document.getElementById("ld_name").focus();
		return false;
	}
	if(document.getElementById("ld_email").value == "" || document.getElementById("ld_email").value == "Email")
	{
		alert("Please Enter Your Email ID");
		document.getElementById("ld_email").focus();
		return false;
	}
	var re = /^[_\.0-9a-z-]+\@([0-9a-z][0-9a-z-]*\.)+([a-z]{2,4})+$/i
	if (!document.getElementById("ld_email").value.match(re)) 
	{
		alert('Please enter a valid E-mail ID');
		document.getElementById("ld_email").focus();
		return false;
	}
	if(document.getElementById("ld_phone").value == "" || document.getElementById("ld_phone").value == "Phone")
	{
		alert("Please Enter your Phone");
		document.getElementById("ld_phone").focus();
		return false;
	}
	
	if(document.getElementById("msg").value == "" || document.getElementById("msg").value == "Message")
	{
		alert("Please Enter your message");
		document.getElementById("msg").focus();
		return false;
	}
}
function discussvalid()
{
	if(document.getElementById("wd_name").value == "" || document.getElementById("wd_name").value == "Name")
	{
		alert("Please Enter Your Name");
		document.getElementById("wd_name").focus();
		return false;
	}
	
	if(document.getElementById("wd_email").value == "" || document.getElementById("wd_email").value == "Email")
	{
		alert("Please Enter Your Email ID");
		document.getElementById("wd_email").focus();
		return false;
	}
	var re = /^[_\.0-9a-z-]+\@([0-9a-z][0-9a-z-]*\.)+([a-z]{2,4})+$/i
	if (!document.getElementById("wd_email").value.match(re)) 
	{
		alert('Please enter a valid E-mail ID');
		document.getElementById("wd_email").focus();
		return false;
	}
	if(document.getElementById("wd_phone").value == "" || document.getElementById("wd_phone").value == "Phone")
	{
		alert("Please Enter your Phone");
		document.getElementById("wd_phone").focus();
		return false;
	}
	
	if(document.getElementById("wd_city").value == "" || document.getElementById("wd_city").value == "City")
	{
		alert("Please Enter your City");
		document.getElementById("wd_city").focus();
		return false;
	}
	if(document.getElementById("g-recaptcha-response").value == "")
	{
		alert("Please Enter your Captcha");
		document.getElementById("g-recaptcha-response").focus();
		return false;
	}
	

}


function estcostvalid()
{
	if(document.getElementById("frm_name").value == "" || document.getElementById("frm_name").value == "Name")
	{
		alert("Please Enter Your Name");
		document.getElementById("frm_name").focus();
		return false;
	}
	
	if(document.getElementById("frm_email").value == "" || document.getElementById("frm_email").value == "Email")
	{
		alert("Please Enter Your Email ID");
		document.getElementById("frm_email").focus();
		return false;
	}
	var re = /^[_\.0-9a-z-]+\@([0-9a-z][0-9a-z-]*\.)+([a-z]{2,4})+$/i
	if (!document.getElementById("frm_email").value.match(re)) 
	{
		alert('Please enter a valid E-mail ID');
		document.getElementById("frm_email").focus();
		return false;
	}
	if(document.getElementById("frm_phone").value == "" || document.getElementById("frm_phone").value == "Phone")
	{
		alert("Please Enter your Phone");
		document.getElementById("frm_phone").focus();
		return false;
	}
	
	if(document.getElementById("frm_city").value == "" || document.getElementById("frm_city").value == "City")
	{
		alert("Please Enter your City");
		document.getElementById("frm_city").focus();
		return false;
	}
	if(document.getElementById("g-recaptcha-response").value == "")
	{
		alert("Please Enter your Captcha");
		document.getElementById("g-recaptcha-response").focus();
		return false;
	}


}

function phonenumcheck(event)
{
	
  if(navigator.appName != "Microsoft Internet Explorer" )
 {
	 //alert(event.which);
    if( (event.which >= 48 && event.which <= 57 ) || (event.which == 32 )|| (event.which == 40 )|| (event.which == 41 ) || (event.which == 44 ) || (event.which==0)|| (event.which==8) || (event.which==45))
    {
	     return ; 
	}
  else {
	  
    return false;
  }
 }
 else
 {
  
  if( (event.keyCode >= 48 && event.keyCode <= 57 )  || (event.keyCode == 44 ) || (event.keyCode == 41 )|| (event.keyCode == 40 )|| (event.keyCode == 32 ) || (event.keyCode == 0 )|| (event.which==8)|| (event.which==45))
    {
	     return ; 
	}
  else {
    return false;
  }
  }
}
function alpha(event)
{
	
		//alert(event.which);
	
  if(navigator.appName != "Microsoft Internet Explorer" )
 {
    if( (event.which >= 97 && event.which <= 122 ) || (event.which >= 65 && event.which <= 90 ) || (event.which == 45 ) || (event.which==0)|| (event.which==8) || (event.which==32) || (event.which==39))
    {
	     return ; 
	}
  else {
	  
    return false;
  }
 }
 else
 {
  
  if( (event.keyCode >= 97 && event.keyCode <= 122 )  || (event.keyCode >= 65 && event.keyCode <= 90 ) || (event.keyCode == 45 ) || (event.keyCode == 0 )|| (event.keyCode==8)|| (event.keyCode==32) || (event.keyCode==39))
    {
	     return ; 
	}
  else {
    return false;
  }
  }
}

/* Mobile cost validate */
function mob_cost_valid()
{
	if(document.getElementById("wd_name").value == "" || document.getElementById("wd_name").value == "Name *")
	{
		alert("Please Enter Your Name");
		document.getElementById("wd_name").focus();
		return false;
	}
	
	if(document.getElementById("wd_email").value == "" || document.getElementById("wd_email").value == "Email *")
	{
		alert("Please Enter Your Email ID");
		document.getElementById("wd_email").focus();
		return false;
	}
	var re = /^[_\.0-9a-z-]+\@([0-9a-z][0-9a-z-]*\.)+([a-z]{2,4})+$/i
	if (!document.getElementById("wd_email").value.match(re)) 
	{
		alert('Please enter a valid E-mail ID');
		document.getElementById("wd_email").focus();
		return false;
	}
	if(document.getElementById("wd_phone").value == "" || document.getElementById("wd_phone").value == "Phone *")
	{
		alert("Please Enter your Phone");
		document.getElementById("wd_phone").focus();
		return false;
	}
	
	if(document.getElementById("wd_city").value == "" || document.getElementById("wd_city").value == "City *")
	{
		alert("Please Enter your City");
		document.getElementById("wd_city").focus();
		return false;
	}
	if(!document.getElementById("chk1").checked && !document.getElementById("chk2").checked  && !document.getElementById("chk3").checked  && !document.getElementById("chk4").checked && !document.getElementById("chk5").checked && !document.getElementById("chk6").checked && !document.getElementById("chk7").checked && !document.getElementById("chk8").checked)
	{
		alert("Please check the services you are looking for");
		return false;
	}
	if(document.getElementById("cd_msg").value == "")
	{
		alert("Please provide complete details of your mobile app");
		document.getElementById("cd_msg").focus();
		return false;
	}
	
 
	if(document.getElementById("g-recaptcha-response").value == "")
	{
		alert("Please Enter your Captcha");
		document.getElementById("g-recaptcha-response").focus();
		return false;
	}
}
/* Mobile cost validate end */ 