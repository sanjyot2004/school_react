
import React from 'react';
import AntdForm from './AntdForm';

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
            {/* <form action="Connect.php" method='POST'  onSubmit={{handleSubmit}}>
              <div style={{ paddingTop: '10px' }}>
                <label><b><h4 style={{ fontFamily: "sans-serif" }}>Name of Student</h4></b></label><br />
                <input name='studentname' placeholder=' Enter Student Name' type='text' className='form-field' style={{ width: '300px', borderRadius:'50px' }} /><br /><br />

                <label><b><h4 style={{ fontFamily: "sans-serif" }}>Name of Parent</h4></b></label><br />
                <input type='text' name='parentname' placeholder=' Enter Parent Name' style={{ width: '300px' ,borderRadius:'50px'}} /><br /><br />

                <label><b><h4 style={{ fontFamily: "sans-serif" }}>Select Class</h4></b></label><br />
                <select style={{ width: '300px',borderRadius:'50px' }}>
                  <option name='option' value="LKG/UKG Std">LKG/UKG Std</option>
                  <option name='option' value="first Std">first Std</option>
                  <option name='option' value="Second Std">Second Std</option>
                  <option name='option' value="Third Std">Third Std</option>
                  <option name='option' value="Fourth Std">Fourth Std</option>
                  <option name='option' value="Fifth Std">Fifth Std</option>
                  <option name='option' value="Six Std">Sixth Std</option>
                  <option name='option' value="Six Std">Seventh Std</option>
                  <option name='option' value="Six Std">Eighth Std</option>
                </select><br /><br />

                <label><b><h4 style={{ fontFamily: "sans-serif" }}>Contact Number</h4></b></label><br />
                <input type='tel' name='contactnumber' placeholder=' Enter Contact Number' style={{ width: '300px',borderRadius:'50px' }} /><br /><br />

                <label><b><h4 style={{ fontFamily: "sans-serif" }}>Email Id</h4></b></label><br />
                <input type='email' name='email' placeholder=' Enter Email Id' style={{ width: '300px',borderRadius:'50px' }} /><br /><br />
              </div>
              <input type="submit" className="btn btn-dark" value='Submit'  />
            </form> */}
            <AntdForm/>
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

export default Bform;
