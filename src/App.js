import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { More } from "./components/More";
import { Bform } from "./components/Bform";
import { Navbar2 } from "./components/Navbar2";


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

          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
