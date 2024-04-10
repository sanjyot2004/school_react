import React from 'react';
import whatsappimg from './WhatsApp_icon.png'
import callimg from './call_img.png'

const Contact2 = () => {
  return (
    <>
      <div className="call_btn">
        <a href="tel:+918669972005">
          <div className="coccoc-alo-phone coccoc-alo-green coccoc-alo-show" id="coccoc-alo-phoneIcon callnowicon">
            <div className="coccoc-alo-ph-circle"></div>
            <div className="coccoc-alo-ph-circle-fill"></div>
            <div className="coccoc-alo-ph-img-circle">
              <img src={callimg} className="img-fluid" alt="Call icon" />
            </div>
          </div>
        </a>
      </div>
      <div className="whatsapp_btn">
        <a href="https://api.whatsapp.com/send?phone=918669972005&amp;text=Hello, I am interested in Gurukul Public School">
          <div className="coccoc-alo-phone coccoc-alo-green coccoc-alo-show" id="coccoc-alo-phoneIcon callnowicon">
            <div className="coccoc-alo-ph-circle"></div>
            <div className="coccoc-alo-ph-circle-fill"></div>
            <div className="coccoc-alo-ph-img-circle">
              <img src={whatsappimg} className="img-fluid" alt="Whatsapp icon" />
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default Contact2;