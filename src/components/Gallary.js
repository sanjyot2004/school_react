import React from 'react';
import gallary from './gallary.jpg';

export default function Gallary() {
    return (
        <div className='container'>
        <div className="gallary-block">
        <div >
                 <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 " style={{textAlign: "center"}}>Gallary</h1>
            <hr />
            <div className="row text-center">
                <div className="col"> 
                    <div className="card" style={{ width: "400px=", height: "217px" }}>
                        <img src={gallary} className="card-img-top" alt="..." />
                    </div>
                </div>

                <div className="col"> 
                    <div className="card" style={{ width: "400px=", height: "217px" }}>
                        <img src={gallary} className="card-img-top" alt="..." />
                    </div>
                </div>

                <div className="col"> 
                    <div className="card" style={{ width: "400px=", height: "217px" }}>
                        <img src={gallary} className="card-img-top" alt="..." />
                    </div>
                </div>
            </div>


            <div className="row text-center">
                <div className="col"> 
                    <div className="card" style={{ width: "400px=", height: "217px" }}>
                        <img src={gallary} className="card-img-top" alt="..." />
                    </div>
                </div>

                <div className="col"> 
                    <div className="card" style={{ width: "400px=", height: "217px" }}>
                        <img src={gallary} className="card-img-top" alt="..." />
                    </div>
                </div>

                <div className="col"> 
                    <div className="card" style={{ width: "400px=", height: "217px" }}>
                        <img src={gallary} className="card-img-top" alt="..." />
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
}
