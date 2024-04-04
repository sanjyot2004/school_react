import React from 'react';
import SportPage from "./SportPage";
import FacultyPage from './FacultyPage';
import Opportunities from './Opportunities';

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
    </>
  );
}

export default AllFeatures;
