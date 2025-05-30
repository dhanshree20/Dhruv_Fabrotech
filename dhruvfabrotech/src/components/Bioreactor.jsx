import React from "react"
import './Bioreactor.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn, FaWhatsapp, FaTwitter, FaPhoneAlt,FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import ProductDetail from "./ProductDetail";
import img1 from "../assets/bioreactor1.webp";
import img2 from "../assets/bioreactor2.webp";
import img3 from "../assets/bioreactor3.webp";
import img4 from "../assets/bioreactor4.webp";
import img5 from "../assets/bioreactor5.webp";
import img6 from "../assets/bioreactor6.webp";
import img7 from "../assets/bioreactor7.webp";
import img8 from "../assets/bioreactor8.webp";
import img9 from "../assets/bioreactor9.webp";
import img10 from "../assets/bioreactor10.webp";
import img11 from "../assets/bioreactor11.webp";
import img12 from "../assets/bioreactor12.webp";
import img13 from "../assets/bioreactor13.webp";
import { FaArrowUp } from 'react-icons/fa';

const Bioreactor = () =>{

  
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
            title: "Bio Fertilizer Making Machine",
            price: "573000",
            image: img1,
            specs: [
              { label: "Material", value: "Stainless Steel" },
              { label: "Automation Grade", value: "Automatic" },
              { label: "Form", value: "Dhruv Fabrotech" },
              { label: "Usage/Application	", value: "Agriculture" },
              { label: "Raw Material Processed", value: "SS 304"},
              { label: "Product Type", value: "Special"},
            ],
            highlight: "We are the leading Manufacturers Of Biofertilizers Plant at Maharastra.",
            description: "Our range of products include fermenter project management consultancy.Providing you the best range of microbial fermenter production plant, fermenter cell cultural production plant, bio fertilizer production plant and bio pesticide production plant with effective & timely delivery."
          },
          {
            title: "Autoclavable Glass Fermenter",
            price: "253000 ",
            image: img2,
            specs: [
             { label: "Capacity", value: "upto 50 Liters" },
              { label: "Material", value: "Stainless Steel" },
              { label: "Automation Grade", value: "Semi-Automatic" },
              { label: "Size", value: "Customised" },
              { label: "Pressure", value: "3 bar" },
              { label: "Surface Finish", value: "Mirror"},
              { label: "Features", value: "Special"},
              { label: "Color", value: "Special"},
              { label: "Brand", value: "DHRUV FABROTECH"},
              { label: "Power Source", value: "230 V AC"},
              { label: "Minimum order quantity", value: "2 Piece"},
            ],
            highlight: "",
            description: "Our range of products include fermenter project.Providing you the best range of microbial fermenter production plant, fermenter cell cultural production plant, bio fertilizer production plant and bio pesticide production plant with effective & timely delivery."
          },
          {
            title: "Cell Culture Bioreactor",
            price: "290000",
            image: img3,
            specs: [
             { label: "Type of Bioreactor", value: "Sparged Stirred Tank" },
              { label: "Material", value: "Borosil Glass" },
              { label: "Automation Grade", value: "Semi-Automatic" },
              { label: "Secondary Treatment Type	", value: "Electro Polish" },
              { label: "Design Type", value: "Cusotmized" },
              { label: "Applicable Industries", value: "Bio Pharma"},
              { label: "Max Pressure", value: "1 kg"},
              { label: "Max Temperature", value: "50"},
              { label: "Surface Finishing", value: "Glass"},
              { label: "Minimum order quantity", value: "1 Piece"},
            ],
            highlight: "",
            description: "A cell culture production plant is�a facility that grows plant cells in a controlled environment to produce biochemicals, including natural and artificial compounds.�The process involves removing plant cells and growing them in an artificial environment that contains nutrients, growth factors, hormones, and gases"
          },
          {
            title: "Laboratory Bio Reactor",
            price: "190300 ",
            image: img4,
            specs: [
              { label: "Type of Bioreactor", value: "Sparged Stirred Tank" },
              { label: "Material", value: "Borosil Glass" },
              { label: "Capacity(KL)", value: "1 KL" },
              { label: "Secondary Treatment Type", value: "Polish" },
              { label: "Applicable Industries", value: "Research Centers" },
              { label: "Max Pressure", value: "1 kg" },
              { label: "Minimum order quantity:", value: "1 Piece" }
            ],
            highlight: "",
            description: "Our range of products include fermenter project.Providing you the best range of microbial fermenter production plant, fermenter cell cultural production plant, bio fertilizer production plant and bio pesticide production plant with effective & timely delivery."
          },
          {
            title: "Lab Scale Algae Photobioreactor",
            price: "380000 ",
            image: img5,
            specs: [
              { label: "Capacity", value: "50 Liters" },
              { label: "Material", value: "Mild Steel" },
              { label: "Frequency", value: "50 Hz" },
              { label: "Usage/Application", value: "For Measuring and Scale Algae Photobioreactor" },
              { label: "Material of Construction", value: "Glass Line Reactor" },
              { label: "Voltage", value: "220 V" },
              { label: "Minimum order quantity:", value: "1 Unit" },
            ],
            highlight: "",
            description: "Our range of products include fermenter project.Providing you the best range of microbial fermenter production plant, fermenter cell cultural production plant, bio fertilizer production plant and bio pesticide production plant with effective & timely delivery."
          },
            {
            title: "Algae Photo Bioreactor",
            price: "651000  ",
            image: img6,
            specs: [
              { label: "Material", value: "Glass" },
              { label: "Capacity", value: "10 L" },
              { label: "Frequency", value: "50" },
              { label: "Voltage", value: "230v" },
              { label: "Material of Construction", value: "Borosil Glass" },
              { label: "Country of Origin", value: "Made in India" },
              { label: "Minimum order quantity:", value: "1 Piece" },
            ],
            highlight: "",
            description: "Customised machine Easy to operate Maintenance free Special purpose machine Contamination free Temp control Areation."
          },
            {
            title: "Parallel Bioreactors Set",
            price: "266000 ",
            image: img7,
            specs: [
              { label: "Capacity(KL)", value: "1 KL" },
              { label: "Material", value: "SS" },
              { label: "Automation Grade", value: "Automatic" },
              { label: "Type of Bioreactor", value: "Sparged Stirred Tank" },
              { label: "Color", value: "White" },
              { label: "Design Type", value: "Modern" },
              { label: "Voltage", value: "220 V" },
              { label: "Minimum order quantity: ", value: "1 Unit" },
            ],
            highlight: "",
            description: "Our range of products include fermenter project.Providing you the best range of microbial fermenter production plant, fermenter cell cultural production plant, bio fertilizer production plant and bio pesticide production plant with effective & timely delivery."
          },
            {
            title: "Multi Photo Bio-reactor",
            price: "900000 ",
            image: img8,
            specs: [
              { label: "Capacity", value: "10 Liters" },
              { label: "Usage/Application", value: "Research" },
              { label: "Material", value: "Borosilicate Glass" },
              { label: "Material of Construction", value: "Borosil Glass" },
              { label: "Frequency", value: "50 Hz" },
              { label: "Voltage", value: "230 V" },
              { label: "Country of Origin", value: "Made in India" },
              { label: "Minimum order quantity:", value: "1 Piece" },
            ],
            highlight: "",
            description: "2 lit to10 lits total capacity Special design Maintenance free Light sources Temp control Agitation Aeration or CO2 gas"
          },
            {
            title: "Various Lab Bioreactors",
            price: "250300 ",
            image: img9,
            specs: [
              { label: "Type of Bioreactor", value: "Sparged Stirred Tank " },
              { label: "Material", value: "Borosil Glass" },
              { label: "Secondary Treatment Type", value: "Electro Polish" },
              { label: "Applicable Industries", value: "Research Centers" },
              { label: "Max Pressure", value: "1 kg" },
              { label: "Max Temperature", value: "45 Deg" },
              { label: "Automation Grade", value: "Semi" },
              { label: "Surface Finishing", value: "Mirror" },
              { label: "Minimum order quantity:", value: "1 Piece" },
            ],
            highlight: "",
            description: "There are several types of bioreactors used in laboratories, including: Batch A contained environment in which nothing is added or removed while the culture is inside"
          },
            {
            title: "Low Cost Biofertilizer Production Machinery",
            price: "220000 ",
            image: img10,
            specs: [
              { label: "Capacity", value: "1000 liter/hr" },
              { label: "Material", value: "Stainless Steel" },
              { label: "Automation Grade", value: "Semi Automatic" },
              { label: "Colour", value: "White" },
              { label: "Shape", value: "Round" },
              { label: "Type", value: "Low Cost Biofertilizer Production Machinery" },
              { label: "Minimum order quantity:", value: "2 Unit" },
            ],
            highlight: "",
            description: "Our range of products include fermenter project.Providing you the best range of microbial fermenter production plant, fermenter cell cultural production plant, bio fertilizer production plant and bio pesticide production plant with effective & timely delivery."
          },
            {
            title: "Autocleveble bio Fermenter",
            price: "92500 ",
            image: img11,
            specs: [
              { label: "Capacity", value: "upto 50 Liters" },
              { label: "Material", value: "Glass" },
              { label: "Automation Grade", value: "Manual" },
              { label: "Surface Finish", value: "Glossy" },
              { label: "Features", value: "Simple" },
              { label: "Color", value: "Silver" },
              { label: "Brand", value: "DF" },
              { label: "Power Source", value: "230 V" },
              { label: "Minimum order quantity:", value: "1 Unit" },
            ],
            highlight: "",
            description: "Our range of products include fermenter project.Providing you the best range of microbial fermenter production plant, fermenter cell cultural production plant, bio fertilizer production plant and bio pesticide production plant with effective & timely delivery."
          },
            {
            title: "Laboratory Glass Reactor",
            price: "454000 ",
            image: img12,
            specs: [
              { label: "Capacity(Litre)", value: "500 L" },
              { label: "Material", value: "Stainless Steel" },
              { label: "Max Design Pressure", value: "5 Bar" },
              { label: "Max Pressure", value: "0-3 kg " },
              { label: "Storage Material", value: "Gases" },
              { label: "Orientation", value: "Horizontal Orientation" },
              { label: "Country of Origin", value: "Made in India" },
              { label: "Minimum order quantity:", value: "1 Unit" },
            ],
            highlight: "",
            description: "Our range of products include fermenter project.Providing you the best range of microbial fermenter production plant, fermenter cell cultural production plant, bio fertilizer production plant and bio pesticide production plant with effective & timely delivery."
          },
            {
            title: "Laboratory Autoclavable Fermentor And Bioreactor",
            price: "251500 ",
            image: img13,
            specs: [
              { label: "Capacity", value: "upto 5 Liters" },
              { label: "Usage/Application", value: "Industrial" },
              { label: "Packaging Type", value: "Wooden" },
              { label: "Power Consumption", value: "230 V" },
              { label: "Machine Type", value: "Semi Automatic" },
              { label: "Frequency", value: "50 Hz" },
              { label: "Voltage", value: "230 V" },
              { label: "Equipment Type", value: "Special" },
              { label: "Minimum order quantity:", value: "1 Piece" },
            ],
            highlight: "",
            description: "A laboratory autoclavable fermenter and bioreactor is�a tool used in microbiology, biotechnology, and pharmaceutical manufacturing to sterilize and culture microorganisms and cells.�They are essential for precise control and eliminating contaminants during bioprocesses."
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
          <h2 className="industrial-title">Bioreactor</h2>
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
export default Bioreactor;