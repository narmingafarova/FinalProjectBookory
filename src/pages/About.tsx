import React, { useContext } from 'react'
import ScrollToTop from '../components/ScrollToTop'
import BreadCrumb from '../components/BreadCrumb'
import Story from '../components/about/Story'
import Testimonials from '../components/about/Testimonials'
import Community from '../components/about/Community'
import { LangContext } from '../context/LangContext'

const About: React.FC = () => {
  const [lang] = useContext(LangContext)
  return (
    <>
      <ScrollToTop />
      {/* Main part */}
      <BreadCrumb page={lang === "en" ? "About Us" : "Haqqımızda"}/>
      <Story />
      <Testimonials/>
      <Community/>
    </>
  )
}

export default About