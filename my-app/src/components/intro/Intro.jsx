import React from "react";
import "./Intro.css";

import Me from "../../img/Me.jpg"

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My Name is</h2>
          <h1 className="i-name">Avinash Panchal</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web developer</div>
              <div className="i-title-item">Writter</div>
              <div className="i-title-item">Content Creator</div>
              <div className="i-title-item">UI/UX</div>
            </div>
          
          </div>
          <p className="i-discription">
              An aspiring full stack web developer with amazing problem solving
              skills. Love Data Structure and Algorithms. I have an interest in
              building logical and convenient features in websites. Looking
              forward to upgrade my skills and apply them to build user-friendly
              applications.
            </p>
        </div>
      </div>
      <div className="i-right">
          <div className="i-bg"></div>
          <img src={Me} className="i-img" alt="" />
      </div>
    </div>
  );
};

export default Intro;
