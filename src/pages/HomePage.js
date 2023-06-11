import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import AboutMe from '../components/AboutMe';
import Carousel from '../components/Carousel';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <AboutMe/>
        <Carousel/>
        <Projects/>
        <Footer/>
    </div>
  )
}

export default HomePage