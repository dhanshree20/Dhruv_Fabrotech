import React from "react"
import './IndustrialFermenter.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn, FaWhatsapp, FaTwitter, FaPhoneAlt,FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ProductDetail from "./ProductDetail";
import { useRef, useEffect, useState } from 'react';
import img1 from "../assets/industry1.webp";
import img2 from "../assets/industry2.webp";
import img3 from "../assets/industry3.webp";
import img4 from "../assets/industry4.webp";
import img5 from "../assets/industry5.webp";
import img6 from "../assets/industry6.webp";
import img7 from "../assets/industry7.webp";
import img8 from "../assets/industry8.webp";
import img9 from "../assets/industry9.webp";
import img10 from "../assets/industry10.webp";
import img11 from "../assets/industry11.webp";
import img12 from "../assets/industry12.webp";
import img13 from "../assets/industry13.webp";
import img14 from "../assets/industry14.webp";
import img15 from "../assets/industry15.webp";
import img16 from "../assets/industry16.webp";
import { FaArrowUp } from 'react-icons/fa';

const IndustrialFermenter = () => {

  
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
    title: "Bio Fertilizer Plant In Maharastra",
    price: "1420600",
    image: img1,
    specs: [
      { label: "Capacity", value: "500 Liters/hr" },
      { label: "Material", value: "Stainless Steel" },
      { label: "Automation Grade", value: "Semi-Automatic" },
      { label: "Type", value: "Bio Fertilizer Plant" },
      { label: "Color", value: "Silver" },
      { label: "Frequency", value: "50 Hz"},
      { label: "Minimum order quantity", value: "1 Piece"},
    ],
    highlight: "",
    description: "Customised machine Easy to operate Maintenance free Special purpose machine Contamination free. Temp control Areation"
  },
  {
    title: "Manufacturer Of Industrial Fermenter- At Pune",
    price: "866000 ",
    image: img2,
    specs: [
      { label: "Capacity", value: "500 Liters" },
      { label: "Material", value: "Stainless Steel" },
      { label: "Automation Grade", value: "Semi-Automatic" },
      { label: "Pressure", value: "2 Bar" },
      { label: "Color", value: "Silver" }
    ],
    highlight: "We are the leading Manufacturers Of Biofertilizers Plant at Maharastra.",
    description: "Our range of products include fermenter project management consultancy.Providing you the best range of microbial fermenter production plant, fermenter cell cultural production plant, bio fertilizer production plant and bio pesticide production plant with effective & timely delivery."
  },
  {
    title: "Agro Biotech Production Fermentor",
    price: "651000",
    image: img3,
    specs: [
      { label: "Capacity", value: "1000 Liters" },
      { label: "Material", value: "ss304" },
      { label: "Automation Grade", value: "Semi-Automatic" },
      { label: "Pressure", value: "3 Bar" },
      { label: "Surface Finish	", value: "Mirror" },
      { label: "Features	", value: "Special" },
      { label: "Brand	", value: "DF" },
    ],
    highlight: "",
    description: "Our range of products include fermenter project.Providing you the best range of microbial fermenter production plant, fermenter cell cultural production plant, bio fertilizer production plant and bio pesticide production plant with effective & timely delivery."
  },
  {
    title: "Secondary Metabolite Production Plant",
    price: "670000 ",
    image: img4,
    specs: [
      { label: "Type of Bioreactor", value: "Sparged Stirred Tank" },
      { label: "Capacity", value: "1 KL" },
      { label: "Material", value: "Stainless Steel" },
       { label: "Secondary Treatment Type", value: "Mirror" },
        { label: "Applicable Industries", value: "Bio pharma" },
         { label: "Max Pressure", value: "2 kg" },
           { label: "Max Temperature", value: "130" },
      { label: "Automation Grade", value: "Semi-Automatic" },
      { label: "Surface Finishing", value: "Mirror" },
      { label: "Minimum order quantity:", value: "1" }
    ],
    highlight: "",
    description: "Our range of products include fermenter project.Providing you the best range of microbial fermenter production plant, fermenter cell cultural production plant, bio fertilizer production plant and bio pesticide production plant with effective & timely delivery."
  },
  {
    title: "Enzyme Production Plant",
    price: "762000 ",
    image: img5,
    specs: [
      { label: "Capacity", value: "1000 Liters" },
      { label: "Material", value: "SS 304" },
      { label: "Automation Grade", value: "Automatic" },
      { label: "Pressure", value: "2 Bar" },
      { label: "Surface Finish", value: "Mirror" },
      { label: "Features", value: "Special" },
      { label: "Color", value: "Silver" },
      { label: "Brand", value: "DF" },
      { label: "Power Source", value: "415 VAC" },
      { label: "Minimum order quantity:", value: "1 Piece" },
    ],
    highlight: "",
    description: "Our range of products include fermenter project.Providing you the best range of microbial fermenter production plant, fermenter cell cultural production plant, bio fertilizer production plant and bio pesticide production plant with effective & timely delivery."
  },
    {
    title: "Industrial Fermenter 1500 Liter/Hr",
    price: "1507000  ",
    image: img6,
    specs: [
      { label: "Capacity", value: "1000 Liters" },
      { label: "Material", value: "SS 304" },
      { label: "Automation Grade", value: "Manual" },
      { label: "Pressure", value: "2 Bar" },
      { label: "Surface Finish", value: "Mitt" },
      { label: "Features", value: "Special" },
      { label: "Brand", value: "DF" },
      { label: "Power Source", value: "415 VAC" },
      { label: "Minimum order quantity:", value: "1 Piece" },
    ],
    highlight: "",
    description: "Our range of products include fermenter project.Providing you the best range of microbial fermenter production plant, fermenter cell cultural production plant, bio fertilizer production plant and bio pesticide production plant with effective & timely delivery."
  },
    {
    title: "Industrial Fermenter 500 Liter/Hr",
    price: "956000 ",
    image: img7,
    specs: [
      { label: "Capacity", value: "500 Liters" },
      { label: "Material", value: "SS" },
      { label: "Automation Grade", value: "Manual" },
      { label: "Pressure", value: "2 Bar" },
      { label: "Surface Finish", value: "Glossy" },
      { label: "Features", value: "Special" },
      { label: "Color", value: "Silver" },
      { label: "Brand", value: "DF" },
      { label: "Power Source", value: "Electric" },
      { label: "Power Supply", value: "415 V" },
      { label: "Minimum order quantity:", value: "1 Unit" },
    ],
    highlight: "",
    description: "Our range of products include fermenter project.Providing you the best range of microbial fermenter production plant, fermenter cell cultural production plant, bio fertilizer production plant and bio pesticide production plant with effective & timely delivery."
  },
    {
    title: "Secondary Metabolite Production Plant",
    price: "1250000 ",
    image: img8,
    specs: [
      { label: "Capacity", value: "2000 Liters" },
      { label: "Material", value: "Stainless Steel" },
      { label: "Automation Grade", value: "Semi-Automatic" },
      { label: "Pressure", value: "2 Bar" },
      { label: "Surface Finish", value: "Matt" },
      { label: "Color", value: "Silver" },
      { label: "Brand", value: "DF" },
      { label: "Power Source", value: "415 VAC" },
      { label: "Minimum order quantity:", value: "1 Unit" },
    ],
    highlight: "",
    description: "Our range of products include fermenter project.Providing you the best range of microbial fermenter production plant, fermenter cell cultural production plant, bio fertilizer production plant and bio pesticide production plant with effective & timely delivery."
  },
    {
    title: "Agro Biotech Production Fermentor",
    price: "560000 ",
    image: img9,
    specs: [
      { label: "Capacity", value: "100 Liters" },
      { label: "Material", value: "SS 304" },
      { label: "Automation Grade", value: "Manual" },
      { label: "Pressure", value: "2 kg" },
      { label: "Surface Finish", value: "Mirror" },
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
    title: "Advanced Research Fermentor",
    price: "551000 ",
    image: img10,
    specs: [
      { label: "Capacity", value: "500 Liters" },
      { label: "Material", value: "SS 304" },
       { label: "Size", value: "Small" },
      { label: "Automation Grade", value: "Automatic" },
      { label: "Color", value: "Silver" },
      { label: "Power Source", value: "Electric" },
    ],
    highlight: "",
    description: "Our range of products include fermenter project.Providing you the best range of microbial fermenter production plant, fermenter cell cultural production plant, bio fertilizer production plant and bio pesticide production plant with effective & timely delivery."
  },
    {
    title: "Microbial Bioreactor System",
    price: "546600 ",
    image: img11,
    specs: [
      { label: "Type of Bioreactor", value: "Fluidized" },
      { label: "Capacity(KL)", value: "2 KL" },
      { label: "Material", value: "Stainless Steel" },
      { label: "Color", value: "White" },
      { label: "Design Type", value: "Modern" },
      { label: "Voltage", value: "220 V" },
      { label: "Minimum order quantity:", value: "1 Unit" },
    ],
    highlight: "",
    description: "Our range of products include fermenter project.Providing you the best range of microbial fermenter production plant, fermenter cell cultural production plant, bio fertilizer production plant and bio pesticide production plant with effective & timely delivery."
  },
    {
    title: "Pilot Scale Fermentor",
    price: "363000 ",
    image: img12,
    specs: [
      { label: "Capacity", value: "upto 50 Liters" },
      { label: "Material", value: "SS 304" },
      { label: "Automation Grade", value: "Automatic" },
      { label: "Pressure", value: "1 Bar" },
      { label: "Surface Finish", value: "Mirror" },
      { label: "Features", value: "Special" },
      { label: "Color", value: "Silver" },
      { label: "Brand", value: "DF MAKE" },
      { label: "Minimum order quantity:", value: "1 Piece" },
    ],
    highlight: "",
    description: "Our range of products include fermenter project.Providing you the best range of microbial fermenter production plant, fermenter cell cultural production plant, bio fertilizer production plant and bio pesticide production plant with effective & timely delivery."
  },
    {
    title: "Pilot Scale Fermentor",
    price: "670000 ",
    image: img13,
    specs: [
      { label: "Capacity", value: "200 Liters" },
      { label: "Usage/Application", value: "Agricultural" },
      { label: "Min Operating Temperature", value: "25 DEG" },
      { label: "I Deal In", value: "New Only" },
      { label: "Color", value: "Silver" },
      { label: "Frequency", value: "50 Hz" },
      { label: "Voltage", value: "230 V" },
      { label: "Minimum order quantity:", value: "1 Unit" },
    ],
    highlight: "",
    description: "Our range of products include fermenter project.Providing you the best range of microbial fermenter production plant, fermenter cell cultural production plant, bio fertilizer production plant and bio pesticide production plant with effective & timely delivery."
  },
    {
    title: "Automated CIP Fermenter",
    price: "984000 ",
    image: img14,
    specs: [
      { label: "Capacity", value: "100 Liters" },
      { label: "Usage/Application", value: "Industrial" },
      { label: "Packaging Type", value: "Wooden box" },
      { label: "Power Consumption", value: "415 V" },
      { label: "Machine Type", value: "Automatic" },
      { label: "Frequency", value: "50 Hz" },
      { label: "Voltage", value: "230 V" },
      { label: "Storage Material	", value: "SS" },
      { label: "Minimum order quantity:", value: "1 Unit" },
    ],
    highlight: "",
    description: "Our range of products include fermenter project.Providing you the best range of microbial fermenter production plant, fermenter cell cultural production plant, bio fertilizer production plant and bio pesticide production plant with effective & timely delivery."
  },
    {
    title: "Fed Batch Fermentor",
    price: "760000 ",
    image: img15,
    specs: [
      { label: "Capacity", value: "More than 100 Liters" },
      { label: "Usage/Application	", value: "Industrial" },
      { label: "Packaging Type", value: "Wooden box" },
      { label: "Power Consumption", value: "230" },
      { label: "Machine Type", value: "Manual" },
      { label: "Frequency", value: "50 Hz" },
      { label: "Voltage", value: "230 V" },
      { label: "Storage Material", value: "SS" },
      { label: "Minimum order quantity:", value: "1 Unit" },
    ],
    highlight: "",
    description: "Our range of products include fermenter project.Providing you the best range of microbial fermenter production plant, fermenter cell cultural production plant, bio fertilizer production plant and bio pesticide production plant with effective & timely delivery."
  },
    {
    title: "Industrial Fermentation Plant",
    price: "1300000 ",
    image: img16,
    specs: [
      { label: "Capacity", value: "2000 Liters" },
      { label: "Usage/Application	", value: "Industrial" },
      { label: "Packaging Type", value: "Wooden box" },
      { label: "Power Consumption", value: "415 V" },
      { label: "Machine Type", value: "Manual" },
      { label: "Frequency", value: "50 Hz" },
      { label: "Voltage", value: "415 V" },
      { label: "Equipment Type", value: "SPECIAL" },
      { label: "Storage Material", value: "YES" },
      { label: "Country of Origin", value: "Made in India" },
      { label: "Minimum order quantity:", value: "1 Piece" },
    ],
    highlight: "",
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
                <Link to = "/contact">CONTACT</Link>
      
              </nav>
              <Link to= "/contact">
              <button className="enquire-btn10">ENQUIRE NOW</button>
              </Link>
            </div>


        <section className="industrial-section">
        <div className="industrial-content">
          <h2 className="industrial-title">Industrial Fermenter</h2>
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
              <p>©DHRUV FABROTECH. All Rights Reserved (Terms of Use) Made By<span className="highlight"> DW Innovation</span></p>
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

export default IndustrialFermenter;