import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn, FaWhatsapp, FaTwitter, FaYoutube } from 'react-icons/fa';
import farmerImage from '../assets/ourstory.webp';
import herosImage from "../assets/homepageimg1.avif";
import { useRef, useEffect } from 'react';
import { CiDeliveryTruck } from "react-icons/ci";
import { AiOutlineProduct } from "react-icons/ai";
import { MdOutlineHighQuality } from "react-icons/md";
import { RiMessage2Line } from "react-icons/ri";

const Header = () => {

    const features = [
  {
    icon: <CiDeliveryTruck />,
    title: "Timely Delivery",
    description: "We understand the value of your time. At DHRUV FABROTECH, we ensure on-time delivery of all our machinery and equipment."
  },
  {
    icon: <AiOutlineProduct />,
    title: "Wide Product Range",
    description: "From Bio Fertilizer Plants to Lab-Scale and Industrial Fermenters, we offer a comprehensive range of products under one roof. "
  },
  {
    icon: <MdOutlineHighQuality />,
    title: "High-Quality Products",
    description: "All our machines and components undergo rigorous testing and quality checks to ensure long-term performance, durability, and efficiency."
  },
  {
    icon: <RiMessage2Line />,
    title: "Customer-Centric Approach",
    description: "Your satisfaction is our priority. We work closely with each client to understand their specific needs and provide personalized solutions."
  }
];

const products = [
  {
    title: "Industrial Fermenter",
    description: "High-capacity fermenters for industrial bio-fertilizer production",
    image: "/images/industrial.webp", // Replace with your own
  },
  {
    title: "Laboratory Fermenter",
    description: "Precise laboratory-scale fermenters for research and development",
    image: "/images/laboratory.webp", // Replace with your own
  },
  {
    title: "Bioreactor",
    description: "Advanced bioreactor technology for biotechnology applications",
    image: "/images/bioreactor.webp", // Replace with your own
  },
  {
    title: "Batch Type Fermenter",
    description: "Tailored fermentation setups for specific industry requirements",
    image: "images/batchtype.webp", // Replace with your own
  },
];


// videos
const videos = [
  {
    src: "/video1.mp4",
    title: "Laboratory Fermenter machine",
  },
  {
    src: "/video2.mp4",
    title: "Bioreactors Fermentors System",
  },
  {
    src: "/video3.mp4",
    title: "Bio Fertilizers Manufacturing Plant",
  },
];


  const videoRefs = useRef([]);

  const handleVideoClick = (index) => {
    const video = videoRefs.current[index];

    if (video.paused) {
      video.muted = false;
      video.play();
    } else {
      video.pause();
    }
  };



  // testimonials

    const testimonials = [
    {
      name: "Chandrakant Balkawade",
      title1: "Sustainability Advocate",
      lines: [
      "Location: Pune, Maharashtra.",
      " Product Purchased: Bio Fertilizer Plant.",
      " Highlight: Excellent Response,  Great Quality, Timely Delivery."
    ]
    },
    {
      name: "Akshay",
      title1: "Business Owner",
      lines: [
      "Location: Pune, Maharashtra.",
      " Product Purchased: Laboratory Fermenter.",
      " Highlight: Excellent Response,  Great Quality, Timely Delivery."
    ]
    },
    {
      name: "Suren Panda",
      title1: "Interior Designer",
      lines: [
      "Location: Kolkata, West Bengal.",
      " Product Purchased: Fertilizer Plants.",
      " Highlight: Excellent Response."
    ]
    },
        {
      name: "Prakash Pradhan",
      title1: "Interior Designer",
       lines: [
      "Location: Bhawanipatna, Odisha.",
      " Product Purchased: Fermentation Equipment.",
      " Highlight: Excellent Response,  Great Quality, Timely Delivery."
    ]
    },
        {
      name: "Jayanta K Panchal",
      title1: "Interior Designer",
      lines: [
      "Location: Raigad, Maharashtra.",
      " Product Purchased: Fully Automatic Paper Bags Making Machine.",
      " Highlight: Excellent Response."
    ]
    },
    
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: 1,
          behavior: "smooth",
        });
      }
    }, 50); // controls the scroll speed

    return () => clearInterval(interval);
  }, []);

  return (
    <header>
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
        <button className="enquire-btn100">ENQUIRE NOW</button>
        </Link>
      </div>
      
<section className="hero-section1" style={{ backgroundImage: `url(${herosImage})` }}>
  <div className="overlay"></div> {/* Transparent dark layer */}
  <div className="hero-content10">
    <h1>DHRUV FABROTECH</h1>
    <p className="contact1">
      Trusted Manufacturer of Bio Fertilizer Plants, Bio Pesticide Machinery, Industrial & Laboratory Fermenters.
    </p>
      <Link to = "/about">
      <button className="Know-more">Know More</button>
      </Link>
      <Link to = "/product">
       <button className="ourbtn" >Our Product</button>
      </Link>
  </div>
</section>


    <div className="biofertilizer-container">
      <div className="biofertilizer-left">
        <img src={farmerImage} alt="Farmer with fertilizer products" />
      </div>
      <div className="biofertilizer-right">
        <h2>
          ABOUT US
        </h2>
        <p>
          Since 2010, DHRUV FABROTECH has been at the forefront of industrial manufacturing,
        providing high-quality Bio Fertilizer Plants, Bio Pesticide Machinery, and Fermenters.
        With clients across industries, we are committed to sustainable and efficient solutions.
        </p>
        <p>
          "We are specialized manufacturer of Bio Fertilizer projects.We do special fermenters upto 1000 lits working capacity." Our company is Sole Proprietorship (Individual), based. Under the guidance of our Proprietor, “Vijay Choudhari(CEO)”, we are capable of meeting the exact demands of customers.
        </p>
        <Link to = "/about">
      <button className="learn-more-btn">Learn More</button>
      </Link>
      </div>
    </div>

 <section className="featured-section">
      <h2 className="featured-title">Featured Products</h2>
      <p className="featured-subtitle">
        Discover our range of high-quality bio fertilizer and fermenter equipment
      </p>
      <div className="card-container">
        {products.map((product, index) => (
          <div className="card1" key={index}>
            <img src={product.image} alt={product.title} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{product.title}</h3>
              <p className="card-description">{product.description}</p>
              <Link to= "/product"><button className="learn-more">Learn More</button></Link>
            </div>
          </div>
        ))}
      </div>
                    <Link to="/product">
      <button className="view-all-btn">View All Categories</button>
      </Link>
    </section>




  <section className="why-shop-section">
      <h2>WHY SHOP WITH US</h2>
      <div className="why-shop-grid">
        {features.map((item, index) => (
          <div className="why-card" key={index}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>




<div className="video-section10">
      <h2>Product Videos</h2>
      <div className="video-grid10">
        {videos.map((video, index) => (
          <div className="video-card10" key={index}>
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={video.src}
              className="video-element10"
              autoPlay
              muted
              loop
              onClick={() => handleVideoClick(index)}
            />
            <h3 className="video-title">{video.title}</h3>
          </div>
        ))}
      </div>
    </div>



    <div className="testimonials-section">
      <p className="testimonials-label">Testimonials</p>
      <h2 className="testimonials-title">What Our Customers Say</h2>
      <p className="testimonials-description">
        Don’t just take our word for it—hear from the people who have experienced the
        quality and impact of our Products.
      </p>
      <div className="testimonials-grid" ref={scrollRef}>
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-header">
              <div>
                <p className="name">{t.name}</p>
              </div>
            </div>
            <p className="quote">“{t.lines}”</p>
          </div>
        ))}
      </div>
    </div>

<div className="cta-section">
      <h2 className="cta-heading">Ready to Start Your Project?</h2>
      <p className="cta-subtext">
        Contact us today for expert consultation on bio fertilizer plants and fermenter equipment
      </p>
      <div className="cta-buttons100">
      <Link to = "/contact"> 
       <button className="schbtn">Schedule Visit</button>
       </Link>
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

      <div className="footer-bottom100">
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
    </header>

    
  );
};

export default Header;
