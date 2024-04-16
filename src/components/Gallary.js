import React from 'react';
import gallary from './gallary.jpg';
import gal1 from './gal1.jpeg'
import gal2 from './gal2.jpeg'
import gal3 from './gal3.jpeg'
import gal4 from './gal4.jpeg'
import gal5 from './gal5.jpeg'
import gal6 from './gal6.jpeg'

export default function Gallary() {
    return (
        <div className='container'>
        <div className="gallary-block">
        <div >
                 <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 " style={{textAlign: "center",fontFamily:"Lucida Console"}}>Gallary</h1>
            <hr />
            <div className="row text-center">
                <div className="col"> 
                    <div className="card" style={{ width: "400px=", height: "217px" }}>
                        <img src={gal1} className="card-img-top" alt="..." />
                    </div>
                </div>

                <div className="col"> 
                    <div className="card" style={{ width: "400px=", height: "217px" }}>
                        <img src={gal2} className="card-img-top" alt="..." />
                    </div>
                </div>

                <div className="col"> 
                    <div className="card" style={{ width: "400px=", height: "217px" }}>
                        <img src={gal3} className="card-img-top" alt="..." />
                    </div>
                </div>
            </div>


            <div className="row text-center">
                <div className="col"> 
                    <div className="card" style={{ width: "400px=", height: "217px" }}>
                        <img src={gal4} className="card-img-top" alt="..." />
                    </div>
                </div>

                <div className="col"> 
                    <div className="card" style={{ width: "400px=", height: "217px" }}>
                        <img src={gal5} className="card-img-top" alt="..." />
                    </div>
                </div>

                <div className="col"> 
                    <div className="card" style={{ width: "400px=", height: "217px" }}>
                        <img src={gal6} className="card-img-top" alt="..." />
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
}
