import React, { useState, useEffect } from 'react';
import sclogo from './scclogoo.jpg';
import { Link } from 'react-router-dom';

export const Navbar2 = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0); // Change here to set navbar sticky on any scroll
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`Navbar-block2 ${isSticky ? 'sticky' : ''}`}>
        <header className={`d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 ${isSticky ? 'slide-down' : 'slide-up'}`}>
          <div className="col-md-2 mb-2 mb-md-0">
            
          </div>
          <div className='Navbutton2'>
            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 ">
              <li><Link to="/" className="btn btn-outline" style={{ color: "white", margin: "10px" }}>Home</Link></li>
              <li><Link to="/More" className="btn btn-outline" style={{ color: "white", margin: "10px" }}>About Us</Link></li>
              <li><a href="#" className="btn btn-outline" style={{ color: "white", margin: "10px" }}>Features</a></li>
              <li><Link to="/Gallaryblk" className="btn btn-outline" style={{ color: "white", margin: "10px" }}>Gallery</Link></li>
              <li><Link to="/Contact" className="btn btn-outline" style={{ color: "white", margin: "10px" }}>Contact</Link></li>
            </ul>
          </div>
          <div className="col-md-2"></div>
        </header>
      </div>
    </>
  );
}

export default Navbar2;
