import React from "react";
import lubega from '../assets/lubega.jpg';
import email from '../assets/email-logo.svg';
import github from '../assets/github-logo.svg';
import instagram from '../assets/instagram-logo.svg';
import linkedin from '../assets/linkedin-logo.svg';
import whatsapp from '../assets/whatsapp-logo.svg';

const Banner = () => {

  return (
    <div className="banner-main">
      <div className="banner-text">
        <div className="banner-container">
          <h2 className="banner-title">Front-End React Developer</h2>
          <p className="banner-tagline">
            Hi, I am Lubega! A passionate Front-end React Developer based in
            Kuala Lumpur, Malaysia. Get to know me here
          </p>
          <div className="banner-logos">
            <button className="banner-logo-btn" onClick={() => window.location.href=("https://github.com/muhdlubega")}><img className="banner-logo" src={github}/></button>
            <button className="banner-logo-btn" onClick={() => window.location.href=("https://www.linkedin.com/in/muhammad-lubega/")}><img className="banner-logo" src={linkedin}/></button>
            <button className="banner-logo-btn" onClick={() => window.location.href=("https://www.instagram.com/muhdlbega/")}><img className="banner-logo" src={instagram}/></button>
            <button className="banner-logo-btn" onClick={() => window.location.href=("https://wa.me/+60182401703")}><img className="banner-logo" src={whatsapp}/></button>
            <button className="banner-logo-btn" onClick={() => window.location.href=("mailto:muhdlubegasiraje@gmail.com")}><img className="banner-logo" src={email}/></button>
          </div>
        </div>
      </div>
      <div className="banner-img-container">
      <div className="banner-image-box"></div>
      <img className="banner-image" src={lubega}></img>
      </div>
    </div>
  );
};

export default Banner;
