import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import lubega from '../assets/lubega.jpg';
import email from '../assets/email-logo.svg';
import github from '../assets/github-logo.svg';
import instagram from '../assets/instagram-logo.svg';
import linkedin from '../assets/linkedin-logo.svg';
import whatsapp from '../assets/whatsapp-logo.svg';

const Banner: React.FC = () => {
  const animationControls = useAnimation();

  useEffect(() => {
    animationControls.start({ y: 0, opacity: 1, transition: { duration: 2 } });
  }, [animationControls]);

  return (
    <div className="banner-main">
      <motion.div
        className="banner-text"
        initial={{ y: -50, opacity: 0 }}
        animate={animationControls}
      >
        <div className="banner-container">
          <motion.h2 className="banner-title">Front-End React Developer</motion.h2>
          <motion.p className="banner-tagline">
            Hi, I am Lubega! A passionate Front-end React Developer based in Kuala Lumpur, Malaysia. Get to know me here
          </motion.p>
          <div className="banner-logos">
            <motion.button
              className="banner-logo-btn"
              whileHover={{ scale: 1.1 }}
              onClick={() => window.location.href=("https://github.com/muhdlubega")}
            >
              <motion.img className="banner-logo" src={github} alt="GitHub" />
            </motion.button>
            <motion.button
              className="banner-logo-btn"
              whileHover={{ scale: 1.1 }}
              onClick={() => window.location.href=("https://www.linkedin.com/in/muhammad-lubega/")}
            >
              <motion.img className="banner-logo" src={linkedin} alt="LinkedIn" />
            </motion.button>
            <motion.button
              className="banner-logo-btn"
              whileHover={{ scale: 1.1 }}
              onClick={() => window.location.href=("https://www.instagram.com/muhdlbega/")}
            >
              <motion.img className="banner-logo" src={instagram} alt="Instagram" />
            </motion.button>
            <motion.button
              className="banner-logo-btn"
              whileHover={{ scale: 1.1 }}
              onClick={() => window.location.href=("https://wa.me/+60182401703")}
            >
              <motion.img className="banner-logo" src={whatsapp} alt="WhatsApp" />
            </motion.button>
            <motion.button
              className="banner-logo-btn"
              whileHover={{ scale: 1.1 }}
              onClick={() => window.location.href=("mailto:muhdlubegasiraje@gmail.com")}
            >
              <motion.img className="banner-logo" src={email} alt="Email" />
            </motion.button>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="banner-img-container"
        initial={{ y: -50, opacity: 0 }}
        animate={animationControls}
      >
        <div className="banner-image-box"></div>
        <motion.img className="banner-image" src={lubega} alt="Lubega" />
      </motion.div>
    </div>
  );
};

export default Banner;
