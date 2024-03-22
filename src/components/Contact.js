import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone } from '@fortawesome/free-solid-svg-icons';

export  const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className='contact-block'>
      <div className='container'>
        <div className="row">
          <div className="col-lg-6" id='contact-1'>
            <h3>ADMISSION ENQUIRY!</h3>
            <form onSubmit={handleSubmit}>
              <div style={{ paddingLeft: '20px' }}>
                <label><b><h4 style={{ fontFamily: "sans-serif" }}>Name of Student</h4></b></label><br />
                <input name='student' placeholder=' Enter Student Name' type='text' className='form-field' style={{ width: '300px' }} /><br /><br />

                <label><b><h4 style={{ fontFamily: "sans-serif" }}>Name of Parent</h4></b></label><br />
                <input type='text' name='parent' placeholder=' Enter Parent Name' style={{ width: '300px' }} /><br /><br />

                <label><b><h4 style={{ fontFamily: "sans-serif" }}>Select Class</h4></b></label><br />
                <select style={{ width: '300px' }}>
                  <option value="LKG/UKG Std">LKG/UKG Std</option>
                  <option value="first Std">first Std</option>
                  <option value="Second Std">Second Std</option>
                  <option value="Third Std">Third Std</option>
                  <option value="Fourth Std">Fourth Std</option>
                  <option value="Fifth Std">Fifth Std</option>
                  <option value="Six Std">Six Std</option>
                </select><br /><br />

                <label><b><h4 style={{ fontFamily: "sans-serif" }}>Contact Number</h4></b></label><br />
                <input type='tel' name='contact' placeholder=' Enter Contact Number' style={{ width: '300px' }} /><br /><br />

                <label><b><h4 style={{ fontFamily: "sans-serif" }}>Email Id</h4></b></label><br />
                <input type='email' name='Email' placeholder=' Enter Email Id' style={{ width: '300px' }} /><br /><br />
              </div>
              <button type="submit" className="btn btn-outline-primary">Submit</button>
            </form>
          </div>
          <div className="col-lg-6">
            <h3>STAY CONNECTED!</h3>
            <h4 style={{ fontFamily: "sans-serif" }}>Gurukul Public School Campus</h4>
            <h5 style={{ fontFamily: "sans-serif" }}>At. Ladgaon Tal. Vaijapur Dist. Chh.Sambhajinagar</h5>
            <h5 style={{ fontFamily: "sans-serif" }}>Pin Code:423701</h5>
            <div>
              <p>
                <h4>
                  <i className="fa fa-phone-square" style={{ color: "blue" }}> 0967678945</i>
                </h4>
              </p>
              <h4>Owner Of the School:</h4>
              <h5 style={{ fontFamily: "sans-serif" }}>
                <FontAwesomeIcon icon={faUser} /> Mr.Prakash Mhase
              </h5>
              <h4 style={{color:"blue"}}>
                <FontAwesomeIcon icon={faPhone} /> 0967678945
              </h4><br/><br/>
              <h5 style={{fontFamily:"cursive"}}>"Visit our website to delve deeper into our school's offerings, curriculum, achievements, and community. Discover what sets us apart and how we can provide your child with an exceptional educational experience.!"</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
