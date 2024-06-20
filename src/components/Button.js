import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from './pencil.jpg'; // Replace 'backgroundImage.jpg' with the path to your background image

export const Button = () => {
  return (
    <>
      <div className='button-block' style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(${backgroundImage})`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '500px',marginBottom:"50px" }}>
        <div style={{ height: "500px", width: "100%", textAlign: "center", padding: "7%", marginTop: "50px"}}>
          <h2 style={{color:"black",marginTop:"60px"}}>ADMISSION ENQUIRY </h2>
          <h3 style={{color:"black"}}>Join The Gurukul Family</h3>
          <Link to="/Bform"><button className="custom-button" style={{ marginTop: "30px", marginBottom: "50px" }}>ADMISSION FORM</button></Link>
        </div>
      </div>
    </>
  );
}

export default Button;
