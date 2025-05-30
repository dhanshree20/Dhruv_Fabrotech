import React from "react"
import './BatchTypeFermenter.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn, FaWhatsapp, FaTwitter, FaPhoneAlt,FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ProductDetail from "./ProductDetail";
import { useRef, useEffect, useState } from 'react';
import img1 from "../assets/batchtype1.webp";
import img2 from "../assets/batchtype2.webp";
import img3 from "../assets/batchtype3.webp";
import img4 from "../assets/batchtype4.webp";
import img5 from "../assets/batchtype5.webp";
import img6 from "../assets/batchtype6.webp";
import img7 from "../assets/batchtype7.webp";
import img8 from "../assets/batchtype8.webp";
import img9 from "../assets/batchtype9.webp";
import { FaArrowUp } from 'react-icons/fa';

const BatchTypeFermenter = () => {

    // scroll bar
     
       const [showScrollTop, setShowScrollTop] = useState(false);
     
       useEffect(() => {
         const handleScroll = () => {
           setShowScrollTop(window.scrollY > 300);
         };
         window.addEventListener('scroll', handleScroll);
         return () => window.removeEventListener('scroll', handleScroll);
       }, []);
     
       const scrollToTop = () => {
         window.scrollTo({ top: 0, behavior: 'smooth' });
       };
   
       const products = [
     {
       title: "Bioreactors Fermentors System",
       price: "1066000",
       image: img1,
       specs: [
         { label: "Capacity", value: ">5 KL" },
         { label: "Material", value: "Stainless Steel" },
         { label: "Material Grade", value: "ss304" },
         { label: "Tank Orientation", value: "Vertical" },
         { label: "Brand", value: "DF" },
         { label: "Power", value: "415v AC"},
         { label: "Minimum order quantity", value: "1 Set"},
       ],
       highlight: "",
       description: "Our range of products include fermenter project.Providing you the best range of microbial fermenter production plant, fermenter cell cultural production plant, bio fertilizer production plant and bio pesticide production plant with effective & timely delivery."
     },
     {
       title: "Bio Fertilizers Manufacturing Plant",
       price: "2445000 ",
       image: img2,
       specs: [
         { label: "Capacity", value: "500 Liters/hr" },
         { label: "Material", value: "Stainless Steel 304" },
         { label: "Automation Grade", value: "Semi-Automatic" },
         { label: "Usage/Application	", value: "Agriculture" },
         { label: "Operating Voltage", value: "415 Vac" },
         { label: "Surface Finishing", value: "Mirror" }
       ],
       highlight: "",
       description: "Our range of products include fermenter project management consultancy.Providing you the best range of microbial fermenter production plant, fermenter cell cultural production plant, bio fertilizer production plant and bio pesticide production plant with effective & timely delivery."
     },
     {
       title: "Bio Fertilizer Plant 1500 liter/hr",
       price: "1750000",
       image: img3,
       specs: [
         { label: "Capacity", value: "500 liter/hr" },
         { label: "Material", value: "Stainless Steel" },
         { label: "Automation Grade", value: "Manual" },
         { label: "Type", value: " Water Storage" },
         { label: "Plant type", value: "Bio Fertilizer Plant" },
         { label: "Shape", value: "Round" },
         { label: "Minimum order quantity: ", value: "1 Piece" },
       ],
       highlight: "",
       description: "Our range of products include fermenter project.Providing you the best range of microbial fermenter production plant, fermenter cell cultural production plant, bio fertilizer production plant and bio pesticide production plant with effective & timely delivery."
     },
     {
       title: "Bio Pesticide Production Plant",
       price: "1660000 ",
       image: img4,
       specs: [
         { label: "Capacity", value: "1000 liter/hr" },
         { label: "Material", value: "Stainless Steel" },
         { label: "Automation Grade", value: "Automatic" },
         { label: "Shape", value: "Round" },
         { label: "Driven Type", value: "Electric" },
         { label: "Production type", value: "Bio Pesticide Production Plant" },
         { label: "Minimum order quantity:", value: "1 Unit" }
       ],
       highlight: "",
       description: "Our range of products include fermenter project.Providing you the best range of microbial fermenter production plant, fermenter cell cultural production plant, bio fertilizer production plant and bio pesticide production plant with effective & timely delivery."
     },
     {
       title: "Industrial Scale Fermenter",
       price: "1500400 ",
       image: img5,
       specs: [
         { label: "Capacity", value: "1000 Liters" },
         { label: "Material", value: "SS 304" },
         { label: "Automation Grade", value: "Semi-Automatic" },
         { label: "Pressure", value: "2 kg" },
         { label: "Surface Finish", value: "Matt" },
         { label: "Features", value: "Special" },
         { label: "Power Supply", value: "230v" },
         { label: "Brand", value: "DF" },
         { label: "Power Source", value: "415 V" },
         { label: "Speed", value: "300rpm" },
         { label: "Minimum order quantity:", value: "1 Unit" },
       ],
       highlight: "",
       description: "Our range of products include fermenter project.Providing you the best range of microbial fermenter production plant, fermenter cell cultural production plant, bio fertilizer production plant and bio pesticide production plant with effective & timely delivery."
     },
       {
       title: "Bio Pharma Production Plant",
       price: "658000",
       image: img6,
       specs: [
         { label: "Capacity", value: "500 liter/hr" },
         { label: "Material", value: "SS" },
         { label: "Automation Grade", value: "Semi Automatic" },
         { label: "Shape", value: "Round" },
         { label: "Frequency", value: "50 Hz" },
         { label: "Voltage", value: "220 V" },
         { label: "Minimum order quantity:", value: "1 Unit" },
       ],
       highlight: "",
       description: "Our range of products include fermenter project.Providing you the best range of microbial fermenter production plant, fermenter cell cultural production plant, bio fertilizer production plant and bio pesticide production plant with effective & timely delivery."
     },
       {
       title: "Production Scale Fermenter",
       price: "1660000 ",
       image: img7,
       specs: [
         { label: "Capacity", value: "2000 Liters" },
         { label: "Material", value: "SS 304" },
         { label: "Automation Grade", value: "Manual" },
         { label: "Pressure", value: "2 Bar" },
         { label: "Surface Finish", value: "Matt" },
         { label: "Features", value: "Special" },
         { label: "Color", value: "Silver" },
         { label: "Brand", value: "DF" },
         { label: "Power Source", value: "415 V" },
         { label: "Minimum order quantity:", value: "1 Unit" },
       ],
       highlight: "",
       description: "Our range of products include fermenter project.Providing you the best range of microbial fermenter production plant, fermenter cell cultural production plant, bio fertilizer production plant and bio pesticide production plant with effective & timely delivery."
     },
       {
       title: "Laboratory bio Fermenter",
       price: "632000 ",
       image: img8,
       specs: [
         { label: "Capacity", value: "Customised" },
         { label: "Usage/Application", value: "Industrial" },
         { label: "Packaging Type", value: "Box" },
         { label: "Power Consumption", value: "415v ac" },
         { label: "Machine Type", value: "Semi-Automatic" },
         { label: "Voltage", value: "415v ac" },
         { label: "Country of Origin", value: "Made in India" },
       ],
       highlight: "",
       description: "A wide variety of bioreactors and fermentors are available in out research lab setup as follows 1 Autoclavable laboratory fermentor2 In situ sterilizable laboratory fermentor3 Solid state fermentor4 Fibrous bed bioreactor5 Pilot scale fermentor6 Algae photobioreactor7 Benchtop autoclavable bioreactor8 Media"
     },
       {
       title: "Manufacturer Of Bio Fertilizer Plant- At All Over Maharashtra",
       price: "1362000 ",
       image: img9,
       specs: [
         { label: "Capacity", value: "From 2000 lit per month onwards" },
         { label: "Product Type", value: "Customised" },
         { label: "Raw Material Processed", value: "SS" },
         { label: "Usage/Application", value: "Agriculture" },
         { label: "Automation Grade", value: "Semi Automatic" },
         { label: "Design Type", value: "Customized" },
         { label: "Surface Finishing", value: "Mirror" },
         { label: "Frequency", value: "50" },
       ],
       highlight: "We are the leading Manufacturers Of Biofertilizers Plant at Maharastra.",
       description: "Our range of products include fermenter project.Providing you the best range of microbial fermenter production plant, fermenter cell cultural production plant, bio fertilizer production plant and bio pesticide production plant with effective & timely delivery."
     },

   ];

    return(
      <div>
<div className="top-bar">
                          <div className="contact-info">
                            <span>080-486-15724</span>
                            <span>business@dhruvfabrotech.in</span>
                          </div>
                          <div className="social-icons">
                            <FaFacebookF />
                            <FaTwitter />
                            <FaLinkedinIn />
                            <FaInstagram />
                            <FaWhatsapp />
                          </div>
                        </div>
                                    <div className="main-nav">
              <div className="logo">
                <img src="/dhruvfabrotechlogo.webp" alt="dhruvfabrotechlogo" />
              </div>
              <nav className="nav-links">
                <Link to = "/">HOME</Link>
                <Link to = "/about">ABOUT</Link>
                <Link to = "/product">PRODUCT</Link>
                
      
              </nav>
              <Link to= "/contact">
              <button className="enquire-btn10">ENQUIRE NOW</button>
              </Link>
            </div>


        <section className="industrial-section">
        <div className="industrial-content">
          <h2 className="industrial-title">Batch Type Fermenter</h2>
          <p className="industrial-subtitle">Our range of products include fermenter project.Providing you the best range of microbial fermenter production plant, fermenter cell cultural production plant, bio fertilizer production plant and bio pesticide production plant with effective & timely delivery.</p>
        </div>
      </section>


<div style={{ padding: "20px" }}>
      {products.map((product, index) => (
        <ProductDetail key={index} product={product} />
      ))}
    </div>

            <button className="scroll-to-top" onClick={scrollToTop}>
              <FaArrowUp />
            </button>

            <a
      href="https://wa.me/919999999999" // Replace with your WhatsApp number
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://img.icons8.com/ios-filled/50/25D366/whatsapp.png"
        alt="WhatsApp"
        className="whatsapp-icon"
      />
    </a>

       <footer className="footer10">
            <div className="footer-top10">
              <div className="footer-column">
                <h3>Quick links</h3>
            <ul>
                  <li> <Link to ="/"> Home  </Link></li>
                  <li> <Link to ="/about">About Us </Link></li>
                  <li> <Link to ="/product">Gallery </Link></li>
                  <li> <Link to ="/contact">Contact US </Link></li>
            </ul>
              </div>
      
      
              <div className="footer-column">
                <h3>Our Products</h3>
                <ul>
                  <li>Industrial Fermenter</li>
                  <li>Laboratory Fermenter</li>
                  <li>Bioreactor</li>
                  <li>Batch Type Fermenter</li>
                </ul>
              </div>
      
              <div className="footer-column">
                <h3>Contact</h3>
                <ul className="contact-info">
                  <li><FaPhone /> 08048615724</li>
                  <li><FaEnvelope /> business@dhruvfabrotech.in</li>
                  <li><FaMapMarkerAlt />S. No. 5/19/3, Shop No. 1, Dhnyan Kunj, Benkar Wasti
                     Dhayari, Pune - 411041, Maharashtra, India</li>
                </ul>
              </div>
            </div>
      
            <div className="footer-bottom10">
              <p>©DHRUV FABROTECH. All Rights Reserved (Terms of Use) Made By<span className="highlight"> DW INNOVATION PVT. LTD.</span></p>
              <div className="social-icons1">
                <FaFacebook />
                <FaInstagram />
                <FaLinkedin />
                <FaTwitter />
                <FaYoutube />
              </div>
            </div>
          </footer>
      </div>
    )
}
export default BatchTypeFermenter;