import React from 'react';

import sport from './sport.png';
import facalty from './facalty.jpg';
import oppo from './oppo.jpg'

export default function Features() {
    return (
        <div className='feature-block' >
            
      <div className='container'>
      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3" style={{textAlign: "center"}}>Features</h1>
        <hr />
        <div className="row text-center">
          <div className="col" >
            <div className="card" id='card' style={{width: "350px",backgroundColor:"#2899B8",height:"430px"}}>
              <img src={facalty} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Facalty</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-outline-light"style={{color:"black"}}>More Info</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" id='card' style={{width: "350px",backgroundColor:"#FF7300",height:"430px"}} >
              <img src={oppo} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Opportunity</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-outline-light"style={{color:"black"}}>More Info</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" id='card' style={{width: "350px",backgroundColor:"#D0CB39",height:"430px"}}>
              <img src={sport} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Sport</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-outline-light"style={{color:"black"}}>More Info</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
}
