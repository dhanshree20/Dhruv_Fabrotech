import React from "react"
import './LaboratoryFermenter.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn, FaWhatsapp, FaTwitter, FaPhoneAlt,FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import ProductDetail from "./ProductDetail";
import img1 from "../assets/laboratory1.webp";
import img2 from "../assets/laboratory2.webp";
import img3 from "../assets/laboratory3.webp";
import img4 from "../assets/laboratory4.webp";
import img5 from "../assets/laboratory5.webp";
import img6 from "../assets/laboratory6.webp";
import img7 from "../assets/laboratory7.webp";
import img8 from "../assets/laboratory8.webp";
import img9 from "../assets/laboratory9.webp";
import img10 from "../assets/laboratory10.webp";
import img11 from "../assets/laboratory11.webp";
import img12 from "../assets/laboratory12.webp";
import img13 from "../assets/laboratory13.webp";
import img14 from "../assets/laboratory14.webp";
import { FaArrowUp } from 'react-icons/fa';


const LaboratoryFermenter = () => {

  
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
        title: "Manufacturer Of Industrial Fermenter- Maharashtra",
        price: "1051000",
        image: img1,
        specs: [
          { label: "Capacity", value: "1000 Liters" },
          { label: "Material", value: "Stainless Steel" },
          { label: "Automation Grade", value: "Semi-Automatic" },
          { label: "Size", value: "Customised" },
          { label: "Pressure", value: "2 bar" },
          { label: "Surface Finish", value: "Mirror"},
          { label: "Features", value: "Customised"},
          { label: "Minimum order quantity", value: "1 Piece"},
        ],
        highlight: "We are the leading Manufacturers Of Biofertilizers Plant at Maharastra.",
        description: "Our range of products include fermenter project management consultancy.Providing you the best range of microbial fermenter production plant, fermenter cell cultural production plant, bio fertilizer production plant and bio pesticide production plant with effective & timely delivery."
      },
      {
        title: "Industrial Fermenter- In Maharashtra",
        price: "1365000 ",
        image: img2,
        specs: [
         { label: "Capacity", value: "1000 Liters" },
          { label: "Material", value: "Stainless Steel 304" },
          { label: "Automation Grade", value: "Semi-Automatic" },
          { label: "Size", value: "Customised" },
          { label: "Pressure", value: "3 bar" },
          { label: "Surface Finish", value: "Matt"},
          { label: "Features", value: "Customised"},
          { label: "Brand", value: "DHRUV FABROTECH"},
          { label: "Power Source", value: "3 PHASE"},
          { label: "Minimum order quantity", value: "1 Piece"},
        ],
        highlight: "",
        description: "Customised machine Easy to operate Maintenance free Special purpose machine Contamination freeTemp control Areation."
      },
      {
        title: "Biofertilizer Production Fermenter",
        price: "1210000",
        image: img3,
        specs: [
         { label: "Capacity", value: "2000 Liters" },
          { label: "Material", value: "Stainless Steel 304" },
          { label: "Automation Grade", value: "Semi-Automatic" },
          { label: "Color", value: "Silver" },
          { label: "Pressure", value: "2 bar" },
          { label: "Surface Finish", value: "Matt"},
          { label: "Features", value: "Special"},
          { label: "Brand", value: "DF MAKE"},
          { label: "Power Source", value: "415 VAC"},
          { label: "Minimum order quantity", value: "1 Piece"},
        ],
        highlight: "",
        description: "Our range of products include fermenter project.Providing you the best range of microbial fermenter production plant, fermenter cell cultural production plant, bio fertilizer production plant and bio pesticide production plant with effective & timely delivery."
      },
      {
        title: "Biofertilizer Manufacturing Plant Three Fermentor Model",
        price: "1010000 ",
        image: img4,
        specs: [
          { label: "Capacity", value: "1000 liter/hr" },
          { label: "Material", value: "Stainless Steel" },
          { label: "Automation Grade", value: "Round" },
          { label: "Shape", value: "Mirror" },
          { label: "Colour", value: "Silver" },
          { label: "Plant Type", value: "Biofertilizer Manufacturing Plant Three Fermentor Model" },
          { label: "Minimum order quantity:", value: "1 Unit" }
        ],
        highlight: "",
        description: "Our range of products include fermenter project.Providing you the best range of microbial fermenter production plant, fermenter cell cultural production plant, bio fertilizer production plant and bio pesticide production plant with effective & timely delivery."
      },
      {
        title: "Biofertilizer Production Fermenter",
        price: "670000 ",
        image: img5,
        specs: [
          { label: "Capacity", value: "1000 Liters" },
          { label: "Material", value: "SS" },
          { label: "Automation Grade", value: "Semi-Automatic" },
          { label: "Size", value: "Large" },
          { label: "Color", value: "Silver" },
          { label: "Voltage", value: "220 V" },
          { label: "Minimum order quantity:", value: "1 Piece" },
        ],
        highlight: "",
        description: "Our range of products include fermenter project.Providing you the best range of microbial fermenter production plant, fermenter cell cultural production plant, bio fertilizer production plant and bio pesticide production plant with effective & timely delivery."
      },
        {
        title: "200 Liter Insitu Fermenter Bioreactor",
        price: "873000  ",
        image: img6,
        specs: [
          { label: "Material", value: "SS" },
          { label: "Automation Grade", value: "Semi Automatic" },
          { label: "Max Pressure", value: "3 kg" },
          { label: "Color", value: "Silver" },
          { label: "Max Temperature", value: "120 Deg" },
          { label: "Power Supply", value: "AC" },
          { label: "Minimum order quantity:", value: "1 Piece" },
        ],
        highlight: "",
        description: "Customised machine Easy to operate Maintenance free Special purpose machine Contamination free Temp control Areation."
      },
        {
        title: "Laboratory Fermenter machine",
        price: "548000 ",
        image: img7,
        specs: [
          { label: "Capacity", value: "50 to 500 L" },
          { label: "Material", value: "SS" },
          { label: "Automation Grade", value: "Semi-Automatic" },
          { label: "Temperature Range", value: "0-121 Deg C" },
          { label: "Material Grade", value: "SS 304" },
          { label: "Tank Orientation", value: "Vertical" },
          { label: "Phase", value: "Single Phase" },
          { label: "Brand", value: "DF" },
          { label: "Operating Voltage", value: "415 V" },
          { label: "Finishing Type", value: "Mirror Finish" },
        ],
        highlight: "Special design,Also avialable in Matte Finish. low maintenance, user friendly customised design easy to operate. Without agitator only areation",
        description: ""
      },
        {
        title: "Laboratory Autoclavable Fermentor And Bioreactor",
        price: "265000 ",
        image: img8,
        specs: [
          { label: "Capacity", value: "20 Liters" },
          { label: "Usage/Application", value: "Industrial" },
          { label: "Power Consumption", value: "1 HP" },
          { label: "Machine Type", value: "Automatic" },
          { label: "Frequency", value: "50 Hz" },
          { label: "Voltage", value: "220 V" },
          { label: "Minimum order quantity:", value: "1 Unit" },
        ],
        highlight: "",
        description: "Our range of products include fermenter project.Providing you the best range of microbial fermenter production plant, fermenter cell cultural production plant, bio fertilizer production plant and bio pesticide production plant with effective & timely delivery."
      },
        {
        title: "High Cell Growth Fermentation Technology",
        price: "330000 ",
        image: img9,
        specs: [
          { label: "Capacity", value: "upto 5 Liters" },
          { label: "Usage/Application", value: "Industrial" },
          { label: "Packaging Type", value: "Wooden" },
          { label: "Power Consumption", value: "10 Unit" },
          { label: "Machine Type", value: "Automatic" },
          { label: "Frequency", value: "50 Hz" },
          { label: "Voltage", value: "230 V" },
          { label: "Equipment Type", value: "Special" },
          { label: "Storage Material", value: "Stainless Steel" },,
          { label: "Minimum order quantity:", value: "1 Unit" },
        ],
        highlight: "",
        description: "Our range of products include fermenter project.Providing you the best range of microbial fermenter production plant, fermenter cell cultural production plant, bio fertilizer production plant and bio pesticide production plant with effective & timely delivery."
      },
        {
        title: "Small Scale Fermenter",
        price: "88500 ",
        image: img10,
        specs: [
          { label: "Capacity", value: "upto 5 Liters" },
          { label: "Usage/Application", value: "Industrial" },
          { label: "Packaging Type", value: "Wooden" },
          { label: "Power Consumption", value: "5 Unit" },
          { label: "Machine Type", value: "Manual" },
          { label: "Frequency", value: "50 Hz" },
          { label: "Voltage", value: "230 V" },
          { label: "Equipment Type", value: "Special" },
          { label: "Storage Material", value: "Stainless Steel" },
          { label: "Minimum order quantity:", value: "1 Unit" },
        ],
        highlight: "",
        description: "Our range of products include fermenter project.Providing you the best range of microbial fermenter production plant, fermenter cell cultural production plant, bio fertilizer production plant and bio pesticide production plant with effective & timely delivery."
      },
        {
        title: "Mother Culture Fermentor",
        price: "281000 ",
        image: img11,
        specs: [
          { label: "Capacity", value: "20 Liters" },
          { label: "Usage/Application", value: "Industrial" },
          { label: "Packaging Type", value: "SPECIAL" },
          { label: "Power Consumption", value: "230" },
          { label: "Machine Type", value: "Semi Automatic" },
          { label: "Frequency", value: "50 Hz" },
          { label: "Voltage", value: "230 V" },
          { label: "Equipment Type", value: "Special" },
          { label: "Country of Origin", value: "Made in India" },,
          { label: "Minimum order quantity:", value: "1 Unit" },
        ],
        highlight: "",
        description: "Our range of products include fermenter project.Providing you the best range of microbial fermenter production plant, fermenter cell cultural production plant, bio fertilizer production plant and bio pesticide production plant with effective & timely delivery."
      },
        {
        title: "Insitu Lab Fermenter",
        price: "685000 ",
        image: img12,
        specs: [
            { label: "Model Name/Number", value: "BLF" },
            { label: "Usage/Application", value: "Industrial" },
          { label: "Capacity", value: "Less than 1 KL" },
          { label: "Material", value: "SS " },
          { label: "Automation Grade", value: "Semi-Automatic" },
          { label: "Pressure", value: "4.2 Bar" },
          { label: "Surface Finish", value: "Mirror Finish" },
          { label: "Max Temperature", value: "125 Deg C" },
          { label: "Grade Standard", value: "SS 304" },
          { label: "Brand", value: "DF MAKE" },
        ],
        highlight: "Grade also available in SS 316.Separate Steam generator, Skid mounted special design, best performance.",
        description: ""
      },
        {
        title: "In Situ Fermenter",
        price: "751000 ",
        image: img13,
        specs: [
          { label: "Capacity", value: "50 Liters" },
          { label: "Usage/Application", value: "Industrial" },
          { label: "Packaging Type", value: "Wooden" },
          { label: "Power Consumption", value: "10" },
          { label: "Machine Type", value: "Semi Automatic" },
          { label: "Frequency", value: "50 Hz" },
          { label: "Voltage", value: "230 V" },
          { label: "Equipment Type", value: "Special" },
          { label: "Storage Material", value: "Stainless Steel" },,
          { label: "Minimum order quantity:", value: "1 Piece" },
        ],
        highlight: "",
        description: "Our range of products include fermenter project.Providing you the best range of microbial fermenter production plant, fermenter cell cultural production plant, bio fertilizer production plant and bio pesticide production plant with effective & timely delivery."
      },
        {
        title: "Autoclavable Glass Fermenter",
        price: "352000 ",
        image: img14,
        specs: [
          { label: "Capacity", value: "3 Liters" },
          { label: "Material Grade", value: "Glass" },
          { label: "Tank Orientation", value: "Vertical" },
          { label: "Material", value: "SS" },
          { label: "Brand", value: "DF" },
          { label: "Features", value: "SPECIAL" },
          { label: "Power", value: "230 " },
          { label: "Temperature", value: "35 DEG" },
          { label: "Minimum order quantity:", value: "1 Unit" },
        ],
        highlight: "",
        description: "Our range of products include fermenter project.Providing you the best range of microbial fermenter production plant, fermenter cell cultural production plant, bio fertilizer production plant and bio pesticide production plant with effective & timely delivery."
      },
  
    ];

    return (
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
          <h2 className="industrial-title">Laboratory Fermenter</h2>
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
export default LaboratoryFermenter;