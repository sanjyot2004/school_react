import React from 'react';

const Navbar2 = () => {
  return (
    <>
      <div className="call_btn">
        <a href="tel:+919623164561">
          <div className="coccoc-alo-phone coccoc-alo-green coccoc-alo-show" id="coccoc-alo-phoneIcon callnowicon">
            <div className="coccoc-alo-ph-circle"></div>
            <div className="coccoc-alo-ph-circle-fill"></div>
            <div className="coccoc-alo-ph-img-circle">
              <img src="call-enq.svg" className="img-fluid" alt="Call icon" />
            </div>
          </div>
        </a>
      </div>
      <div className="whatsapp_btn">
        <a href="https://api.whatsapp.com/send?phone=919623164561&amp;text=Hello, I am interested in greencareagrotech Products, Please">
          <div className="coccoc-alo-phone coccoc-alo-green coccoc-alo-show" id="coccoc-alo-phoneIcon callnowicon">
            <div className="coccoc-alo-ph-circle"></div>
            <div className="coccoc-alo-ph-circle-fill"></div>
            <div className="coccoc-alo-ph-img-circle">
              <img src="whatsapp-enq.svg" className="img-fluid" alt="Whatsapp icon" />
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default Navbar2;
