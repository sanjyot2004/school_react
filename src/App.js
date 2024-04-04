import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { More } from "./components/More";
import { Bform } from "./components/Bform";
import Gallaryblk from "./components/Gallaryblk"; // Corrected import
import FacultyPage from './components/FacultyPage';
import Opportunities from './components/Opportunities';

import { Navbar2 } from "./components/Navbar2";
import SportPage from "./components/SportPage";
import AllFeatures from './components/AllFeatures';
import More1 from './components/More1';
import More2 from './components/More2';

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />
          <div>
            <Navbar2 />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/More" element={<More />} />
            <Route path="/Bform" element={<Bform />} />
            <Route path="/Gallaryblk" element={<Gallaryblk />} /> {/* Corrected route */}
            <Route path="/FacultyPage" element={< FacultyPage/>} />   
            <Route path="/Opportunities" element={< Opportunities/>} />
            <Route path="/SportPage" element={< SportPage/>} />
            <Route path="/AllFeatures" element={<AllFeatures />} /> 
            <Route path="/More1" element={<More1 />} />       
            <Route path="/More2" element={<More2 />} />                 
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
