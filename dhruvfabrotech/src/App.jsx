import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Product from './components/Product';
import IndustrialFermenter from './components/IndustrialFermenter';
import LaboratoryFermenter from './components/LaboratoryFermenter';


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
      </Routes>
    </Router>
 
    </>
  )
}

export default App
