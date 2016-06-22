<?php include("header.php"); ?>
 <div class="inner-container">
    <div class="webdesign-cost-sec">
      <div class="container">
        <div class="row">
          <h1>Mobile App Cost Estimate</h1>
          <br>
          <div class="font-28">We are excited that you decided to contact us for your app development pricing.</div>
        </div>
      </div>
    </div>
  </div>
  <div class="logo-form-sec">
    <div class="container">
      <div class="row">
        <div class="estimate-text-pad">Cost of developing an app depends on various factors like the functionalities involved in the app, technologies used, platform the app is developed on etc. At Niyati, we specialize in developing apps on both iOS and Android platforms. <br> <br> We encourage you to provide us as much details as you can on your mobile app, so that we can get back with an exact estimate. Please note that sending us a one-liner mail or providing link to an existing app doesn’t help us much in arriving at a price for your app.<br>
<br>
 </div>
        <ul class="nav nav-tabs">
          <li class="active"><a data-toggle="tab" href="#tab_email"><span class="icon-tab-mail"></span>Email me a cost estimate</a></li>
          <li><a href="mobile-app-cost-skype.html"><span class="icon-tab-skype"></span>Arrange a Skype call</a></li>
        </ul>
        <div class="cost-estimate-pad">
          <div class="mobile-app-cost">
            
             <div class="tab-content">
            <div id="tab_email" class="tab-pane fade in active">
              <form name="frmdiscuss" method="post" action="http://www.niyati.com/mobile-ct-action.php?act=diss" enctype="multipart/form-data" onSubmit="return mob_cost_valid();" >
                <br>
                
                <div class="row">
                  <div class="col-sm-6">
                    <input name="wd_name" class="icon-form-name"  type="text" id="wd_name" onKeyPress="return charactercheck(event);" placeholder="Name"/>
                  </div>
                  <div class="col-sm-6">
                    <input name="wd_email" class="icon-form-email" type="text" id="wd_email" placeholder="Email"/>
                  </div>
                </div>
                
                <div class="row">
                  <div class="col-sm-6">
                    <input name="wd_phone" class="icon-form-phone"  type="text" id="wd_phone" onKeyPress="return phonenumcheck(event);" placeholder="Phone"/>
                  </div>
                  <div class="col-sm-6">
                    <input name="wd_city" class="icon-form-loc" type="text" id="wd_city" onKeyPress="return charactercheck(event);" placeholder="City"/>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12"> <br> <strong>Select the services you are looking for:</strong> </div>
                </div>

                <div class="row">
                  	<div class="col-sm-6">
	                  <div class="mobile-app-checkbox">
                            <div class="checkbox"><input id="chk1" type="checkbox" value="Mobile App Strategy" name="sel_services[]"><label for="chk1"> Mobile App Strategy</label> </div>
                            <div class="checkbox"><input id="chk2" type="checkbox" value="UI / UX Design" name="sel_services[]"><label for="chk2">UI / UX Design</label>  </div>
                            <div class="checkbox"><input id="chk3" type="checkbox" value="Native App Development" name="sel_services[]"><label for="chk3"> Native App Development</label> </div>
                            <div class="checkbox"><input id="chk4" type="checkbox" value="Hybrid App Development" name="sel_services[]"><label for="chk4"> Hybrid App Development</label></div>
						</div>
					</div>
                    
                    <div class="col-sm-6">
	                    <div class="mobile-app-checkbox">
                            <div class="checkbox"><input id="chk5" type="checkbox" value="App Optimization & Discovery" name="sel_services[]"><label for="chk5">App Optimization & Discovery</label> </div>
                            <div class="checkbox"><input id="chk6" type="checkbox" value="App Testing and Upgrades" name="sel_services[]"><label for="chk6"> App Testing and Upgrades</label> </div>
                            <div class="checkbox"><input id="chk7" type="checkbox" value="Integration with CRM / ERP / SAP" name="sel_services[]"><label for="chk7"> Integration with CRM / ERP / SAP</label> </div>
                            <div class="checkbox"><input id="chk8" type="checkbox" value="Mobile Analytics" name="sel_services[]"><label for="chk8">Mobile Analytics</label> </div>
                        </div>
					</div>
                </div>


<!--                <div class="row">
                  <div class="col-sm-6">
                    <select name="wd_budget" id="wd_budget" class="field-bg-wdc">
                        <option value="">Select budget range: </option>
                        <option value="Rs.6.5 - 10 lakhs">Rs.6.5 - 10 lakhs &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;US$ 10K – 15K</option>
                        <option value="Rs.10 - 15 lakhs">Rs.10 - 15 lakhs &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;US$ 15K – 22K</option>
                        <option value="Rs.15 - 30 lakhs">Rs.15 - 30 lakhs &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;US$ 22K – 45K</option>
                        <option value="Above Rs.30 lakhs">Above Rs.30 lakhs &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Above US$ 45K</option>
                    </select>
                  </div>
                </div>
-->
                
                

                <div class="row">
                  <div class="col-sm-12">
                    <textarea name="cd_msg" rows="10" id="cd_msg" placeholder="Please provide complete details of your mobile app"></textarea>
                  </div>
                </div>
                <br>
               
                <div class="g-recaptcha" data-sitekey="6Lez1f8SAAAAAAsI20jQHWLNMz1MhMQMftn8sgh7"></div><br>

                <div class="row">
                  <div class="col-sm-6">
                    <button class="btn-submit-wdc" type="submit"  name="Submit" id="Submit" value="Submit" >Submit</button>
                    <input name="txt_sub" type="hidden" id="txt_sub" value="Mobile App Development" />
                  </div>
                  <div class="col-sm-6"><span class="small pull-right"> (All fields are mandatory)</span></div>
                  <br>
                </div>
              </form>
            </div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <?php include("footer.php"); ?>