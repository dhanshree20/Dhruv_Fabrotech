import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Product from './components/Product';
import IndustrialFermenter from './components/IndustrialFermenter';
import LaboratoryFermenter from './components/LaboratoryFermenter';
import Bioreactor from './components/Bioreactor';
import BatchTypeFermenter from './components/BatchTypeFermenter';
import PilotScale from './components/PilotScale';


function App() {
 

  return (
    <>

    <Router>
      
      <Routes>
        <Route path="/" Component={Header} />
        <Route path="/about" Component={AboutUs} />
        <Route path="/product" Component={Product} />
        <Route path="/contact" Component={ContactUs} />
        <Route path="/industrial" Component={IndustrialFermenter} />
        <Route path="/laboratory" Component={LaboratoryFermenter} />
        <Route path="/bioreactor" Component={Bioreactor} />
        <Route path="/batchtype"  Component={BatchTypeFermenter} />
        <Route path="/pilotcsale" Component={PilotScale} />
      </Routes>
    </Router>
 
    </>
  )
}

export default App
