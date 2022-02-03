import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <div className="main-container">
      <div className="max-width">
        <div className="main-center">
          <div className="main-center-container">
            <div className="main-center-texts">
              <h1>Front-end Developer & Mobile App Developer</h1>
              <h2>I design, build and code things for web and mobile</h2>
            </div>
            <div className="main-center-photos">
              <div className="m1-cont">
                <div></div>
                <img className="m1" src="./images/m1.png" alt="" />
              </div>
              <img className="m2" src="./images/m2.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
