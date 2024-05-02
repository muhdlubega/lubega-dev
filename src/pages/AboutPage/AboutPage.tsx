import React from 'react';
import { AboutMe, Carousel, Header } from '../../components';

const AboutPage: React.FC = () => {
  return (
    <div className='about-page'>
      <Header/>
        <AboutMe/>
        <Carousel/>
    </div>
  )
}

export default AboutPage