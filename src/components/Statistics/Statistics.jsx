import React from "react";

// CSS
import './statistics.css';

// Components
import Image from "../Image/Image";

// Images
import asset from '../../assets/images/Asset.png';

import numbers from "./numbers";

function Statistics() {
  return (
    <section className="statistics">
      <h2 className="section-heading">Numbers Speak <br /> about us!</h2>
      <div className="assets">
        <div className="img">
          <Image iSrc={asset} />
        </div>
        <div className="numbers">
          {
            numbers.map((item, i) => {
              return (
                <div className="item" key={i}>
                  <div className="circle">{item.number}</div>
                  <h4>{item.title}</h4>
                </div>
              );
            })
          }
        </div>
      </div>
    </section>
  );
}

export default Statistics;
