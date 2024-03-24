import React from 'react'
import sclogo from './scclogoo.jpg'; 
import { Link } from 'react-router-dom';




export const Navbar = () =>{

return(
    <>
    
    <div className='Navbar-block'>
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2    ">
    <div class="col-md-2 mb-2 mb-md-0">
      <div class="col-md-2">
      <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">

        <img src={sclogo} height="100px" width="200px" style={{marginLeft:"30%"}}/>

      </a>
    </div>
    </div>
    
  <div className='Navbutton'>
    <h1>Gurukul School</h1>
    <p>At. Ladgaon Tal. Vaijapur Dist. Chh.Sambhajinagar</p>
    {/*<ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 ">
      <li><Link to="/" class="btn btn-outline"style={{color:"white",margin:"10px"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16" style={{marginRight:"2px",marginBottom:"5px"}}>
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"></path>
  <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"></path>
</svg> Home</Link></li>
      <li><Link to="/More" class="btn btn-outline" style={{color:"white",margin:"10px"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16" style={{marginRight:"2px",marginBottom:"5px"}}>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
</svg>About Us</Link></li>
      <li><a href="#" class="btn btn-outline"style={{color:"white",margin:"10px"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filter-square-fill" viewBox="0 0 16 16" style={{marginRight:"2px",marginBottom:"5px"}}>
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm.5 5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1M4 8.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m2 3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5"/>
</svg>Features</a></li>
      
      <li><a href="#" class="btn btn-outline"style={{color:"white",margin:"10px"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" style={{marginRight:"5px",marginBottom:"5px"}}>
  <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
  <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"/>
</svg>Gallary</a></li>
      <li><Link to="/Contact" class="btn btn-outline"style={{color:"white",margin:"10px"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16" style={{marginRight:"5px",marginBottom:"5px"}}>
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg>Contact</Link></li>
    

     
    </ul>*/}
</div>
    <div class="col-md-2">
      
    </div>
    </header>
    </div>


    </>
    );
  
}