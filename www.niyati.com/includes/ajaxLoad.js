// JavaScript Document
var xmlHttptopfrm,xmlHttpprofrm,xmlHttppartfrm;

function getBaseURL() {
    var url = location.href;  // entire url including querystring - also: window.location.href;
    var baseURL = url.substring(0, url.indexOf('index.html', 14));


    if (baseURL.indexOf('http://localhost/') != -1) {
        // Base Url for localhost
        var url = location.href;  // window.location.href;
        var pathname = location.pathname;  // window.location.pathname;
        var index1 = url.indexOf(pathname);
        var index2 = url.indexOf("index.html", index1 + 1);
        var baseLocalUrl = url.substr(0, index2);

        return baseLocalUrl + "/";
    }
    else {
        // Root Url for domain name
        return baseURL + "/";
    }

}

var site_url1 = getBaseURL();

function topmenu(val)
{
	
	xmlHttptopfrm=GetXmlHttpObject()
	if (xmlHttptopfrm==null)
	{
	alert ("Browser does not support HTTP Request")
	return
	} 
	
	
	
		if(document.getElementById("fname").value == "")
		{
			alert("Please Enter Your Name");
			document.getElementById("fname").focus();
			return false;
		}
		if(document.getElementById("email").value == "")
		{
			alert("Please Enter Your Email ID");
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
		if(document.getElementById("top_country").value == "")
		{
			alert("Please select your country");
			document.getElementById("top_country").focus();
			return false;
		}
		if(document.getElementById("phone").value == "")
		{
			alert("Please Enter your phone");
			document.getElementById("phone").focus();
			return false;
		}
		if(document.getElementById("inquiry").value == "")
		{
			alert("Please Enter your inquiry");
			document.getElementById("inquiry").focus();
			return false;
		}
		
		var fna = document.getElementById("fname").value;
		var ema = document.getElementById("email").value;
		var tco = document.getElementById("top_country").value;
		var pho = document.getElementById("phone").value;
		var inq = document.getElementById("inquiry").value;
		var fac = document.getElementById("frm_comp").value;
         
		//alert(name1+email1);
		var url = site_url1+"query-action.php?fname="+fna+"&email="+ema+"&top_country="+tco+"&phone="+pho+"&inquiry="+inq+"&frm_comp="+fac;	
		
	
	alert(url);
	xmlHttptopfrm.onreadystatechange=stateChangedinvite
	xmlHttptopfrm.open("404-error.html",url,true)
	xmlHttptopfrm.send(null)
}

function stateChangedinvite() 
{ 
	//alert(xmlHttptopfrm.readyState);
	if (xmlHttptopfrm.readyState==4 || xmlHttptopfrm.readyState=="complete")
	{ 
	    //alert(xmlHttptopfrm.responseText);
		document.getElementById("topm").innerHTML = xmlHttptopfrm.responseText;
		
	}
		if (xmlHttptopfrm.readyState==1)
		{
		document.getElementById("topm").innerHTML = "<img src='404-error.html'><br />Processing your mail…";
		}

}

function topmenu_contact(val1)
{
	
	xmlHttpprofrm=GetXmlHttpObject()
	if (xmlHttpprofrm==null)
	{
	alert ("Browser does not support HTTP Request")
	return
	} 
	
	
	
		if(document.getElementById("fname_project").value == "")
		{
			alert("Please Enter Your Name");
			document.getElementById("fname_project").focus();
			return false;
		}
		if(document.getElementById("dd_country_project").value == "")
		{
			alert("Please select your country");
			document.getElementById("dd_country_project").focus();
			return false;
		}
		if(document.getElementById("email_project").value == "")
		{
			alert("Please Enter Your Email ID");
			document.getElementById("email_project").focus();
			return false;
		}
		var re = /^[_\.0-9a-z-]+\@([0-9a-z][0-9a-z-]*\.)+([a-z]{2,4})+$/i
		if (!document.getElementById("email_project").value.match(re)) 
		{
			alert('Please enter a valid E-mail ID');
			document.getElementById("email_project").focus();
			return false;
		}
		if(document.getElementById("phone_project").value == "")
		{
			alert("Please Enter your phone");
			document.getElementById("phone_project").focus();
			return false;
		}
		if(document.getElementById("inquiry_project").value == "")
		{
			alert("Please Enter your inquiry");
			document.getElementById("inquiry_project").focus();
			return false;
		}
		
		var fnap = document.getElementById("fname_project").value;
		var emap = document.getElementById("email_project").value;
		var tcop = document.getElementById("dd_country_project").value;
		var phop = document.getElementById("phone_project").value;
		var inqp = document.getElementById("inquiry_project").value;
		var facp = document.getElementById("frm_company").value;
         
		//alert(name1+email1);
		var url = site_url1+"project-action.php?fname_project="+fnap+"&email_project="+emap+"&dd_country_project="+tcop+"&phone_project="+phop+"&inquiry_project="+inqp+"&frm_company="+facp;	
		
	
	//alert(url);
	xmlHttpprofrm.onreadystatechange=stateChangedconproject
	xmlHttpprofrm.open("404-error.html",url,true)
	xmlHttpprofrm.send(null)
}

function stateChangedconproject() 
{ 
	//alert(xmlHttpprofrm.readyState);
	if (xmlHttpprofrm.readyState==4 || xmlHttpprofrm.readyState=="complete")
	{ 
	    //alert(xmlHttpprofrm.responseText);
		document.getElementById("topm1").innerHTML = xmlHttpprofrm.responseText;
		
	}
		if (xmlHttpprofrm.readyState==1)
		{
		document.getElementById("topm1").innerHTML = "<img src='404-error.html'><br />Processing your mail…";
		}

}

function topmenu_partner(val2)
{
	
	xmlHttppartfrm=GetXmlHttpObject()
	if (xmlHttppartfrm==null)
	{
	alert ("Browser does not support HTTP Request")
	return
	} 
	
	
	
		if(document.getElementById("part_name").value == "")
		{
			alert("Please Enter Your Name");
			document.getElementById("part_name").focus();
			return false;
		}
		if(document.getElementById("part_dd_country").value == "")
		{
			alert("Please select your country");
			document.getElementById("part_dd_country").focus();
			return false;
		}
		if(document.getElementById("part_email").value == "")
		{
			alert("Please Enter Your Email ID");
			document.getElementById("part_email").focus();
			return false;
		}
		var re = /^[_\.0-9a-z-]+\@([0-9a-z][0-9a-z-]*\.)+([a-z]{2,4})+$/i
		if (!document.getElementById("part_email").value.match(re)) 
		{
			alert('Please enter a valid E-mail ID');
			document.getElementById("part_email").focus();
			return false;
		}
		if(document.getElementById("part_phone").value == "")
		{
			alert("Please Enter your phone");
			document.getElementById("part_phone").focus();
			return false;
		}
		if(document.getElementById("part_inquiry").value == "")
		{
			alert("Please Enter your inquiry");
			document.getElementById("part_inquiry").focus();
			return false;
		}
		
		var fnapt = document.getElementById("part_name").value;
		var emapt = document.getElementById("part_email").value;
		var tcopt = document.getElementById("part_dd_country").value;
		var phopt = document.getElementById("part_phone").value;
		var inqpt = document.getElementById("part_inquiry").value;
		var webpt = document.getElementById("part_website").value;
		var induspt = document.getElementById("part_industry").value;
		var facpt = document.getElementById("part_company").value;
         
		//alert(name1+email1);
		var url = site_url1+"partner-action.php?part_name="+fnapt+"&part_email="+emapt+"&part_dd_country="+tcopt+"&part_phone="+phopt+"&part_inquiry="+inqpt+"&part_company="+facpt+"&part_website="+webpt+"&part_industry="+induspt;	
		
	
	//alert(url);
	xmlHttppartfrm.onreadystatechange=stateChangedconpartner
	xmlHttppartfrm.open("404-error.html",url,true)
	xmlHttppartfrm.send(null)
}

function stateChangedconpartner() 
{ 
	//alert(xmlHttppartfrm.readyState);
	if (xmlHttppartfrm.readyState==4 || xmlHttppartfrm.readyState=="complete")
	{ 
	    //alert(xmlHttppartfrm.responseText);
		document.getElementById("topm2").innerHTML = xmlHttppartfrm.responseText;
		
	}
		if (xmlHttppartfrm.readyState==1)
		{
		document.getElementById("topm2").innerHTML = "<img src='404-error.html'><br />Processing your mail…";
		}

}


function GetXmlHttpObject()
{ 
	var objXMLHttp=null
	if (window.XMLHttpRequest)
	{
	objXMLHttp=new XMLHttpRequest()
	}
	else if (window.ActiveXObject)
	{
	objXMLHttp=new ActiveXObject("Microsoft.XMLHTTP")
	}
	return objXMLHttp
} 

//***************************** To allow only Numbers ********************

function numcheck(event) 
 {
 if(navigator.appName != "Microsoft Internet Explorer" )
 {
  if( (event.which >= 48 && event.which <= 57) || (event.which == 8 )  || (event.which==0) || (event.which==95) )
	   {
	     return; 
		}
  else
   { 
  		return false;
  	}
 }
 else
 {
		// alert(event.keyCode);
 
    if( (event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode == 8 )|| (event.keyCode == 95 ) )
	   {
	     return; 
	}
  else { 
    return false;
  }
	}
 }
 /**********************To allow only characters*******************/
 function characterchecking(event)
{
  if(navigator.appName != "Microsoft Internet Explorer" )
 {
  if( (event.which >= 97 && event.which <= 122 ) 
   || (event.which >= 65 && event.which <= 90 ) || (event.which == 13 ) || (event.which == 95 )
   || (event.which == 8 ) || (event.which==0))
    {
	     return ; 
	}
  else {
    return false;
  }
 }
 else
 {
  if( (event.keyCode >= 97 && event.keyCode <= 122 ) 
   || (event.keyCode >= 65 && event.keyCode <= 90 ) || (event.keyCode == 13 ) || (event.keyCode == 95 )
   || (event.keyCode == 8 ) || (event.keyCode==32))
    {
	     return ; 
	}
  else {
    return false;
  }
  }
}
//***********************************
	
 function charactercheck(event)
{
  if(navigator.appName != "Microsoft Internet Explorer" )
 {
  if( (event.which >= 97 && event.which <= 122 ) || (event.which == 32) || (event.which == 39 )
   || (event.which >= 65 && event.which <= 90 ) || (event.which == 13 ) || (event.which == 95 )
   || (event.which == 8 ) || (event.which==0))
    {
	     return ; 
	}
  else {
    return false;
  }
 }
 else
 {
  if( (event.keyCode >= 97 && event.keyCode <= 122 ) || (event.keyCode == 32) || (event.keyCode == 39 )
   || (event.keyCode >= 65 && event.keyCode <= 90 ) || (event.keyCode == 13 ) || (event.keyCode == 95 )
   || (event.keyCode == 8 ) )
    {
	     return ; 
	}
  else {
    return false;
  }
  }
}
//*************************************************************************************************************
function clearText(field){
    if (field.defaultValue == field.value) field.value = '';
    else if (field.value == '') field.value = field.defaultValue;
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
  if( (event.which >= 48 && event.which <= 57) || (event.which == 8 )  || (event.which==0) || (event.which==95) || (event.which==43) || (event.which==45) || (event.which==32))
	   {
	     return; 
		}
  else
   { 
  		return false;
  	}
 }
 else
 {
		 //alert(event.keyCode);
 
    if((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode == 8)|| (event.keyCode == 95) || (event.keyCode == 43) || (event.keyCode == 45) || (event.keyCode == 32))
	   {
	     return; 
	}
  else { 
    return false;
  }
	}
 }
 
