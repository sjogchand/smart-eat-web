import React from "react";
import "./index.css";
import logo from './assets/Frame.png'
import appleStore from './assets/image-2.png'
import playStore from './assets/image-3.png'
import phone from './assets/phone.png'

const EatsmartWeb = () => {
  return (
   <div className="eatsmart-web">
    <div className="banner">
      <section className="section1">
        <div className="subdiv subdiv-1">
          <img src={logo} alt="" />
          <p className="text-content">Eat Smart</p>
        </div>
        <div className="subdiv subdiv-2">
          <div className="heading-text">
            <p className="head">Check our awesome new app</p>
            <p className="text">Voice Enabled Nutrition- AI lets users add food in the simplest of ways</p>
          </div>
          <div className="img">
            <img src={playStore} alt=""/>
            <img src={appleStore} alt=""/>
          </div>
          <div className="download-now">Download Now</div>
        </div>
        <div className="subdiv subdiv-3">
          <img src={phone} alt=""/>
          <div className="phone-bg">
             
          </div>
        </div>
      </section>
    </div>
      {/* <div className="div">
        <div className="overlap">
          <div className="overlap-group">
            <div className="rectangle" />
            <div className="group">
              <div className="overlap-group-2">
                <img className="eatsamrt-web-gif" alt="Eatsamrt web gif" src="/img/eatsamrt-web-gif-v003-1.gif" />
                <img className="phone-copy" alt="Phone copy" src="/img/phone-14-01-copy-1.png" />
              </div>
            </div>
            <div className="frame">
              <div className="frame-2">
                <div className="group-2">
                  <img className="img" alt="Frame" src="/img/frame.svg" />
                  <img className="eat-smart" alt="Eat smart" src="/img/eatsmart.svg" />
                </div>
              </div>
              <div className="frame-3">
                <div className="frame-wrapper">
                  <div className="frame-4">
                    <img
                      className="check-our-awesome"
                      alt="Check our awesome"
                      src="/img/check-our-awesome-new-app.svg"
                    />
                    <img
                      className="voice-enabled"
                      alt="Voice enabled"
                      src="/img/voice-enabled-nutrition-ai-lets-users-add-food-in-the-simplest.svg"
                    />
                  </div>
                </div>
                <div className="frame-5">
                  <img className="image" alt="Image" src="/img/image-2.png" />
                  <img className="image-2" alt="Image" src="/img/image-3.png" />
                </div>
                <img className="download-now" alt="Download now" src="/img/download-now.svg" />
              </div>
            </div>
          </div>
          <div className="ellipse" />
        </div>
        <div className="copyright-eatsmart-wrapper">
          <img
            className="copyright-eatsmart"
            alt="Copyright eatsmart"
            src="/img/copyright-eatsmart-all-rights-reserved.svg"
          />
        </div>
      </div> */}
      <div className="footer">
        Copyright © EatSmart. All rights reserved.
      </div>
    </div>
  );
};

export default  EatsmartWeb;