import React from "react";

// Components
import Image from "../Image/Image";

// Images
import eCommerce from '../../assets/images/e-commerce.png';
import clould from '../../assets/images/clould.png';
import mobile from '../../assets/images/mobile.png';
import advertising from '../../assets/images/advertising.png';
// CSS
import './services.css';

const services = [
  {
    img: eCommerce,
    title: 'eCommerce Competitive Analtics',
    describtion: 'Map your brand to the eCommerce landscape to enhance market share with real-time market intelligence.'
  }, {
    img: clould,
    title: 'Brand Hygiene Protection',
    describtion: 'Get the full visibility and control of your marketing campaigns with advanced algorithms that safeguard brands from safety and infringement issues.'
  }, {
    img: mobile,
    title: 'Mobile Identity Solution',
    describtion: 'Seamless identity verification to eliminate risk and fraud at a single go with minimal user inpuat and reducing friction in identity validation'
  }, {
    img: advertising,
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
