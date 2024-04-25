import React from 'react';

 import parentface from "./Founder.png";


export function More() {
    return (
        <>

  <div className='about-block'>
    <div className='container'>
      <div className="row custom-row flex-lg-row-reverse align-items-center  py-6">
      <div className="col-lg-6">
        <div className='about'>
          <h5>Shri. Praksh V. Mhase, Founder of the School.</h5><br />
          <h6>Dear Parents,</h6><br />
          <p id='f-p-para'style={{textAlign:"justify"}}>I take this privilege to welcome you to Gurkul Public School, Ladgaon. What a gift, at ladgaon has been to make my dream come true.!! My vision is to transform children from all background into educated citizens, inspire them to be just and ethical citizens who will be wise and principled leaders to serve a meritocratic India. We do this by attracting and developing exceptional children and teachers.<br /><br />
                   We also aim to be the most exciting place in India for educators to work together and a centre for excellence in professional development for teaching and pastoral care. We look outwards and see what we can learn from others in the field of education and training, and we invite others to share and participate in what we do.</p> <br />
                   <h5>Shri. Praksh V. Mhase</h5><br />
                   <h5>Gurukul Public School</h5>
        </div>      
      </div>
      <div className="col-lg-6">
      <h2 style={{paddingLeft:"5.5%",color:"brown",fontFamily:"serif",textDecoration:"underline"}}>Mangement Desk</h2><br/><br/>
      <div className="card-container" style={{display: "flex", justifyContent: "flex-start",alignItems:"flex-start"}}>
  
  <div className="card" style={{width: "19rem",margin: "40px"}}>
    
  <img id='fimg' src={parentface}  className="card-img-top" alt="..."style={{width:"303px",height:"300px", marginTop:"5px"}} />
  <div className="card-body">
  <h5 className="card-title">
  <span className='founder-text' style={{color: "brown",fontFamily:"serif"}}> Name: </span> 
  <span className='founder-text' style={{fontFamily:"serif"}}>Shri. Prakash V. Mhase</span>
   </h5>
    <h5 className="card-text1" >
      <span className='founder-text' style={{fontFamily:"serif",color:"brown"}}>Designation: </span>
      <span className='founder-text' style={{fontFamily:"serif"}}>Founder of The School.</span>

      </h5>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>



  <footer className="py-3 my-4">
    <h6 className='' style={{textAlign:'center'}}>Gurukul Public School</h6>
    <hr/>
    <p className="text-center text-body-secondary"> © 2024 Gurukul Public School. All rights reserved</p>
    <p className="text-center text-body-secondary"> Designed By : Web Spirits , IT Department of SCOE , Kopargaon</p>
  </footer>




      </>
    );
}

export default More;