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
          <li><a href="web-design-cost.html"><span class="icon-tab-mail"></span>Email me a cost estimate</a></li>
          <li class="active"><a data-toggle="tab" href="#tab_skype" href="web-design-cost.html"><span class="icon-tab-skype"></span>Arrange a Skype call</a></li>
        </ul>
        <div class="cost-estimate-pad">
          <div class="tab-content">
            <div id="tab_skype" class="tab-pane fade in active">
              <form name="frmdiscuss" method="post" action="http://www.niyati.com/website-ct-action.php?act=diss"  onSubmit="return discussvalid();" >
                <br>
                <div class="row">
                  <div class="col-sm-6">
                    <input name="wd_name" class="icon-form-name" type="text" id="wd_name" onKeyPress="return charactercheck(event);" placeholder="Name"/>
                  </div>
                  <div class="col-sm-6">
                    <input name="wd_email" class="icon-form-email" type="text" id="wd_email" placeholder="Email"/>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <input name="wd_phone" class="icon-form-phone" type="text" id="wd_phone" onKeyPress="return phonenumcheck(event);" placeholder="Phone"/>
                  </div>
                  <div class="col-sm-6">
                    <input name="wd_city" class="icon-form-loc" type="text" id="wd_city" onKeyPress="return charactercheck(event);" placeholder="City"/>
                  </div>
                </div>
                <div class="row hide-row">
                  <input name="website_comments" type="text" id="website_comments" onKeyPress="return numcheck(event);" />
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <input name="skypeid" type="text" id="skypeid" placeholder="Your Skype ID"/>
                  </div>
                  <div class="col-sm-6">
                    <input name="preferred_time" type="text" id="preferred_time" placeholder="Preferred time"/>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12">
                    <textarea name="cd_msg" rows="10" id="cd_msg" placeholder="Message"></textarea>
                  </div>
                </div><br>
                <div class="row">
                  <div class="col-sm-6">
                <div class="g-recaptcha" data-sitekey="6Lez1f8SAAAAAAsI20jQHWLNMz1MhMQMftn8sgh7"></div></div>
                  <div class="col-sm-6"><span class="small pull-right"> (All fields are mandatory)</span></div></div><br>

                <div class="row">
                  <div class="col-sm-6">
                    <button class="btn-submit-wdc" type="submit"  name="Submit" id="Submit" value="Submit" >Submit</button>
                    <input name="txt_sub" type="hidden" id="txt_sub" value="Web Design - Call Request" />
                  </div></div>

                  <div class="row">
                  <div class="col-sm-12">You can also message us at the following Skype ID: <strong>niyatitech</strong></div></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 <?php include("footer.php"); ?>