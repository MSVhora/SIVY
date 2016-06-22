<?php include("header.php"); ?>
 <div class="inner-container">
        <div class="webdesign-cost-sec">
          <div class="container">
            <div class="row">
              <h1>Mobile App Cost Estimate</h1>
              <br>
              <div class="font-28">We are excited that you decided to contact us
                for your app development pricing.</div>
            </div>
          </div>
        </div>
      </div>
      <div class="logo-form-sec">
        <div class="container">
          <div class="row">
            <div class="estimate-text-pad">If you are requesting for a web
              design quote online, please provide us as much details as you can,
              so that we can get back with an exact quote.<br>
              <br>
            </div>
            <ul class="nav nav-tabs">
              <li><a href="mobile-app-cost.html"><span class="icon-tab-mail"></span>Email
                  me a cost estimate</a></li>
              <li class="active"><a data-toggle="tab" href="#tab_skype"><span class="icon-tab-skype"></span>Arrange
                  a Skype call</a></li>
            </ul>
            <div class="cost-estimate-pad">
              <div class="tab-content">
                <div id="tab_skype" class="tab-pane fade in active">
                  <form name="frmdiscuss" method="post" action="http://www.niyati.com/website-ct-action.php?act=diss"

                    onsubmit="return discussvalid();">
                    <br>
                    <div class="row">
                      <div class="col-sm-6"> <input name="wd_name" class="icon-form-name"

                          id="wd_name" onkeypress="return charactercheck(event);"

                          placeholder="Name" type="text"> </div>
                      <div class="col-sm-6"> <input name="wd_email" class="icon-form-email"

                          id="wd_email" placeholder="Email" type="text"> </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-6"> <input name="wd_phone" class="icon-form-phone"

                          id="wd_phone" onkeypress="return phonenumcheck(event);"

                          placeholder="Phone" type="text"> </div>
                      <div class="col-sm-6"> <input name="wd_city" class="icon-form-loc"

                          id="wd_city" onkeypress="return charactercheck(event);"

                          placeholder="City" type="text"> </div>
                    </div>
                    <div class="row hide-row"> <input name="website_comments" id="website_comments"

                        onkeypress="return numcheck(event);" type="text"> </div>
                    <div class="row">
                      <div class="col-sm-6"> <input name="skypeid" id="skypeid"

                          placeholder="Your Skype ID" type="text"> </div>
                      <div class="col-sm-6"> <input name="preferred_time" id="preferred_time"

                          placeholder="Preferred time" type="text"> </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12"> <textarea name="cd_msg" rows="10"

                          id="cd_msg" placeholder="Message"></textarea> </div>
                    </div>
                    <br>
                    <div class="g-recaptcha" data-sitekey="6Lez1f8SAAAAAAsI20jQHWLNMz1MhMQMftn8sgh7"></div>
                    <br>
                    <div class="row">
                      <div class="col-sm-6"> <button class="btn-submit-wdc" type="submit"

                          name="Submit" id="Submit" value="Submit">Submit</button>
                        <input name="txt_sub" id="txt_sub" value="Mobile App - Call Request"

                          type="hidden"> </div>
                      <div class="col-sm-6"><span class="small pull-right"> (All
                          fields are mandatory)</span></div>
                      <br>
                      <div class="col-sm-12">You can also message us at the
                        following Skype ID: <strong>niyatitech</strong></div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     <?php include("footer.php"); ?>