
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
