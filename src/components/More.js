import React from "react";
import About from './Nursery-School-Admission-in-Gurgaon.jpg';

import Owner from'./Manoj S. Jagtap.jpg';
import first from './cda599fc-a44a-4cac-b0f8-0a2d15a87e4ayog.jpg';
import { motion } from "framer-motion"; 
import vision from './sclogo.png';
import mission from './oppo.jpg';
export function More() {
    return (
        <>
        <div>
            <div className="about-container">
                <img src={About} alt="About Gurukul" height="500px" width="100%" />
                <div className="about-text" >
                    <h1 style={{paddingLeft:"80px",textShadow: "2px 2px 5px black(2, 2, 2, 2)",textDecoration: "underline" }}>About Gurukul</h1>
                </div>
            </div>
            <div className="About">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h2 style={{paddingLeft:"20px",paddingTop:"60px",fontFamily:"bold-serif"}}>WELCOME</h2><br />
                            <h4 style={{fontFamily:"serif"}}>The Gurukul Public School was founded in 2011 by Mr.Prakash Mhase with the motto "Education for Enrichment, Enhancement and Excellence".</h4>
                        </div>
                    
                        <div className="col-lg-6"><br/><br/>
                        <motion.img 
                           src={Owner} 
                            alt="..." 
                            class="img-fluid img-thumbnail"
                            style={{ width: "90%", height: "70%" }}
                            whileHover={{ scale: 1.1 }} 
                            whileTap={{ scale: 0.9 }}/>
                        </div><br/><br/>
                        <div className="col-lg-6">
                        <motion.img 
                           src={first} 
                            alt="..." 
                            class="img-fluid img-thumbnail"
                            style={{ width: "90%", height: "70%" }}
                            whileHover={{ scale: 1.1 }} 
                            whileTap={{ scale: 0.9 }}/>

                             </div><br/><br/>
                             <div className="col-lg-6">
                                <h4 style={{paddingTop:"10%",fontFamily:"serif"}}>"At Gurukul Public School, our core mission is to facilitate learning, where students acquire the invaluable skill of how to learn effectively."</h4>
                                <hr style={{borderTop: "10px solid #ccc", margin: "20px 10", color:"black"}} />
                                <h5><b>Mr.Prakash Mhase</b></h5>
                                <h6>Founder,Gurukul Public School</h6>

                               </div>

                    </div>
                </div>
            </div>
            
        </div>
        <div style={{backgroundColor:"lightgrey"}}><br/>
        <h2 style={{fontFamily: "fantasy",paddingLeft:"33%"}}><b>School Vision & Mission</b></h2>
        
      <div className="container text-center"style={{paddingBottom:"10px"}}>
        <div className="row justify-content-center">
          <div className="col-lg-6 mb-4" style={{ paddingRight: '90px', paddingLeft: '90px' }}>
            <div className="card" style={{ width: '20rem' }}>
              <img src={vision} className="card-img-top" alt="Vision" />
              <div className="card-body">
                <h5 className="card-title">Vision</h5>
                <p className="card-text">
                  To be a leading educational institution that nurtures students to become confident, compassionate, and responsible global citizens.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4" style={{ paddingRight: '90px', paddingLeft: '90px' }}>
            <div className="card" style={{ width: '20rem' }}>
              <img src={mission} className="card-img-top" alt="Mission" />
              <div className="card-body">
                <h5 className="card-title">Mission</h5>
                <p className="card-text">
                Our mission is to provide a challenging and supportive learning environment that fosters intellectual curiosity, critical thinking, and lifelong learning.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
    );
}

export default More;