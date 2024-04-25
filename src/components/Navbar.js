import React from 'react'
import sclogo from './scclogoo.jpg'; 
import { Link } from 'react-router-dom';




export const Navbar = () =>{

return(
    <>
    
    <div className='Navbar-block'>
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2    ">
    <div className="col-md-2 mb-2 mb-md-0">
      <div className="col-md-2">
      <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">

        <img className='sclogo' src={sclogo} height="100px" width="200px" style={{marginLeft:"30%"}}/>

      </a>
    </div>
    </div>
    
  <div className='Navbutton'>
    <h2 className='g-tag'>Gurukul Public School</h2>
    <p>At. Ladgaon Tal. Vaijapur Dist. Chh.Sambhajinagar</p>
    
</div>
    <div className="col-md-2">
      
    </div>
    </header>
    </div>


    </>
    );
  
}