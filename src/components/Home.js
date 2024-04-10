import React from "react";
import Carousel from "./Carousel";
import { About } from "./About";
import Features from "./Features";
import Gallary from "./Gallary";
import Review from "./Review";
import { Button } from "./Button";
import { Footer } from "./Footer";
import Contact2 from "./Contact2";







export const Home = () =>{

 

  return (
   <>

       <div>
         <Carousel />
      </div>

    <div>
      <About />
  </div>

    <div>
      <Features />
    </div>

    <div>
    <Gallary />
    </div>
    
    <div>
      <Button />
    </div>

    <div>
      <Review />
    </div>
       
        
    <div>
      <Footer />
    </div>
    
    <div>
      <Contact2 />
    </div>
    
   </>
  );
}

export default Home;
