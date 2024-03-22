import React from 'react';
import img4 from './saraswati ma.webp';
import { Link } from 'react-router-dom';

export const About = () =>{
  return (
    <>
    <div className='about-block'>
    <div className='container'>
      <div className="row flex-lg-row-reverse align-items-center g-5 py-6">
      <div className="col-10 col-sm-8 col-lg-6">
        <div className='saraswati-img'>
        <img src={img4} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="500" height="300" loading="lazy" />
        </div>      
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">About Us</h1>
        <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <Link to="/More"><button type="button" className="btn btn-outline-danger btn-lg px-4 me-md-2" style={{color:"#ff4081"}}>More Info</button></Link>
          
        </div>
      </div>
    </div>
    </div>  
    </div>
      </>
  );
}
