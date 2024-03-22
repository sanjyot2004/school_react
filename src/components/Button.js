import React from 'react';
import { Link } from 'react-router-dom';


export const Button = () => {
  return (
    <>
       
    <div className='button-block'>

    <div style={{height:"400px",width:"100%",textAlign:"center",padding:"7%",marginTop:"50px",border:"solid black"}}>
    <h2>ADMISSION ENQUIRY </h2>    
    <h3>Join The Gurukhul Family</h3>

      <Link to="/Bform"><button className="custom-button"style={{marginTop:"30px",marginBottom:"50px"}}>ADMISSION FORM</button></Link>
    </div>
    </div>
    </>
  );
}

export default Button;
