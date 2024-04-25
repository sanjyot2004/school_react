import React from 'react';
import SportPage from "./SportPage1";
import FacultyPage from './FacultyPage1';
import Opportunities from './Opportunities1';

const AllFeatures = () => {
  return (
    <>
     <div>
        <FacultyPage />
      </div>

      <div>
        <Opportunities />
      </div>

      
      <div>
        <SportPage />
      </div>
      <div>
      <footer className="py-3 my-4">
    <h6 className='' style={{textAlign:'center'}}>Gurukul Public School</h6>
    <hr/>
    <p className="text-center text-body-secondary"> © 2024 Gurukul Public School. All rights reserved</p>
    <p className="text-center text-body-secondary"> Designed By : Web Spirits , IT Department of SCOE , Kopargaon</p>
  </footer>
      </div>
    </>
  );
}

export default AllFeatures;
