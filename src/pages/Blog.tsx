import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import ScrollToTop from '../components/ScrollToTop'

const Blog: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      {/* Main part */}
      <BreadCrumb page='Blog' />
    </>
  )
}

export default Blog