function feedbackvalid()
{
	if(document.getElementById("fb_email").value == "" || document.getElementById("fb_email").value == "Email*")
	{
		alert("Please Enter Your Email ID");
		document.getElementById("fb_email").focus();
		return false;
	}
	var re = /^[_\.0-9a-z-]+\@([0-9a-z][0-9a-z-]*\.)+([a-z]{2,4})+$/i
	if (!document.getElementById("fb_email").value.match(re)) 
	{
		alert('Please enter a valid E-mail ID');
		document.getElementById("fb_email").focus();
		return false;
	}
	
	if(document.getElementById("fb_comm").value == "" || document.getElementById("fb_comm").value == "Comments*")
	{
		alert("Please Enter your Comments");
		document.getElementById("fb_comm").focus();
		return false;
	}
	
	
	

}
function website_valid()
{	

   	if(document.getElementById("web_name").value == "" || document.getElementById("web_name").value == "Name")
	{
		alert("Please Enter Your Name");
		document.getElementById("web_name").focus();
		return false;
	}
	
	if(document.getElementById("web_email").value == "" || document.getElementById("web_email").value == "Email")
	{
		alert("Please Enter Your Email ID");
		document.getElementById("web_email").focus();
		return false;
	}
	var re = /^[_\.0-9a-z-]+\@([0-9a-z][0-9a-z-]*\.)+([a-z]{2,4})+$/i
	if (!document.getElementById("web_email").value.match(re)) 
	{
		alert('Please enter a valid E-mail ID');
		document.getElementById("web_email").focus();
		return false;
	}
	if(document.getElementById("web_phone").value == "" || document.getElementById("web_phone").value == "Phone")
	{
		alert("Please Enter your Phone");
		document.getElementById("web_phone").focus();
		return false;
	}
	
	if(document.getElementById("web_city").value == "" || document.getElementById("web_city").value == "City")
	{
		alert("Please Enter your City");
		document.getElementById("web_city").focus();
		return false;
	}
	if(document.getElementById("web_requirement").value == "")
	{
		alert("Please Enter your Requirement");
		document.getElementById("web_requirement").focus();
		return false;
	}
	if(document.getElementById("g-recaptcha-response").value == "")
	{
		alert("Please Enter your Captcha");
		document.getElementById("g-recaptcha-response").focus();
		return false;
	}
	
	

}
