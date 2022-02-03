import React from "react";
import "./Pages.css";

const About = () => {
  return (
    <div className="about">
      <div className="max-width">
        <div className="about-container">
          <div className="about-header">
            <h2>About Me</h2>
          </div>

          <div className="about-center">
            <div className="abcenter-text">
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas labore deserunt facere placeat minima porro, ipsam
                repellat neque maiores. Fuga fugiat, deserunt atque.
              </h3>
              <h3>
                Accusantium, aperiam voluptate culpa sit itaque deserunt debitis
                quae sed rerum magnam et nulla sapiente earum! Ea blanditiis non
                quis soluta aspernatur! Voluptas labore deserunt facere placeat
                minima porro, ipsam repellat neque maiores. Fuga fugiat,
                deserunt atque dignissimos temporibus.repellendus enim quis?
              </h3>
              <h3>
                You can find more about my projects, publications and skills on
                <a href="https://github.com/strogyy"> Github</a>
              </h3>
            </div>
            <div className="abcenter-photo">
              <img className="abCfoto" src="./images/abo.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
