import React from "react";
import "./Reasons.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

export default function Reasons() {
  return (
    <div className="reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt="image" />
        <img src={image2} alt="image" />
        <img src={image3} alt="image" />
        <img src={image4} alt="image" />
      </div>
      <div className="right-r">
        <span>Some Reasons</span>
        <div>
          <span className="stroke-text">Why</span>
          <span>Choose Us?</span>
        </div>
        <div className="details-r">
          <div>
            <img src={tick} alt="tick" />
            <span>OVER 140+ EXPERT COACHS</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <span className="partnerw">Our Partner</span>
        <div className="partners">
          <img src={nb} alt="nb" />
          <img src={adidas} alt="adidas" />
          <img src={nike} alt="nike" />
        </div>
      </div>
    </div>
  );
}
