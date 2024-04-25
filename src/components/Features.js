import React from 'react';
import sport from './sport.png';
import facalty from './facalty.jpg';
import oppo from './oppo.jpg';
import { Link } from 'react-router-dom';

export default function Features() {
  return (
    <div className='feature-block'>
      <div className='container'>
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3" style={{ textAlign: "center", fontFamily: "  'Roboto', sans-serif" }}>Features</h1>
        <hr />
        <div className="row text-center">
          <div className="col">
            <div className="card" style={{ width: "350px", backgroundColor: "#2899B8", height: "430px" }}>
              <img src={facalty} className="card-img" alt="Faculty" />
              <div className="card-body">
                <h5 className="card-title">Faculty</h5>
                <p className="card-text">Our faculty members are experts in their fields, bringing diverse backgrounds and specialized expertise to our institution.</p>
                <Link to="/FacultyPage" className="btn btn-outline-light" style={{ color: "black" }}>More Info</Link>
    
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "350px", backgroundColor: "#FF7300", height: "430px" }}>
              <img src={oppo} className="card-img" alt="Opportunity" />
              <div className="card-body">
                <h5 className="card-title">Opportunity</h5>
                <p className="card-text">Unlock a world of opportunities at our school, where every student is empowered to excel.</p>
                <Link to="/Opportunities" className="btn btn-outline-light" style={{ color: "black" }}>More Info</Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "350px", backgroundColor: "#D0CB39", height: "430px" }}>
              <img src={sport} className="card-img" alt="Sport" />
              <div className="card-body">
                <h5 className="card-title">Sport</h5>
                <p className="card-text">Experience a robust sports program at our school, cultivating skills, character, and camaraderie.</p>
                <Link to="/SportPage" className="btn btn-outline-light" style={{ color: "black" }}>More Info</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
