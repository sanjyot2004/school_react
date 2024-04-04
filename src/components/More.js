import React from 'react';
import vision from "./Vision.png";
 import mission from "./Mission.png";
 import parentface from "./Founder.png";


export function More() {
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
      
      
      <div className="col-md-5 vision-mission-sec now wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s" style={{ visibility: "visible", animationDuration: "1s", animationDelay: "0.6s",paddingLeft:"35px" ,paddingTop:"50px"}}>
        <div class="container About-sec"  style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "20px" }}>
      <div className='col-lg-12 vision pd0'>
    <h2>
      <img src={vision} alt='...' style={{height:"100px",width:"130px"}}  />
       <span style={{ borderBottom: "2px solid gray", paddingBottom: "3px" }}>&nbsp; Our vision</span> 
    </h2>
    <p style={{ textAlign: "justify" }}>To empower students with knowledge, skills, and values that prepare them to become lifelong learners and responsible global citizens.</p>
    <hr/>
    </div>
    <div className='col-lg-12 vision pd0'>
    <h2>
      <img src={mission} alt='...' style={{height:"100px",width:"100px"}} />
       <span style={{ borderBottom: "2px solid gray", paddingBottom: "3px" }}>&nbsp; Our Mission</span> 
    </h2>
    <p style={{ textAlign: "justify" }}>The school aims to provide a high standard of education that focuses on academic achievement and critical thinking skills.</p>
    <hr/>
    </div>

    </div>   
    </div>
    </div>
    </div>
  </div>

     
 

  <div className='about-block'>
    <div className='container'>
      <div className="row flex-lg-row-reverse align-items-center g-5 py-6">
      <div className="col-lg-6">
        <div className='about'>
          <h5>Shri. Praksh Mhase, Owner Of the School.</h5><br />
          <h6>Dear Parents,</h6><br />
          <p style={{textAlign:"justify"}}>I take this privilege to welcome you to Gurkul Public School, Ladgaon. What a gift, at ladgaon has been to make my dream come true.!! My vision is to transform children from all background into educated citizens, inspire them to be just and ethical citizens who will be wise and principled leaders to serve a meritocratic India. We do this by attracting and developing exceptional children and teachers.<br /><br />
                   We also aim to be the most exciting place in India for educators to work together and a centre for excellence in professional development for teaching and pastoral care. We look outwards and see what we can learn from others in the field of education and training, and we invite others to share and participate in what we do.</p> <br />
                   <h5>Shri. Praksh Mhase</h5><br />
                   <h5>Gurukul Public School</h5>
        </div>      
      </div>
      <div className="col-lg-6">
      <h2 style={{paddingLeft:"5.5%",color:"brown",fontFamily:"serif",textDecoration:"underline"}}>Mangement Desk</h2><br/><br/>
      <div class="card-container" style={{display: "flex", justifyContent: "flex-start", marginLeft: "80px",alignItems:"flex-start"}}>
  
  <div class="card" style={{width: "19rem",margin: "40px"}}>
    
  <img src={parentface} class="card-img-top" alt="..."style={{width:"280px",height:"300px", marginTop:"10px",boxShadow:"10px 10px 5px gray"}} /> <hr />
  <div class="card-body">
  <h5 class="card-title">
  <span style={{color: "brown",fontFamily:"serif"}}> Name: </span> 
  <span style={{fontFamily:"serif"}}>Shri. Prakash Mhase</span>
   </h5>
    <h5 class="card-text" >
      <span style={{fontFamily:"serif",color:"brown"}}>Designation: </span>
      <span style={{fontFamily:"serif"}}>Founder Of The School.</span>

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