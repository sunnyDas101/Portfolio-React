import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import MySkills from '../MySkills/MySkills'
import AboutMe from '../AboutMe/AboutMe'
import MyPortfolio from '../MyPortfolio/MyPortfolio'
import Testimonials from '../Testimonials/Testimonials'
import ContactMe from '../ContactMe/ContactMe'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <>
    <HeroSection />
    <MySkills />
    <AboutMe />
    <MyPortfolio />
    <Testimonials />
    <ContactMe />
    <Footer />
    </>
  )
}

export default Home