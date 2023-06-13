import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutMe from '../components/AboutMe'
import Carousel from '../components/Carousel'

const AboutPage = () => {
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