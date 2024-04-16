import React from 'react';

 import principle from "./principle_img.jpg";


export function More3() {
    return (
        <>
   

     
 

  <div className='about-block'>
    <div className='container'>
      <div className="row flex-lg-row-reverse align-items-center g-5 py-6">
      <div className="col-lg-6">
        <div className='about'>
          <h5>Vandana Sanjay Adhav , Principal of the School.</h5><br />
          <h6>Dear Parents,</h6><br />
          <p style={{textAlign:"justify"}}>It is with great pleasure that I extend a warm welcome to you all to Gurukul Public School, Ladgaon. I am honored to carry forward the vision set forth by our esteemed Founder, Shri. Praksh Mhase.

At Gurukul Public School, our mission is to nurture and empower students from diverse backgrounds, fostering in them not only academic excellence but also a strong sense of integrity and social responsibility. We are committed to shaping future leaders who are not only knowledgeable but also compassionate and ethical citizens.<br/><br/>

Under my leadership, alongside our dedicated team of educators, we strive to create an environment that stimulates intellectual curiosity, fosters creativity, and promotes holistic development. Our aim is to make Gurukul Public School the epitome of educational excellence, where students are inspired to reach their full potential and become contributing members of a progressive society.

Furthermore, we are dedicated to continuous improvement and collaboration within the education community.<br/><br/> We actively seek opportunities to learn from others in the field and are committed to sharing our best practices to contribute to the advancement of education as a whole.

I look forward to partnering with you on this journey of academic and personal growth for our students. Together, let us build a brighter future for the leaders of tomorrow.</p> <br />
                   <h5>Vandana Sanjay Adhav</h5><br />
                   <h5>Gurukul Public School</h5>
        </div>      
      </div>
      <div className="col-lg-6">
      <h2 style={{paddingLeft:"5.5%",color:"brown",fontFamily:"serif",textDecoration:"underline"}}>Principal Desk</h2><br/><br/>
      <div className="card-container" style={{display: "flex", justifyContent: "flex-start", marginLeft: "80px",alignItems:"flex-start"}}>
  
  <div className="card" style={{width: "19rem",margin: "40px"}}>
    
  <img src={principle} className="card-img-top" alt="..."style={{width:"303px",height:"300px"}} /> <hr />
  <div className="card-body">
  <h5 className="card-title">
  <span style={{color: "brown",fontFamily:"serif"}}> Name: </span> 
  <span style={{fontFamily:"serif"}}>Vandana Sanjay Adhav</span>
   </h5>
    <h5 className="card-text" >
      <span style={{fontFamily:"serif",color:"brown"}}>Designation: </span>
      <span style={{fontFamily:"serif"}}>Principal of The School.</span>

      </h5>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>








      </>
    );
}

export default More3;