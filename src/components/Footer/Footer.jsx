import React from "react";

// Images
import logo from '../../assets/images/mFilterIt.png';
import twitter from '../../assets/images/twitter.png';
import instagram from '../../assets/images/instagram.png';
import facebook from '../../assets/images/facebook.png';
import youtube from '../../assets/images/youtube.png';
import linkedin from '../../assets/images/linkedin.png';

// CSS 
import './footer.css';
import Button from "../Button/Button";

function Footer() {
  return (
    <footer>
      <div className="body">
        <article>
          <div className="links">
            <div className="our-solutions">
              <ul>
                <li>Our Solutions</li>
                <li>Ad Traffic Validation</li>
                <li>Brand Hygiene Protection</li>
                <li>eCommerce Competitive Analytics</li>
                <li>Mobile Identity Solution</li>
              </ul>
            </div>
            <div className="quick-links">
              <ul>
                <li>Quick Links</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Careers</li>
                <li>CSR</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="resources">
              <ul>
                <li>Resources</li>
                <li>Blogs</li>
                <li>Case Studies</li>
                <li>Reports</li>
                <li>Newsroom & Media</li>
                <li>PSU Solutions</li>
              </ul>
            </div>
          </div>
          <div className="copy-right">
            <img src={logo} alt="logo" />
            <p>&copy;2023 mFilterIt. All rights reserved</p>
          </div>
        </article>
        <div className="socials">
          <div className="social-icons">
            <img src={twitter} alt="twitter" />
            <img src={instagram} alt="instagram" />
            <img src={facebook} alt="facebook" />
            <img src={youtube} alt="youtube" />
            <img src={linkedin} alt="linkedin" />
          </div>
          <div className="subscribe-box">
            <h3>Sign Up For Our Newsletter *</h3>
            <input type="text" placeholder="email address" />
            <Button text={'Subscribe'} brW={1} pad='5px 25px' fnS={16.8539} fnW={500} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
