import React from "react";

// Components
import Image from "../Image/Image";

// Images
import landingSectionImage from '../../assets/images/landing-section.png';
import Button from "../Button/Button";

// CSS
import './landing-section.css';

function LandingSection() {
  return (
    <section className="landing-section">
      <div>
        <Image iSrc={landingSectionImage} />
      </div>
      <div className="text">
        <h1><span className="wavy-text">Marketing.</span> <br />
          It won’t cost you an arm and a leg!</h1>
        <p>
          We create innovative marketing solutions for cost conscious marketers who does not compromise on the results!
        </p>
        <Button text='Try now' />
      </div>
    </section>
  );
}

export default LandingSection;
