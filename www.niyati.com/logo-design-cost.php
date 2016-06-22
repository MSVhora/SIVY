<?php include("header.php"); ?>
<div class="inner-container">
    <div class="logo-price-sec">
      <div class="container">
        <div class="row">
          <h1>Logo Design Cost Estimate</h1>
          <br>
          <div class="font-28">We are excited that you decided to contact us for your logo design cost estimation.</div>
        </div>
      </div>
    </div>
  </div>
  <!--<div class="recent-logo-sec bg-white">
    <div class="container">
      <div class="row">
        <div class="logo-price-main">
          <div class="col-sm-4">
            <div class="logo-pricing-in">
<div class="logo-pricing-grey-tile"><span class="price-head">Basic</span><br>
                <br>
                Ideal for startup companies<br>
                and individuals<br>
                <div class="price-head2">15,000</div>
                US $450<br>
                <br>
                <br>
                <a href="#logo-form" onClick="test(1);" class="get-started">Get Started</a> </div>
              <div class="brdr-text">3 custom designs</div>
              <div class="brdr-text">1 round of  revisions </div>
              <div class="tick-brdr-text">
                <div class="grn-tick">Jpeg, Tiff, EPS formats</div>
              </div>
              <div class="involver-text">Graphic designer </div>
              <div class="brdr-text">2 business days<br>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="logo-pricing-in">
<div class="logo-pricing-grey-tile-mid"><span class="price-head">Medium</span><br>
                <br>
                Ideal for medium sized <br>
                companies<br>
                <div class="price-head2">30,000</div>
                USD 700</span><br>
                <br>
                <br>
                <a href="#logo-form" onClick="test(2);" class="get-started">Get Started</a></div>
              <div class="brdr-text">5 custom designs</div>
              <div class="brdr-text">2 round of  revisions</div>
              <div class="tick-brdr-text">
                <div class="grn-tick">Jpeg, Tiff, EPS formats</div>
                <div class="grn-tick">Business card and Letterhead templates</div>
              </div>
              <div class="involver-text">Graphic designer and<br>
                Creative director </div>
              <div class="brdr-text">3 business days<br>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="logo-pricing-in">
<div class="logo-pricing-grey-tile"><span class="price-head">Complete</span><br>
                <br>
                Ideal for established corporate <br>
                companies<br>
                <div class="price-head2">45,000</div>
                USD 1200<br>
                <br>
                <br>
                <a href="#logo-form" onClick="test(3);" class="get-started">Get Started</a></div>
              <div class="brdr-text">5 custom designs</div>
              <div class="brdr-text">4 round of  revisions</div>
              <div class="tick-brdr-text">
                <div class="grn-tick">Jpeg, Tiff, EPS formats</div>
                <div class="grn-tick">Business card  and letterhead templates</div>
                <div class="grn-tick">PowerPoint Templates</div>
                <div class="grn-tick">Word Templates</div>
              </div>
              <div class="involver-text">Graphic designer, <br>
                Creative director and<br>
                Senior Art Director</div>
              <div class="brdr-text">7 business days<br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>--><a name="logo-form"></a>
  <div class="logo-form-sec">
    <div class="container">
      <div class="row">Please provide us your details so that we can mail you our logo design price packages.
                <div class="logo-form-sec-pad" id='get_logo'>
          <form name="frmdiscuss" method="post" action="http://www.niyati.com/logo_pricing_action.php" class="genral_enq_form"  onSubmit="return logovalid();" >
            <div class="row"><br>
              <br>
              <!--<div class="col-sm-6">
                <select id="sel_1" name="sel_1" class="field-bg-drop">
                  <option value="0" selected="selected">Select</option>
                  <option value="1">Starter Package - $450</option>
                  <option value="2">Medium Package - $700</option>
                  <option value="3">Corporate Package - $1200</option>
                </select>
              </div>-->
              <div class="group col-sm-6">
                <input name="ld_name" class="contact-field" type="text" id="ld_name" onKeyPress="return alpha(event);"/>
                <span class="highlight"></span><span class="bar"></span>
                <label>Name</label>
              </div>
              <div class="group col-sm-6">
                <input name="ld_email" class="contact-field" type="text" id="ld_email"/>
                <span class="highlight"></span><span class="bar"></span>
                <label>Email</label>
              </div>
            </div>
            <div class="row">
              <div class="group col-sm-6">
                <input name="ld_phone" class="contact-field" type="text" id="ld_phone" onKeyPress="return phonenumcheck(event);"/>
                <span class="highlight"></span><span class="bar"></span>
                <label>Phone</label>
              </div>
              <div class="group col-sm-6">
                <input name="ld_city" class="contact-field" type="text" id="ld_city"/>
                <span class="highlight"></span><span class="bar"></span>
                <label>City</label>
              </div>
            </div>
            <!--  <div class="price-lable">
                    <input name="ld_city" type="text" class="field-logo-price" id="ld_city" placeholder="City" onKeyPress="return charactercheck(event);"/>
                  </div>-->
            <div class="hide-row">
              <input name="frm_comment"  type="text" id="frm_comment"  onFocus="clearText(this)" onBlur="clearText(this)" onKeyPress="return numcheck(event);" />
            </div>
            <div class="row">
              <div class="group col-sm-12">
                <textarea name="msg" rows="4" class="contact-txt-area-field" id="msg" ></textarea>
                <span class="highlight"></span><span class="bar"></span>
                <label>Message</label>
              </div>
            </div>
            <br>
            <div class="row">
            <div class="col-sm-6">
                      <div class="g-recaptcha" data-sitekey="6Lez1f8SAAAAAAsI20jQHWLNMz1MhMQMftn8sgh7"></div>
                    </div>
             
              <div class="col-sm-6">
                <div class="pull-right"><small> (All fields are mandatory)</small></div>
              </div>
              </div><br>
               <div class="row"><div class="col-sm-6">
                <input type="submit" name="Submit" id="Submit" value="Submit">
              </div></div>
            </div>
          </form>
        </div>
              </div>
    </div>
  </div>
  <div class="recent-logo-sec">
    <div class="container">
      <div class="row">
        <h1>Some of our recent logo design works</h1>
        <div class="recent-logo-pad">
          <div class="recent-logo col-xm-2 nopadding"><img src="images/logo-design-connect.gif" alt="" width="420" height="327" class="img-responsive"></div>
          <div class="recent-logo col-xm-2 nopadding"><img src="images/logo-design-asianart.gif" alt="" width="420" height="327" class="img-responsive"></div>
          <div class="recent-logo col-xm-2 nopadding"><img src="images/logo-design-graviton.gif" alt="" width="420" height="327" class="img-responsive"></div>
          <div class="recent-logo col-xm-2 nopadding"><img src="images/logo-design-carefinder.gif" alt="" width="420" height="327" class="img-responsive"></div>
          <div class="recent-logo col-xm-2 nopadding"><img src="images/logo-design-lumiere.gif" alt="" width="420" height="327" class="img-responsive"></div>
          <div class="recent-logo col-xm-2 nopadding"><img src="images/logo-design-face.gif" alt="" width="420" height="327" class="img-responsive"></div>
        </div>
      </div>
      <div class="row">
        <h1><a href="logo-portfolio.html">View Logo Portfolio</a></h1>
      </div>
    </div>
  </div>
  <?php include("footer.php"); ?>