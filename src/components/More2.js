import React from 'react';

 import parentface from "./Founder.png";


export function More() {
    return (
        <>
   

     
 

  <div className='about-block'>
    <div className='container'>
      <div className="row flex-lg-row-reverse align-items-center g-5 py-6">
      <div className="col-lg-6">
        <div className='about'>
          <h5>Shri. Praksh Mhase, Founder of the School.</h5><br />
          <h6>Dear Parents,</h6><br />
          <p style={{textAlign:"justify"}}>I take this privilege to welcome you to Gurkul Public School, Ladgaon. What a gift, at ladgaon has been to make my dream come true.!! My vision is to transform children from all background into educated citizens, inspire them to be just and ethical citizens who will be wise and principled leaders to serve a meritocratic India. We do this by attracting and developing exceptional children and teachers.<br /><br />
                   We also aim to be the most exciting place in India for educators to work together and a centre for excellence in professional development for teaching and pastoral care. We look outwards and see what we can learn from others in the field of education and training, and we invite others to share and participate in what we do.</p> <br />
                   <h5>Shri. Praksh Mhase</h5><br />
                   <h5>Gurukul Public School</h5>
        </div>      
      </div>
      <div className="col-lg-6">
      <h2 style={{paddingLeft:"5.5%",color:"brown",fontFamily:"serif",textDecoration:"underline"}}>Mangement Desk</h2><br/><br/>
      <div className="card-container" style={{display: "flex", justifyContent: "flex-start", marginLeft: "80px",alignItems:"flex-start"}}>
  
  <div className="card" style={{width: "19rem",margin: "40px"}}>
    
  <img src={parentface} className="card-img-top" alt="..."style={{width:"303px",height:"300px", marginTop:"5px"}} /> <hr />
  <div className="card-body">
  <h5 className="card-title">
  <span style={{color: "brown",fontFamily:"serif"}}> Name: </span> 
  <span style={{fontFamily:"serif"}}>Shri. Prakash Mhase</span>
   </h5>
    <h5 className="card-text" >
      <span style={{fontFamily:"serif",color:"brown"}}>Designation: </span>
      <span style={{fontFamily:"serif"}}>Founder of The School.</span>

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

export default More;