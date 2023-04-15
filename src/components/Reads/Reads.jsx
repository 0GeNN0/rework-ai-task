// CSS
import './reads.css';

import leftArrow from '../../assets/images/left-a.svg';
import insight1 from '../../assets/images/insight-1.png';
import insight2 from '../../assets/images/insight-2.png';
import insight3 from '../../assets/images/insight-3.png';
import insight4 from '../../assets/images/insight-4.png';
import rightArrow from '../../assets/images/right-a.svg';

function Reads() {
  return (
    <section className="insights">
      <h2 className="section-heading">
        Insightful Reads - <span>mFilterIt</span>
      </h2>
      <div className="readings">
        <img src={leftArrow} alt="leftArrow" />
        <img src={insight1} alt="insight1" />
        <img src={insight2} alt="insight2" />
        <img src={insight3} alt="insight3" />
        <img src={insight4} alt="insight4" />
        <img src={rightArrow} alt="rightArrow" />
      </div>
    </section>
  );
}

export default Reads;
