
// Components
import Button from "../Button/Button";

// Images
import bug from '../../assets/images/AI_ML.png';
import cpu from '../../assets/images/cpu.png';
import timer from '../../assets/images/timer.png';
import dread from '../../assets/images/sitting.png';

// CSS
import './about.css';

function About() {
  return (
    <section className="about">
      <h2 className="section-heading">
        Who we are
      </h2>
      <div className="main">
        <article>
          <p>
            We are the essential tool in a digital marketer’s handbag. We are on a mission to create trust, uphold integrity, drive growth & value across the digital ecosystem. We empower our customers with a holistic view of their respective journeys’ in the digital ecosystem by providing them with accurate real-time data that helps them understand their returns on their digital investments.</p>
          <Button text='About Us' />
        </article>
        <div className="grid">
          <div className="grid-item">
            <img src={bug} alt="bug" />
            <p>Power of AI/ML</p>
          </div>
          <div className="grid-item">
            <img src={cpu} alt="cpu" />
            <p>Future Ready Tech</p>
          </div>
          <div className="grid-item">
            <img src={timer} alt="timer" />
            <p>Real-Time Tracking</p>
          </div>
          <div className="grid-item">
            <img src={dread} alt="dread" />
            <p>Seamless Integration</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
