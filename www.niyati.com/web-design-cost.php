<?php include("header.php"); ?>
 <div class="inner-container">
    <div class="webdesign-cost-sec">
      <div class="container">
        <div class="row">
          <h1>Web Design Cost Estimate</h1>
          <br>
          <div class="font-28">We are excited that you decided to contact us for your website design cost estimation.</div>
        </div>
      </div>
    </div>
  </div>
  <div class="logo-form-sec">
    <div class="container">
      <div class="row">
        <div class="estimate-text-pad">If you are requesting for a web design quote online, please provide us as much details as you can, so that we can get back with an exact quote.<br>
<br>
 </div>
        <ul class="nav nav-tabs">
          <li class="active"><a data-toggle="tab" href="#tab_email"><span class="icon-tab-mail"></span>Email me a cost estimate</a></li>
          <li><a href="web-design-cost-skype.html"><span class="icon-tab-skype"></span>Arrange a Skype call</a></li>
        </ul>
        <div class="cost-estimate-pad">
          <div class="tab-content">
            <div id="tab_email" class="tab-pane fade in active">
              <form name="frmcostest" method="post" action="http://www.niyati.com/website-ct-action.php?act=est"  onSubmit="return estcostvalid();" >
                <br>
                <div class="row">
                  <div class="col-sm-6">
                    <input name="frm_name" class="icon-form-name" type=text id="frm_name" placeholder="Your Name" onKeyPress="return alpha(event);"/>
                    <div class="hide-row">
                      <input type="text" id="state" name="state" placeholder="State" class="contact-field">
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <input name="frm_email" type="text" class="icon-form-email" id="frm_email" placeholder="Email"/>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <input name="frm_phone" type="text" class="icon-form-phone" id="frm_phone"  placeholder="Phone" onKeyPress="return phonenumcheck(event);" />
                  </div>
                  <div class="col-sm-6">
                    <input name="frm_city" type="text" class="icon-form-loc" id="frm_city"  placeholder="City" onKeyPress="return alpha(event);"/>
                    <br>
                    <span class="small pull-right">(All the above fields are mandatory)</span> </div>
                </div>
                <div>
                <hr><br>
                  <h4>Your website project details</h4>
                </div>
                <br>
                <div class="row col-sm-12"> Do you have a website currently? If so, please provide us the URL.<br>
                  <input name="ex_website" type="text" id="ex_website" value="http://"  />
                  <br>
                </div>
                <div class="row col-sm-12">Please provide complete details about your requirement.<br>
                  <textarea name="cs_needs" rows="3" id="cs_needs"></textarea>
                  <br>
                  <br>
                  <h4>Rationale for new website:</h4>
                  <br>
                  Who are your main competitors or companies in the same line of business as yours? <br>
                  <textarea name="needs" id="needs"></textarea>
                  <br>
                  <br>
                  What do you want to achieve through your website? <br>
                                    <textarea name="achieve" id="achieve"></textarea>
                  <br>
                  <br>
                  Approximately how many pages do you propose to have on the site? <br>
                  <input name="approximately" type=text  id="approximately"  />
                  <br>
                  <br>
                  Will you provide us all the text content?<br>
                  <input name="provide_content" type=text id="provide_content"  />
                  <br>
                  <br>

                  Do you require a Content Management System (CMS) developed? <br>
                  CMS helps in managing the website without any technical knowledge.<br>
                  <input name="cms_helps" type=text id="cms_helps"  />
                  <br>
                  <br>

                  If your website intends to sell products online, please provide us complete details of the products, categories etc <br>
                  <textarea name="website_intends" id="website_intends"></textarea>
                  <br>
                  <br>
                  Do you want us to optimize your website to rank higher on search engines for specific keywords?<br>
                  <textarea name="indicative_keywords" id="indicative_keywords"></textarea>
                  <br>
                  <br>
                  Do you have a completion date in mind? <br>
                  <input name="date1" type="text" id="date1" />
             
                  <br>
                  <br>
                  <br>
                  Do you require our other creative services like Logo Design, Brochure Design etc? <br>
                  <textarea name="creative_services" id="creative_services"></textarea>
                  <br>
                  <br>
                  If there are any other features which you want to implement on the website, please list them below. <br>
                  <textarea name="other_features" id="other_features"></textarea>
                  <br><br>

                  <div class="g-recaptcha" data-sitekey="6Lez1f8SAAAAAAsI20jQHWLNMz1MhMQMftn8sgh7"></div><br>

                  <div class="row hide-row">
                    <input name="web_est_comment" type="text" id="web_est_comment" onKeyPress="return numcheck(event);" />
                  </div>
                </div>
                <button class="btn-submit-wdc" type="submit"  name="Submit" id="Submit" value="Submit" >Submit</button>
                <input name="txt_sub" type="hidden" id="txt_sub" value="Website Design" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 <?php include("footer.php"); ?>