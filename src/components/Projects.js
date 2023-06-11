import React from "react";
import hackathon1 from "../assets/projects/vg1.png";
import hackathon2 from "../assets/projects/vg2.png";
import course1 from "../assets/projects/ri1.png";
import course2 from "../assets/projects/ri2.png";
import selfstudy1 from "../assets/projects/ck1.png";
import selfstudy2 from "../assets/projects/ck2.png";
import github from '../assets/github-logo.svg';
import website from '../assets/website.svg';

const Projects = () => {
  return (
    <div className="project-main">
      <p className="carousel-title">Development Projects</p>
      <p className="carousel-content">
        Here are examples of front-end projects I've worked on
      </p>
      <div className="project-container">
        <div className="project-hackathon">
          <div className="project-div">
            <p className="project-title">Visual Gamer</p>
            <p className="project-content">
              A game database website I made in a group of five for our hackathon in the Deriv BeSquare Graduate Programme. For the hackathon our goal was to utilize any open-source API to create an interactive website in one week. Our team utilized various frameworks and tools such as React, Firebase, Typescript, SCSS and more to create this website using the RAWG API.
            </p>
            <div className="project-btn-group">
            <button className="project-logo-btn" onClick={() => window.location.href=("https://github.com/muhdlubega/ctrlc-ctrlv-hackathon")}><img className="project-logo" src={github}/>Source Code</button>
            <button className="project-logo-btn" onClick={() => window.location.href=("https://visualgamer.vercel.app/")}><img className="project-logo" src={website}/>Open Website</button>
            </div>
            
          </div>
          <img className="project-vg2" src={hackathon2}></img>
          <img className="project-vg1" src={hackathon1} onClick={() => window.location.href=("https://visualgamer.vercel.app/")}></img>
        </div>
        <div className="project-course">

        <img className="project-ri2" src={course2}></img>
          <img className="project-ri1" src={course1} onClick={() => window.location.href=("https://recommendme-livid.vercel.app/")}></img>
        <div className="project-div2">
            <p className="project-title">Recommend.me</p>
            <p className="project-content">
              A TV Show database I made as my final project for the Harvard CS50 online course. For this project I worked with the TMDB API to display data about TV shows through frameworks and tools such as React, Javascript and CSS. This was my introductory project to React, where I tried to familiarize myself with React Hooks.
            </p>
            <div className="project-btn-group">
            <button className="project-logo-btn" onClick={() => window.location.href=("https://github.com/muhdlubega/recommendme")}><img className="project-logo2" src={github}/>Source Code</button>
            <button className="project-logo-btn" onClick={() => window.location.href=("https://recommendme-livid.vercel.app/")}><img className="project-logo2" src={website}/>Open Website</button>
            </div>
          </div>
        </div>
        <div className="project-selfstudy">
          
        <div className="project-div">
            <p className="project-title">CryptoKing</p>
            <p className="project-content">
              A cryptocurrency watcher website I made for self study. For this project I tried working with various libraries such as react-alice-carousel and react-chartjs alongside React, CSS and Firebase to interact with the CoinGecko API. This project was made as basis to understanding Rest API calls and groundwork for Websocket calls.
            </p>
            <div className="project-btn-group">
            <button className="project-logo-btn" onClick={() => window.location.href=("https://github.com/muhdlubega/crypto-king")}><img className="project-logo" src={github}/>Source Code</button>
            <button className="project-logo-btn" onClick={() => window.location.href=("https://thecryptoking.vercel.app/")}><img className="project-logo" src={website}/>Open Website</button>
            </div>
          </div>
          <img className="project-ck2" src={selfstudy1}></img>
          <img className="project-ck1" src={selfstudy2} onClick={() => window.location.href=("https://thecryptoking.vercel.app/")}></img>
        </div>
      </div>
    </div>
  );
};

export default Projects;
