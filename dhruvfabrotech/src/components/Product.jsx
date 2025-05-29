import React from "react";
import { Link } from 'react-router-dom';
import './Product.css';
import { FaPhone,FaBullseye,FaEye,FaRocket, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn, FaWhatsapp, FaTwitter, FaYoutube } from 'react-icons/fa';
import { useRef } from 'react';

const Product = () => {

const cardData = [
  {
    title: 'Industrial Fermenter',
    image: '/images/product1.webp',
    lines: [
      'Bio Fertilizer Plant In Maharastra',
      'Manufacturer Of Industrial Fermenter- At Pune'
    ],
    link: "/industrial"
  },
  {
    title: 'Laboratory Fermenter',
    image: '/images/product2.webp',
    lines: [
      'Manufacturer Of Industrial Fermenter- Maharashtra',
      'Industrial Fermenter- In Maharashtra'
    ],
    link: "/laboratory"
  },
  {
    title: 'Bioreactor',
    image: '/images/product3.webp',
    lines: [
      'Bio Fertilizer Making Machine',
      'Autoclavable Glass Fermenter',
      'Cell Culture Bioreactor'
    ]
  },
  {
    title: 'Batch Type Fermenter',
    image: '/images/product4.webp',
    lines: [
      'Bioreactors Fermentors System',
      'Bio Fertilizers Manufacturing Plant',
      'Bio Fertilizer Plant 1500 liter/hr'
    ]
  },
    {
    title: 'Pilot Scale Fermentor',
    image: '/images/product5.webp',
    lines: [
      'Microbial Fermenter Production machine',
      'Continuous Fermenter machine',
      'Low Cost Biofertilizer Production Machinery'
    ]
  },
    {
    title: 'Fermenter Machine',
    image: '/images/product6.webp',
    lines: [
      'Industrial Fermenter Machine',
      'Mother Culture Fermentor',
      'Semi Automatic Industrial Bio Fermenter'
    ]
  },
    {
    title: 'Biopesticide Manufacturing Plant',
    image: '/images/product7.webp',
    lines: [
      'Biofertilizer Manufacturing Plant Medium Scale',
      'Automatic Industrial Bio Fermenter',
      'Two Stage Fermentor Model For Biofertilizer Production'
    ]
  },
    {
    title: 'Laboratory Bioreactor',
    image: '/images/product8.webp',
    lines: [
      'Algee Photo bio reactor',
      'Fermentor Bio Reactor',
      'Cell Culture Bioreactor'
    ]
  },
      {
    title: 'Fermentation project',
    image: '/images/product9.webp',
    lines: [
      'Fermentation Project Solutions',
      'Bio Pesticide Fermenter',
      'Turnkey Fermentation Project'
    ]
  },
      {
    title: 'Bio Fertilizer Plants',
    image: '/images/product10.webp',
    lines: [
      'Bio Fertilizer Making Machines',
      'Bio Fertilizer Manufacturing Machine',
      'Bio Fertilizer Manufacturing Plant Machine'
    ]
  },
      {
    title: 'Bioreactor fermenter',
    image: '/images/product11.webp',
    lines: [
      'Industrial Scale Fermenter',
      'Production Scale Fermentor',
      'Cell Culture Fermenter'
    ]
  },
      {
    title: 'Bench Type Fermenter',
    image: '/images/product12.webp',
    lines: [
      'Automatic Bio Fertilizer Processing Plant',
      'Bench Type Fermenter',
      'Bench Type Fermenter'
    ]
  },
      {
    title: 'Glass Fermenter',
    image: '/images/product13.webp',
    lines: [
      'Research Grade Fermentor',
      'Fermenter Bioreactor',
      'Autoclavable Glass Fermenter'
    ]
  },
      {
    title: 'Bioreactor Fermentor',
    image: '/images/product14.webp',
    lines: [
      'Two Stage Fermentor Model For Biofertilizer Production',
      'Industrial Scale Fermenter',
      'Industrial Fermenter 1000 Liter/Hr'
    ]
  },
      {
    title: 'Bio Fertilizer Plant',
    image: '/images/product15.webp',
    lines: [
      'Low Cost Biofertilizer Production Machinery in Pune',
      'Biomass Production Bio Fertilizer Plant, Automation Grade:',
      'Bio Fertilizer Production Plant'
    ]
  },
      {
    title: 'Photo Bio Reactor',
    image: '/images/product16.webp',
    lines: [
      'Algae Photo Bioreactor',
      'Lab Scale Photo Bioreactor',
    ]
  },
      {
    title: 'Lab Fermenter',
    image: '/images/product17.webp',
    lines: [
      'Stainless Steel Fermenter',
'     Industrial And Laboratory Fermenter',
    ]
  },
      {
    title: 'Autoclavable Glass fermentor',
    image: '/images/product18.webp',
    lines: [
      'Autoclavable Lab Fermenter',
'     Laboratory Glass Fermenter',
    ]
  },
      {
    title: 'Fermentor Bioreactor',
    image: '/images/product19.webp',
    lines: [
      'Production Scale Fermenter',
    ]
  },
      {
    title: 'Fully Automatic Research Grade Fermenter',
    image: '/images/product20.webp',
    lines: [
      'Fully Automatic Glass Fermenter for Resaerch',
    ]
  },
      {
    title: 'Biofermentor',
    image: '/images/product21.webp',
    lines: [
      'Bio Fertilizer Production Machine',
    ]
  },
      {
    title: 'Consultancy Services',
    image: '/images/product22.webp',
    lines: [
      'Microbial Production Plant',
    ]
  },
      {
    title: 'Fermenter',
    image: '/images/product23.webp',
    lines: [
      'Production Fermentor In-Situ Steam Sterilizable',
    ]
  },
        {
    title: 'Autoclavable Glass fermenter',
    image: '/images/product24.webp',
    lines: [
      'Glass Fermentor collage',
    ]
  },
        {
    title: 'Laboratory Fermentor',
    image: '/images/product25.webp',
    lines: [
      'Parallel Fermenter Set',
    ]
  },
        {
    title: 'New Items',
    image: '/images/product26.webp',
    lines: [
      'Industrial Fermenter 1500 Liter/Hr',
      'Bio Fertilizer Plant 1000 liter/hr',
    ]
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
                        <Link to = "/contact">CONTACT</Link>
              
                      </nav>
                      <Link to= "/contact">
                      <button className="enquire-btn300">ENQUIRE NOW</button>
                      </Link>
                    </div>



      <section className="product-section">
        <div className="product-content">
          <h2 className="product-title">OUR PRODUCT</h2>
          <p className="product-subtitle">Comprehensive range of bio fertilizer plants, fermenters, and bioreactors for all your biotechnology needs.</p>
        </div>
      </section>

 <div className="product-cards-container">
      {cardData.map((card, index) => (
        <div className="product-card" key={index}>
          <img src={card.image} alt={card.title} className="card-image" />
          <div className="product-card-content">
            <h3 className="product-card-title">{card.title}</h3>
            <div className="product-card-description">
              {card.lines.map((line, i) => (
                <span key={i}>{line}</span>
              ))}
            </div>
            <div className="product-view-all-container">
              <Link to={card.link} className="product-view-all">View All</Link>
            </div>
          </div>
        </div>
      ))}
    </div>


    <div className="cta-section">
      <h2 className="cta-heading">Ready to Start Your Project?</h2>
      <p className="cta-subtext">
        Contact us today for expert consultation on bio fertilizer plants and fermenter equipment
      </p>
      <div className="cta-buttons">
      <Link to = "/contact">  <button className="btn secondary">Schedule Visit</button></Link>
      </div>
    </div>



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
                    
                          <div className="footer-bottom300">
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
export default Product;