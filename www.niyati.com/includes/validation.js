function clearText(field){
    if (field.defaultValue == field.value) field.value = '';
    else if (field.value == '') field.value = field.defaultValue;
}

function print_valid()
{

	if(document.getElementById("wd_name").value == "" || document.getElementById("wd_name").value == "Name")
	{
		alert("Please enter your name");
		document.getElementById("wd_name").focus();
		return false;
	}
	if(document.getElementById("wd_email").value == "" || document.getElementById("wd_email").value == "Email")
	{
		alert("Please enter your email ID");
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
		alert("Please enter your phone numbers");
		document.getElementById("wd_phone").focus();
		return false;
	}
	
	if(document.getElementById("wd_city").value == "" || document.getElementById("wd_city").value == "City")
	{
		alert("Please enter your city");
		document.getElementById("wd_city").focus();
		return false;
	}
	
	if(document.getElementById("sel_1").value == "")
	{
		alert("Please select service");
		document.getElementById("sel_1").focus();
		return false;
	}
	if(document.getElementById("wd_other").value == "" && document.getElementById("sel_1").value == "5" )
	{
		alert("Please enter your others column in services");
		document.getElementById("wd_other").focus();
		return false;
	}
	if(document.getElementById("wd_page").value == "")
	{
		alert("Please enter how many pages you need in specified column");
		document.getElementById("wd_page").focus();
		return false;
	}
	
	if(document.getElementById("wd_spec").value == "")
	{
		alert("Please enter your size requirement of design in specified column");
		document.getElementById("wd_spec").focus();
		return false;
	}
	
	if(document.getElementById("wd_qimg").value == "")
	{
		alert("Do you have quality Images or to buy online? please mention");
		document.getElementById("wd_qimg").focus();
		return false;
	}
	
	if(document.getElementById('pcont_y').checked == false && document.getElementById('pcont_n').checked == false)
	{
		alert("Please select will you be providing us all the content? column");
		document.getElementById("pcont_y").focus();
		return false;
	}
}


function discussvalid()
{
	
	
	if(document.getElementById("sel_1").value == "" || document.getElementById("sel_1").value == "Select")
	{
		alert("Please Select Your Package");
		document.getElementById("sel_1").focus();
		return false;
	}
	
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
	
	if(document.getElementById("msg").value == "" || document.getElementById("msg").value == "Message")
	{
		alert("Please Enter your message");
		document.getElementById("msg").focus();
		return false;
	}
}
function discussvalid_1()
{
	if(document.getElementById("wd_name1").value == "" || document.getElementById("wd_name1").value == "Name")
	{
		alert("Please Enter Your Name");
		document.getElementById("wd_name1").focus();
		return false;
	}
	if(document.getElementById("wd_email1").value == "" || document.getElementById("wd_email1").value == "Email")
	{
		alert("Please Enter Your Email ID");
		document.getElementById("wd_email1").focus();
		return false;
	}
	var re = /^[_\.0-9a-z-]+\@([0-9a-z][0-9a-z-]*\.)+([a-z]{2,4})+$/i
	if (!document.getElementById("wd_email1").value.match(re)) 
	{
		alert('Please enter a valid E-mail ID');
		document.getElementById("wd_email1").focus();
		return false;
	}
	if(document.getElementById("wd_phone1").value == "" || document.getElementById("wd_phone1").value == "Phone")
	{
		alert("Please Enter your Phone");
		document.getElementById("wd_phone1").focus();
		return false;
	}
	
	if(document.getElementById("wd_city1").value == "" || document.getElementById("wd_city1").value == "City")
	{
		alert("Please Enter your City");
		document.getElementById("wd_city1").focus();
		return false;
	}
}
function general_validation()
{
	if(document.getElementById("name").value == "" || document.getElementById("name").value == "Name")
	{
		alert("Please enter your name");
		document.getElementById("name").focus();
		return false;
	}
	if(document.getElementById("email").value == "" || document.getElementById("email").value == "Email")
	{
		alert("Please enter your Email ID");
		document.getElementById("email").focus();
		return false;
	}
	var re = /^[_\.0-9a-z-]+\@([0-9a-z][0-9a-z-]*\.)+([a-z]{2,4})+$/i
	if (!document.getElementById("email").value.match(re)) 
	{
		alert('Please enter a valid E-mail ID');
		document.getElementById("email").focus();
		return false;
	}
	if(document.getElementById("phone").value == "" || document.getElementById("phone").value == "Phone")
	{
		alert("Please enter your phone number");
		document.getElementById("phone").focus();
		return false;
	}
	if(document.getElementById("city").value == "" || document.getElementById("city").value == "City")
	{
		alert("Please enter your city");
		document.getElementById("city").focus();
		return false;
	}
	if(document.getElementById("service").value == "" )
	{
		alert("Please select the service");
		document.getElementById("service").focus();
		return false;
	}
	
	
	
	
	if(document.getElementById("mess").value == "" || document.getElementById("mess").value == "Message")
	{
		alert("Please enter your project details");
		document.getElementById("mess").focus();
		return false;
	}	
}
function contact_validation()
{
	if(document.getElementById("name").value == "" || document.getElementById("name").value == "Name")
	{
		alert("Please enter your name");
		document.getElementById("name").focus();
		return false;
	}
	if(document.getElementById("email").value == "" || document.getElementById("email").value == "Email")
	{
		alert("Please enter your Email ID");
		document.getElementById("email").focus();
		return false;
	}
	var re = /^[_\.0-9a-z-]+\@([0-9a-z][0-9a-z-]*\.)+([a-z]{2,4})+$/i
	if (!document.getElementById("email").value.match(re)) 
	{
		alert('Please enter a valid E-mail ID');
		document.getElementById("email").focus();
		return false;
	}
	if(document.getElementById("phone").value == "" || document.getElementById("phone").value == "Phone")
	{
		alert("Please enter your phone number");
		document.getElementById("phone").focus();
		return false;
	}
	
	if(document.getElementById("mess").value == "" || document.getElementById("mess").value == "Message")
	{
		alert("Please enter your message");
		document.getElementById("mess").focus();
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