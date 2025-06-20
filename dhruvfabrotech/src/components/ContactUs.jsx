
import React from 'react';
import './ContactUs.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn, FaWhatsapp, FaTwitter, FaPhoneAlt, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import contactImg from "../assets/contact1.avif";
import { MdLocationOn } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { BiSolidFactory } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { useRef, useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
const ContactUs = () => {


  const boxes = [
    {
      icon: <MdLocationOn />,
      title: 'Office Address',
      description: 'S. No. 5/19/3, Shop No. 1, Dhnyan Kunj, Benkar Wasti Dhayari, Pune - 411041, Maharashtra, India'
    },
    {
      icon: <BiSolidFactory />,
      title: 'Factory Address',
      description: 'Padwal Raghunandan Pune, Maharashtra, India'
    },
    {
      icon: <IoCallSharp />,
      title: 'Call Us',
      description: '+91 080-486-15724'
    },
  ];

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
  return (

    <div>
      {/* Navbar */}
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
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/product">PRODUCT</Link>


        </nav>
        <Link to="/contact">
          <button className="enquire-btn400">ENQUIRE NOW</button>
        </Link>
      </div>
      {/* navbar close */}

      <section className="contact-section">
        <div className="contact-content">
          <h2 className="contact-title">CONTACT US</h2>
          <p className="contact-subtitle">We'd love to hear from you! Whether you have a question about our products, pricing, or need a custom quote —
            our team is here to help.</p>
          <p className="contact-description">
            Reach out to us using the form below or call us directly. We usually respond within 24 hours.
          </p>
        </div>
      </section>


      <div className="support-container">
        {boxes.map((box, index) => (
          <div className="support-box" key={index}>
            <div className="support-icon">{box.icon}</div>
            <h3 className="support-title">{box.title}</h3>
            <p className="support-description">{box.description}</p>

          </div>
        ))}
      </div>




      <div className="contact-wrapper">
        <div className="contact-container">
          <div className="image-section">
            <img src={contactImg} alt="Contact" />
          </div>

          <div className="form-section">
            <h2>Send Us a Message</h2>
            <form className="contact-form">
              <div className="row">
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email Address" />
              </div>
              <div className="row">
                <input type="text" placeholder="Address" />
                <input type="text" placeholder="Mobile Number" />
              </div>
              <div className="row">
                <input type="text" placeholder="Subject" />
              </div>
              <textarea placeholder="Message"></textarea>
              <button className="sendmsg-btn">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </div>

      <div className='map-title'>
        <h1>Our Location</h1>
        <div className="contact-container1">
          <div className="map-container1">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=18.534833,74.131444&z=15&output=embed"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
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
              <li> <Link to="/"> Home  </Link></li>
              <li> <Link to="/about">About Us </Link></li>
              <li> <Link to="/product">Gallery </Link></li>
              <li> <Link to="/contact">Contact US </Link></li>
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

        <div className="footer-bottom400">
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
  );
};

export default ContactUs;
