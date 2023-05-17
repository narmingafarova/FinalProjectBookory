import React from 'react'
import ScrollToTop from '../components/ScrollToTop'
import BreadCrumb from '../components/BreadCrumb'
import Story from '../components/about/Story'
import Testimonials from '../components/about/Testimonials'

const About: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      {/* Main part */}
      <BreadCrumb page='About Us' />
      <Story />
      <Testimonials/>
    </>
  )
}

export default About