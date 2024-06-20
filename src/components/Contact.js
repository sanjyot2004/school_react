import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone } from '@fortawesome/free-solid-svg-icons';

export const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className='contact-block'>
      <div className='container'>
        <div className="row">
          <div className="col-lg-8">
            <div className="col-lg-8 mx-auto p-4 py-md-5">
              <main>
                <h1 className="text-body-emphasis">STAY CONNECTED</h1><br/>
                <p className="fs-5 col-md-8" id='contacttext'>Gurukul Public School Campus <br/>At. Ladgaon Tal. Vaijapur Dist. Chh.Sambhajinagar<br/>Pin Code:423701</p>
                <hr className="col-3 col-md-2 mb-5"/>
                <p className="fs-7 col-md-8">Visit our website to delve deeper into our school's offerings, curriculum, achievements, and community. Discover what sets us apart and how we can provide your child with an exceptional educational experience.</p>
                <hr className="col-3 col-md-2 mb-5"/>
                <div className="row g-5">
                  <div className="col-md-6">
                    <h2 className="text-body-emphasis">Founder of the School</h2><br/>
                    <h5 style={{ fontFamily: "sans-serif" }}>
                      <FontAwesomeIcon  id='contact-svg' icon={faUser} /> Mr.Prakash V. Mhase
                    </h5><br/>
                    <p className="fs-5 col-md-8" style={{color:"blue"}}>
                      <FontAwesomeIcon icon={faPhone} /> 9970536417
                    </p>
                  </div>
                  <div className="col-md-6">
                    <h2 className="text-body-emphasis">Mail</h2><br/>
                    <p className="fs-5 col-md-8" style={{color:"blue"}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope-at-fill" viewBox="0 0 16 16">
                        <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"/>
                        <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791"/>
                      </svg>  Prakashvmhasegmail.com
                    </p>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div className="col-lg-4">
            {/* Google Map Embed */}
            <iframe
              width="100%"
              height="400"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.381277946909!2d74.71981737444813!3d19.82381392807258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc655014147329%3A0x993875a591841621!2sGurukul%20Public%20School!5e0!3m2!1sen!2sin!4v1715846120890!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              title="Gurukul Public School Location"
            ></iframe>
          </div>
        </div>
      </div>
      <footer className="py-3 my-4">
        <h6 className='' style={{textAlign:'center'}}>Gurukul Public School</h6>
        <hr/>
        <p className="text-center text-body-secondary"> © 2024 Gurukul Public School. All rights reserved</p>
        <p className="text-center text-body-secondary"> Designed By : Web Spirits , IT Department of SCOE , Kopargaon</p>
      </footer>
    </div>
  );
}

export default Contact;
