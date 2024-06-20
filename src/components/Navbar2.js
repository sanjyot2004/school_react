import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

export const Navbar2 = () => {
  const [isSticky, setSticky] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setSticky(window.scrollY > 0);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  const handleDropdown = () => {
    setShowDropdown(true);
  };

  const handleDropdownLeave = () => {
    setShowDropdown(false);
  };

  return (
    <>
      <div className={`Navbar-block2 ${isSticky ? 'sticky' : ''}`}>
          <header className={`d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 `}>
          <div className="col-md-2 mb-2 mb-md-0">
            
          </div>
          <div className='Navbutton2'>
            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <li><Link to="/" id='nav-btn' className="btn btn-outline" style={{ color: "white", margin: "10px"  }}>Home</Link></li>

              <div
                className="dropdown"
                onMouseEnter={handleDropdown}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className="btn btn-outline"
                  style={{ color: "white", margin: "10px", zIndex: 1 }} // Set a higher z-index for the button
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded={showDropdown}
                  id='nav-btn'
                >
                  About Us
                </button>
                <ul className={`dropdown-menu ${showDropdown ? 'show' : ''}`} style={{ marginTop: 0 }}>
                  <li><Link to="/More1" id='nav-btn' className="dropdown-item">About</Link></li>
                  <li><Link to="/More2" id='nav-btn'  className="dropdown-item">Management Desk</Link></li>
                  <li><Link to="/More3" id='nav-btn' className="dropdown-item">Principal Desk</Link></li>
                  
                </ul>
              </div>

              <li><Link to="/AllFeatures" id='nav-btn' className="btn btn-outline" style={{ color: "white", margin: "10px" }}>Features</Link></li>
              <li><Link to="/Gallaryblk" id='nav-btn' className="btn btn-outline" style={{ color: "white", margin: "10px" }}>Gallery</Link></li>
              <li><Link to="/Contact" id='nav-btn' className="btn btn-outline" style={{ color: "white", margin: "10px" }}>Contact</Link></li>
            </ul>
          </div>
          <div className="col-md-2"></div>
        </header>
      </div>
    </>
  );
}

export default Navbar2;
