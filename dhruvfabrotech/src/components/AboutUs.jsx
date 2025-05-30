import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';
import { FaPhone,FaBullseye,FaEye,FaRocket, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn, FaWhatsapp, FaTwitter, FaYoutube } from 'react-icons/fa';
import farmerImage from '../assets/ourstory.webp';
import { useRef, useEffect, useState } from 'react';
import { CiDeliveryTruck } from "react-icons/ci";
import { BiSolidFactory } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaScaleBalanced } from "react-icons/fa6";
import { IoDiamondOutline } from "react-icons/io5";
import { LuAlarmClockPlus } from "react-icons/lu";
import { FaArrowUp } from 'react-icons/fa';

const AboutUs = () => {

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


    // why choose us

    const features = [
  {
    icon: <FaRegStar />, // Use emojis or image paths
    title: "Superior Quality Products",
    description:
      "We manufacture high-quality bio fertilizer plants and fermenters using the best materials and latest technology.",
  },
  {
    icon: <IoIosPeople />,
    title: "Experienced Professionals",
    description:
      "Our team consists of experienced professionals with deep expertise in biotechnology and manufacturing.",
  },
  {
    icon: <FaSearch />,
    title: "Excellent Quality Controllers",
    description:
      "Rigorous quality control processes ensure that every product meets the highest standards.",
  },
  {
    icon: <BiSolidFactory />,
    title: "Well-furnished Infrastructural Unit",
    description:
      "State-of-the-art manufacturing facility equipped with modern tools and machinery.",
  },
  {
    icon: <CiDeliveryTruck />,
    title: "Wide Distribution Network",
    description:
      "Extensive distribution network ensures timely delivery across India.",
  },
  {
    icon: <FaScaleBalanced />,
    title: "Ethical Business Policies",
    description:
      "We conduct business with integrity, transparency, and ethical practices.",
  },
  {
    icon: <IoDiamondOutline />,
    title: "Transparent Dealings",
    description:
      "Complete transparency in pricing, terms, and business transactions.",
  },
  {
    icon: <LuAlarmClockPlus />,
    title: "On Time Delivery",
    description:
      "Reliable delivery schedules to meet your project timelines.",
  },
];

//certification
const imageList = [
  '/cert1.webp',
  '/cert2.webp',
  '/cert3.webp',
  '/cert4.webp',
  '/cert5.webp',
  '/cert6.webp',
];

 const scrollRef = useRef(null); 
const [paused, setPaused] = useState(false);

useEffect(() => {
  const interval = setInterval(() => {
    if (!paused && scrollRef.current) {
      scrollRef.current.scrollBy({ left: 1, behavior: "smooth" });
    }
  }, 30);
  return () => clearInterval(interval);
}, [paused]);


// fact sheet


const basicInfo = [
  { label: "Nature of Business", value: "Manufacturer" },
  { label: "Additional Business", value: "Factory / Manufacturing" },
  { label: "Company CEO", value: "Vijay Choudhari" },
  { label: "Registered Address", value: "S. No. 25/12, Pune- 411041, Maharashtra, India" },
  { label: "Total Number of Employees", value: "Upto 10 People" },
  { label: "GST Registration Date", value: "01-07-2017" },
  { label: "Legal Status of Firm", value: "Proprietorship" },
  { label: "Annual Turnover", value: "40 L - 1.5 Cr" },
  { label: "GST Partner Name", value: "Vijay Vinayak Choudhari" },
];



const InfoTable = ({ title, data }) => (
  <div className="info-table">
    <h3>{title}</h3>
    <table>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td className="label">{item.label}</td>
            <td className="value">{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);


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
                    <button className="enquire-btn500">ENQUIRE NOW</button>
                    </Link>
                  </div>

      <section className="about-section">
        <div className="about-content">
          <h2 className="about-title">ABOUT US</h2>
          <p className="about-subtitle">Established in 2010 at Pune, Maharashtra, we are recognized manufacturers of bio fertilizer and fermenter equipment.</p>
        </div>
      </section>



    <div className="biofertilizer-container20">
      <div className="biofertilizer-left20">
        <img src={farmerImage} alt="Farmer with fertilizer products" />
      </div>
      <div className="biofertilizer-right20">
        <h1>
          Our Story
        </h1>
        <p>
          Since 2010, DHRUV FABROTECH has been at the forefront of industrial manufacturing,
        providing high-quality Bio Fertilizer Plants, Bio Pesticide Machinery, and Fermenters.
        With clients across industries, we are committed to sustainable and efficient solutions.
        </p>
        <p>
          "We are specialized manufacturer of Bio Fertilizer projects.We do special fermenters upto 1000 lits working capacity." Our company is Sole Proprietorship (Individual), based. Under the guidance of our Proprietor, “Vijay Choudhari(CEO)”, we are capable of meeting the exact demands of customers.
        </p>
      </div>
    </div>


<div className="company-info-section">
  <h2>Company Information</h2>
  <div className="info-image-layout">
    <div className="scrollable-tables">
      <div className="scroll-wrapper">
        <InfoTable title="Basic Information" data={basicInfo} />
        
      </div>
    </div>
    <div className="info-image">
      <img src="/images/aboutimg.avif" alt="Company Visual" />
    </div>
  </div>
</div>




 <div className="features-container">
  <h1>Why Choose Us</h1>
      <h2>
        We have marked a valuable place in the market by offering high quality products.
      </h2>
      <p>
        Here are the features for which we have received appreciation from our clients.
      </p>
      <div className="features-grid">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>


<section className="mission-section">
      <h2 className="section-title">OUR MISSION, VISION & GOALS</h2>
      <div className="card-container">
        <div className="card">
          <FaBullseye className="icon" />
          <h3>Our Mission</h3>
          <p>
            To design and deliver high-quality, cost-effective machinery for bio fertilizer and pesticide production.To promote eco-friendly practices through technology-driven manufacturing solutions.
          </p>
        </div>
        <div className="card">
          <FaEye className="icon" />
          <h3>Our Vision</h3>
          <p>
         To be a globally recognized leader in providing sustainable and innovative fermentation and bio-fertilizer plant solutions that contribute to agricultural growth and environmental well-being.
          </p>
        </div>
        <div className="card">
          <FaRocket className="icon" />
          <h3>Our Goal</h3>
          <p>
            Deliver customized fermenter systems up to 1000 liters working capacity to meet specific client needs.Expand our reach across India and international markets with reliable bio-manufacturing solutions.
            </p>
        </div>
      </div>
    </section>


    <div className="certifications-section">
      <h2>Our Certifications, Infrastructure & Warehouse</h2>
      <div className="shadow">
      <div className="certifications-carousel" ref={scrollRef}>
        {imageList.map((img, index) => (
          <img key={index} src={img} alt={`Cert ${index + 1}`} />
        ))}
      </div>
      </div>
    </div>


<div className="video-section20">
      <h2>Product Videos</h2>
      <div className="video-grid20">
        {videos.map((video, index) => (
          <div className="video-card20" key={index}>
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={video.src}
              className="video-element20"
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


<div className="cta-section">
      <h2 className="cta-heading">Ready to Start Your Project?</h2>
      <p className="cta-subtext">
        Contact us today for expert consultation on bio fertilizer plants and fermenter equipment
      </p>
      <div className="cta-buttons">
       <Link to = "/contact">  <button className="secondary">Schedule Visit</button></Link>
      </div>
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
    
          <div className="footer-bottom200">
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
    </header>

    
  );
};

export default AboutUs;