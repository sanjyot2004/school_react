import React from 'react';
import vision from "./Vision.png";
import mission from "./Mission.png";



export function More1() {
    return (
        <>
    <div className="container" id='More-block'>
      <div className="row">
      <div className="d-grid gap-8 d-md-flex justify-content-md-start">
           
      <div className="col-lg-7">
        <h1 style={{fontFamily:"serif"}}>About <span style={{color:"brown"}}>Gurukul</span></h1><br/>
         <p className="lead" style={{textAlign:"justify",fontFamily:"Georgia, serif"}}> "अथर्व बहुउद्देशीय ग्रामविकास संस्था" The Gurukul Public School, Ladgaon. Gurukul seeks to impart education in the fullest sense of the term, while assisting in developing the individuality of children. While following a curriculum aimed at the highest standards of academic excellence, the school takes particular care to ensure a congenial environment for the all round development of the child. </p>
         <p className="lead" style={{textAlign:"justify",fontFamily:"Georgia, serif"}}>Gurukul Public School is committed to providing quality education that nurtures the holistic development of every student.</p>
        </div>
      
      
      <div  id='more-vimi' className="col-md-5 vision-mission-sec now wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s" style={{ visibility: "visible", animationDuration: "1s", animationDelay: "0.6s",paddingLeft:"35px" ,paddingTop:"50px"}}>
        <div className="container About-sec"  style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "20px" }}>
      <div  className='col-lg-12 vision pd0'>
    <h2>
      <img id='mi-img' src={vision} alt='...' style={{height:"100px",width:"130px"}}  />
       <span id='mi-text' style={{ borderBottom: "2px solid gray", paddingBottom: "3px" }}>&nbsp; Our vision</span> 
    </h2>
    <p style={{ textAlign: "justify" }}>To empower students with knowledge, skills, and values that prepare them to become lifelong learners and responsible global citizens.</p>
    <hr/>
    </div>
    <div className='col-lg-12 vision pd0'>
    <h2>
      <img id='vi-img' src={mission} alt='...' style={{height:"100px",width:"100px"}} />
       <span id='vi-text'  style={{ borderBottom: "2px solid gray", paddingBottom: "3px" }}>&nbsp; Our Mission</span> 
    </h2>
    <p style={{ textAlign: "justify" }}>The school aims to provide a high standard of education that focuses on academic achievement and critical thinking skills.</p>
    <hr/>
    </div>

    </div>   
    </div>
    </div>
    </div>
  </div>

     
 

  <div style={{marginTop:'100px'}}>
  <footer className="py-3 my-4">
    <h6 className='' style={{textAlign:'center'}}>Gurukul Public School</h6>
    <hr/>
    <p className="text-center text-body-secondary"> © 2024 Gurukul Public School. All rights reserved</p>
    <p className="text-center text-body-secondary"> Designed By : Web Spirits , IT Department of SCOE , Kopargaon</p>
  </footer>

  </div>






      </>
    );
}

export default More1;