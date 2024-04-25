import React from 'react';

import t1 from './t1.jpg';
import t2 from './t2.jpg';
import t3 from './t3.jpg';
import t4 from './t4.jpg';
import t5 from './t5.jpg';
import t6 from './t6.jpg';

export const SportsPage1 = () => {
  

  return (
    <div className="sports-achievements" id='SportPage-block'>
      <h1 className="sports-achievements-heading">Sports</h1><br/><br/>

      <div className="sports-achievements-paragraph">
        <h4 className="text-center mb-4">
          Engaging in sports and achieving championships hold immense significance beyond mere victories. <br/>Sports instill invaluable life lessons, teaching individuals the essence of discipline, perseverance, and resilience. 
        
        </h4>
      </div>

      
      <div className="row text-center">
                <div className="col"> 
                    <div id='cardp' className="card" style={{ width: "400px=", height: "217px" }}>
                        <img src={t1} className="card-img-top" alt="..." />
                    </div>
                </div>

                <div className="col"> 
                    <div id='cardp' className="card" style={{ width: "400px=", height: "217px" }}>
                        <img src={t2} className="card-img-top" alt="..." />
                    </div>
                </div>

                <div className="col"> 
                    <div id='cardp' className="card" style={{ width: "400px=", height: "217px" }}>
                        <img src={t3} className="card-img-top" alt="..." />
                    </div>
                </div>
            </div>


            <div className="row text-center">
                <div className="col"> 
                    <div id='cardp' className="card" style={{ width: "400px=", height: "217px" }}>
                        <img src={t4} className="card-img-top" alt="..." />
                    </div>
                </div>

                <div className="col"> 
                    <div id='cardp' className="card" style={{ width: "400px=", height: "217px" }}>
                        <img src={t5} className="card-img-top" alt="..." />
                    </div>
                </div>

                <div className="col"> 
                    <div id='cardp' className="card" style={{ width: "400px=", height: "217px" }}>
                        <img src={t6} className="card-img-top" alt="..." />
                    </div>
                </div>
            </div>


  
        </div>
        
      
    
  );
};

export default SportsPage1;
