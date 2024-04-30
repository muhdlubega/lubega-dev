import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import drc1 from "../assets/projects/cc1.png";
import drc2 from "../assets/projects/cc2.png";
import hackathon1 from "../assets/projects/vg1.png";
import hackathon2 from "../assets/projects/vg2.png";
import course1 from "../assets/projects/ri1.png";
import course2 from "../assets/projects/ri2.png";
import selfstudy1 from "../assets/projects/ck1.png";
import selfstudy2 from "../assets/projects/ck2.png";
import github from '../assets/github-logo.svg';
import website from '../assets/website.svg';

const Projects: React.FC = () => {
  const animationControls = useAnimation();

  useEffect(() => {
    animationControls.start({ y: 0, opacity: 1, transition: { duration: 1 } });
  }, [animationControls]);

  return (
    <div className="project-main">
      <motion.p className="project-headline"
        initial={{ y: -20, opacity: 0 }}
        animate={animationControls}>Development Projects</motion.p>
      <motion.div className="project-container" initial={{ y: -20, opacity: 0 }}
        animate={animationControls}>
        <motion.div
          className="project-drc"
          initial={{ y: -20, opacity: 0 }}
          animate={animationControls}
        >
          <div className="project-div">
            <p className="project-title">CommonCents</p>
            <p className="project-content">
            CommonCents is a comprehensive Trading Information Hub designed to help beginners and anyone interested in trading learn more about trading through various features. This web application and mobile device application provide access to Trading News, Trading Guidelines, Trading Simulation, Market Overview, and a Forum. The project focuses on Stock Indices and Volatility Market, with a trading simulation that uses live data and virtual currency for options trading. Users can share a single account on both platforms, and they are ranked on a leaderboard based on their net worth, creating a gamified aspect to attract and engage users.
            </p>
            <div className="project-btn-group">
              <button className="project-logo-btn" onClick={() => window.location.href=("https://github.com/muhdlubega/DRC-CommonCents-WebApp")}>
                <img className="project-logo" src={github} alt="GitHub" />Source Code
              </button>
              <button className="project-logo-btn" onClick={() => window.location.href=("https://commoncents.vercel.app/")}>
                <img className="project-logo" src={website} alt="Website" />Open Website
              </button>
            </div>
          </div>
          <motion.img
            className="project-cc2"
            src={drc2}
            initial={{ y: -20, opacity: 0 }}
            animate={animationControls}
          />
          <motion.img
            className="project-cc1"
            src={drc1}
            initial={{ y: -20, opacity: 0 }}
            animate={animationControls}
            onClick={() => window.location.href=("https://visualgamer.vercel.app/")}
          />
        </motion.div>

        <motion.div
          className="project-hackathon"
          initial={{ y: -20, opacity: 0 }}
          animate={animationControls}
        >
        <motion.img
          className="project-vg2"
          src={hackathon2}
          initial={{ y: -20, opacity: 0 }}
          animate={animationControls}
        />
        <motion.img
          className="project-vg1"
          src={hackathon1}
          initial={{ y: -20, opacity: 0 }}
          animate={animationControls}
          onClick={() => window.location.href=("https://visualgamer.vercel.app/")}
        />
          <div className="project-div2">
            <p className="project-title">Visual Gamer</p>
            <p className="project-content">
              A game database website I made in a group of five for our hackathon in the Deriv BeSquare Graduate Programme. For the hackathon our goal was to utilize any open-source API to create an interactive website in one week. Our team utilized various frameworks and tools such as React, Firebase, Typescript, SCSS and more to create this website using the RAWG API.
            </p>
            <div className="project-btn-group">
              <button className="project-logo-btn" onClick={() => window.location.href=("https://github.com/muhdlubega/ctrlc-ctrlv-hackathon")}>
                <img className="project-logo" src={github} alt="GitHub" />Source Code
              </button>
              <button className="project-logo-btn" onClick={() => window.location.href=("https://visualgamer.vercel.app/")}>
                <img className="project-logo" src={website} alt="Website" />Open Website
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="project-course"
          initial={{ y: -20, opacity: 0 }}
          animate={animationControls}
        >
        <div className="project-div">
          <p className="project-title">Recommend.me</p>
          <p className="project-content">
            A TV Show database I made as my final project for the Harvard CS50 online course. For this project, I worked with the TMDB API to display data about TV shows through frameworks and tools such as React, JavaScript, and CSS. This was my introductory project to React, where I tried to familiarize myself with React Hooks.
          </p>
          <div className="project-btn-group">
            <button className="project-logo-btn" onClick={() => window.location.href=("https://github.com/muhdlubega/recommendme")}>
              <img className="project-logo2" src={github} alt="GitHub" />Source Code
            </button>
            <button className="project-logo-btn" onClick={() => window.location.href=("https://recommendme-livid.vercel.app/")}>
              <img className="project-logo2" src={website} alt="Website" />Open Website
            </button>
          </div>
        </div>
          <motion.img
            className="project-ri2"
            src={course2}
            initial={{ y: -20, opacity: 0 }}
            animate={animationControls}
          />
          <motion.img
            className="project-ri1"
            src={course1}
            initial={{ y: -20, opacity: 0 }}
            animate={animationControls}
            onClick={() => window.location.href=("https://recommendme-livid.vercel.app/")}
          />
        </motion.div>

        <motion.div
          className="project-selfstudy"
          initial={{ y: -20, opacity: 0 }}
          animate={animationControls}
        >
        <motion.img
          className="project-ck2"
          src={selfstudy1}
          initial={{ y: -20, opacity: 0 }}
          animate={animationControls}
        />
        <motion.img
          className="project-ck1"
          src={selfstudy2}
          initial={{ y: -20, opacity: 0 }}
          animate={animationControls}
          onClick={() => window.location.href=("https://thecryptoking.vercel.app/")}
        />
          <div className="project-div2">
            <p className="project-title">CryptoKing</p>
            <p className="project-content">
              A cryptocurrency watcher website I made for self-study. For this project, I worked with various libraries such as react-alice-carousel and react-chartjs alongside React, CSS, and Firebase to interact with the CoinGecko API. This project was made as a basis for understanding REST API calls and groundwork for WebSocket calls.
            </p>
            <div className="project-btn-group">
              <button className="project-logo-btn" onClick={() => window.location.href=("https://github.com/muhdlubega/crypto-king")}>
                <img className="project-logo" src={github} alt="GitHub" />Source Code
              </button>
              <button className="project-logo-btn" onClick={() => window.location.href=("https://thecryptoking.vercel.app/")}>
                <img className="project-logo" src={website} alt="Website" />Open Website
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
