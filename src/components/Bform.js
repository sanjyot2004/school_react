import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone } from '@fortawesome/free-solid-svg-icons';

export  const Bform = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className='Form-block'>
      <div className='container'>
        <div className="">
          <div className="fblock-1">
            <h3>ADMISSION ENQUIRY!</h3>
            <form action="connect" onSubmit={handleSubmit}>
              <div style={{ paddingTop: '10px' }}>
                <label><b><h4 style={{ fontFamily: "sans-serif" }}>Name of Student</h4></b></label><br />
                <input name='student' placeholder=' Enter Student Name' type='text' className='form-field' style={{ width: '300px', borderRadius:'50px' }} /><br /><br />

                <label><b><h4 style={{ fontFamily: "sans-serif" }}>Name of Parent</h4></b></label><br />
                <input type='text' name='parent' placeholder=' Enter Parent Name' style={{ width: '300px' ,borderRadius:'50px'}} /><br /><br />

                <label><b><h4 style={{ fontFamily: "sans-serif" }}>Select Class</h4></b></label><br />
                <select style={{ width: '300px',borderRadius:'50px' }}>
                  <option value="LKG/UKG Std">LKG/UKG Std</option>
                  <option value="first Std">first Std</option>
                  <option value="Second Std">Second Std</option>
                  <option value="Third Std">Third Std</option>
                  <option value="Fourth Std">Fourth Std</option>
                  <option value="Fifth Std">Fifth Std</option>
                  <option value="Six Std">Six Std</option>
                </select><br /><br />

                <label><b><h4 style={{ fontFamily: "sans-serif" }}>Contact Number</h4></b></label><br />
                <input type='tel' name='contact' placeholder=' Enter Contact Number' style={{ width: '300px',borderRadius:'50px' }} /><br /><br />

                <label><b><h4 style={{ fontFamily: "sans-serif" }}>Email Id</h4></b></label><br />
                <input type='email' name='Email' placeholder=' Enter Email Id' style={{ width: '300px',borderRadius:'50px' }} /><br /><br />
              </div>
              <button type="submit" className="btn btn-dark">Submit</button>
            </form>
          </div>
          
          </div>
        </div>
      </div>
    
  );
}

export default Bform;
