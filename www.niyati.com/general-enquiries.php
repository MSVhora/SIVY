<?php include("header.php"); ?>
<div class="inner-container">
	<div class="inner-banner-sec career_inner_banner">
		<div class="container">
			<div class="row">
				<div class="col-sm-12 text-center">
					<h1 class="text-center">Enquiry</h1><br>
				</div>
			</div>
		</div>
    </div>
	
    <div class="enquiry_section">
		<div class="container">
			
			
			<div class="enq-form-wrap">
<div class="estimate-text-pad">
  To get a cost estimate for any of your project requirement, please submit the details through the form below.</div>
  
    <form name="form1" method="post" class="genral_enq_form" action="http://www.niyati.com/general-enquiries-action.php" onSubmit="return general_validation();">



<div class="row">
<div class="group col-sm-6">
    <input type="text" id="name" name="name" class="contact-field" onKeyPress="return alpha(event);"><span class="highlight"></span><span class="bar"></span>
    <label>Name</label>
  </div>
  <div class="hid">
        <input type="text" id="marks" name="marks" placeholder="marks" class="contact-field">
      </div>
<div class="group col-sm-6">
    <input type="text" id="email" name="email" class="contact-field"><span class="highlight"></span><span class="bar"></span>
    <label>Email</label>
  </div>
<div class="group col-sm-6">
    <input type="text" id="phone" name="phone" class="contact-field" onKeyPress="return phonenumcheck(event);"><span class="highlight"></span><span class="bar"></span>
    <label>Phone</label>
  </div>
<div class="group col-sm-6">
    <input type="text" id="city" name="city" class="contact-field" onKeyPress="return alpha(event);"><span class="highlight"></span><span class="bar"></span>
    <label>City</label>
  </div>
<div class="group col-sm-12">
    <input type="text" id="service" name="service" class="contact-field" onKeyPress="return alpha(event);"><span class="highlight"></span><span class="bar"></span>
    <label>What's your project about?</label>
  </div>
<div class="group col-sm-12">
    <textarea name="mess" rows="15" class="contact-txt-area-field" id="mess" placeholder=""></textarea><span class="highlight"></span><span class="bar"></span>
    <label>Please enter all details regarding your project.</label>
  </div>
  </div><br>
  <div class="row">
<div class="col-sm-6">
<div class="g-recaptcha" data-sitekey="6Lez1f8SAAAAAAsI20jQHWLNMz1MhMQMftn8sgh7"></div>
</div>
<div class="col-sm-6">
      <div class="mand_req"><span class="small-txt">(All the above fields are mandatory)</span></div></div></div><br>

      <input type="submit" class="submit" name="Submit" value="SUBMIT">
	  
  
  
  
    </form>
  </div>
</div>
			
			
		</div>
	</div>
<?php include("footer.php"); ?>