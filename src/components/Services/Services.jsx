import React from "react";

// Components
import Image from "../Image/Image";

// CSS
import './services.css';

const services = [
  {
    img: '../../src/assets/images/e-commerce.png',
    title: 'eCommerce Competitive Analtics',
    describtion: 'Map your brand to the eCommerce landscape to enhance market share with real-time market intelligence.'
  }, {
    img: '../../src/assets/images/clould.png',
    title: 'Brand Hygiene Protection',
    describtion: 'Get the full visibility and control of your marketing campaigns with advanced algorithms that safeguard brands from safety and infringement issues.'
  }, {
    img: '../../src/assets/images/mobile.png',
    title: 'Mobile Identity Solution',
    describtion: 'Seamless identity verification to eliminate risk and fraud at a single go with minimal user inpuat and reducing friction in identity validation'
  }, {
    img: '../../src/assets/images/advertising.png',
    title: 'Ad Traffic Validation',
    describtion: 'mFilterIt’s ad fraud detection solution provides deterministic ad-fraud detection & prevention for both App & Web campaigns and help advertisers save money with better ROI.'
  }
];

function Services() {
  return <section className="services">
    <h2 className="section-heading">Our Services</h2>
    <div className="grid-items">
      {
        services.map((serv, i) => {
          return (
            <div className="card" key={i}>
              <div className="img">
                <Image iSrc={serv.img} />
              </div>
              <div className="text">
                <h3>{serv.title}</h3>
                <p>{serv.describtion}</p>
                <span>Read More...</span>
              </div>
            </div>
          );
        })
      }
    </div>
  </section>;
}

export default Services;
