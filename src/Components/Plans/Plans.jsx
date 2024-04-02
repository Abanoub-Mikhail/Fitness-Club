import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from '../../assets/whiteTick.png'

export default function Plans() {
  return (
    <div className="plans-container" id="plans">
      <div className="blur blur-pl1"></div>
      <div className="blur blur-pl2"></div>
      <div className="programs-header">
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>

      <div className="plans">
        {plansData.map((plan , i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
                {plan.features.map((feature , i)=>(
                    <div className="feature" key={i}>
                        <img src={whiteTick} alt="whiteTick" />
                        <span>{feature}</span>
                    </div>
                ))}
            </div>
            <div>
                <span>See More Benefits <i className="fa-solid fa-arrow-right"></i> </span>
            </div>
            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
