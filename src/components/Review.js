import React from 'react'
import primg from './Ravindra M. Jagtap.jpg';
import primg1 from './Manoj S. Jagtap.jpg';
import primg2 from './parent.jpg'


export  default  function Review(){

return(
    <>
    <div className='rew-block'>
    <div className='container'>
    <h1 className="fw-bold text-body-emphasis lh-1 mb-3 " style={{textAlign: "center"}}>Parent Review</h1>
    <hr className=' fw-bold' style={{color: "black"}}/>
   <div id="carouselExampleCaptions" className="carousel slide">
 
  <div className="carousel-inner">
    <div className="carousel-item active">
    
      <div class="col-lg-4 mx-auto d-block">
      <img src={primg} className=" mx-auto d-block " alt="..."/>
        <h2 class="fw-normal">Ravindra M. Jagtap</h2>
        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
       
      </div>
    </div>
    <div className="carousel-item">
    <div class="col-lg-4 mx-auto d-block">
      <img src={primg1} className=" mx-auto d-block " alt="..."/>
        <h2 class="fw-normal">Manoj S. Jagtap</h2>
        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
       
      </div>
    </div>
    <div className="carousel-item">
    <div class="col-lg-4 mx-auto d-block">
      <img src={primg2} className=" mx-auto d-block " alt="..."/>
        <h2 class="fw-normal">Parent name</h2>
        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
    
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
</div>
    </>
    );
  
}