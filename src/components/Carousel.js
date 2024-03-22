import React from 'react';
import img1 from './scface.jpg'; 
import img2 from './yogaimg.jpg'; 
import img3 from './schoolimg.jpg'; 

export default function Carousel() {
  return (
    <>

      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" style={{ borderRadius: '0%', }} />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" style={{ borderRadius: '0%' }} />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" style={{ borderRadius: '0%' }} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
    </>
  );
}




