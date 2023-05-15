import React from 'react'
import ScrollToTop from '../components/ScrollToTop'
import BreadCrumb from '../components/BreadCrumb'
import Story from '../components/about/Story'

const About: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      {/* Main part */}
      <BreadCrumb page='About Us' />
      <Story />
    </>
  )
}

export default About