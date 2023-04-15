import React from "react";

// Images
import leftArrow from '../../assets/images/left-arrow.svg';
import amazon from '../../assets/images/amazon.png';
import ICIC from '../../assets/images/ICIC.png';
import HDFC from '../../assets/images/HDFC.png';
import M from '../../assets/images/M.png';
import flibkart from '../../assets/images/flibkart.png';
import ITC from '../../assets/images/ITC.png';
import rightArrow from '../../assets/images/right-arrow.svg';

// CSS
import './companies.css';

function Companies() {
  return (
    <section className="companies">
      <h2 className="section-heading">Trusted by</h2>
      <div className="imgs">
        <img src={leftArrow} alt="leftArrow" />
        <img src={amazon} alt="amazon" />
        <img src={ICIC} alt="ICIC" />
        <img src={HDFC} alt="HDFC" />
        <img src={M} alt="M" />
        <img src={flibkart} alt="flibkart" />
        <img src={ITC} alt="ITC" />
        <img src={rightArrow} alt="rightArrow" />
      </div>
    </section>
  );
}

export default Companies;
