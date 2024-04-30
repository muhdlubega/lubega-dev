import React from 'react';
import { AboutMe, Carousel, Header, Footer } from '../../components';

const AboutPage: React.FC = () => {
  return (
    <div className='about-page'>
      <Header/>
        <AboutMe/>
        <Carousel/>
        <Footer/>
    </div>
  )
}

export default AboutPage