import React from "react";

// Images
import stazplay from '../../assets/images/stazplay.png';
import careem from '../../assets/images/careem.png';
import vilrginn from '../../assets/images/vilrginn.png';
import pidilite from '../../assets/images/pidilite.png';

// CSS
import './testmonials.css';
import Button from "../Button/Button";

const cards = [
  {
    imgSrc: stazplay,
    name: 'Hamad Malik',
    jobTitle: 'CMO',
    body: 'We started working with mFilterlt and almost instantly saw value is subscribing to the service as it helped us challenge and optimize traffic sources, weed out under performing partners and scale with confidence leading to marketing budget optimization.',
  }, {
    imgSrc: careem,
    name: 'Haris Khan',
    jobTitle: 'Head Acquisition',
    body: 'Ad-fraud is a challenge with every ad network - Careem works closely with partners to control the fraud and improve the traffic quality using mFilterIt fraud detection tool. The tool categorically identifies the type of fraud and helps understand real value additional by ad-network.',
  }, {
    imgSrc: vilrginn,
    name: 'Ganesh Sonawane',
    jobTitle: 'Sr. Digital Manager',
    body: 'mFilterit have been a fantastic partner in not only helping us identify fraud sources but also optimize and identify where we can scale our investments. The team at mFilterlt have consistently delivered performance and have extended the support with respect to managing our partners.',
  }, {
    imgSrc: pidilite,
    name: 'Parth Desai ',
    jobTitle: 'Sr. Manager',
    body: 'With the support of mFilterlt, we were able to improve the efficiency of our performance marketing spends and optimize our call centre bandwidth basis the quality of the lead. The detailed transactional reporting provided by mFilterlt helped us deliver outstanding business results.',
  }
];

function Testmonials() {
  return (
    <section className="testmonials">
      <header className="testmonials-header">
        <h2>Testmonials</h2>
        <div className="line"></div>
        <p>What recruiters have to say about <span>mFilterIt</span></p>
      </header>
      <div className="cards">
        {
          cards.map((item, i) => {
            return (
              <div className="card" key={i}>
                <div className="heading">
                  <img src={item.imgSrc} alt="logo" />
                  <div className="title">
                    <h4>{item.name}</h4>
                    <span>{item.jobTitle}</span>
                  </div>
                </div>
                <p>{item.body}</p>
              </div>
            );
          })
        }
      </div>
      <Button text='View More' />
    </section>
  );
}

export default Testmonials;
