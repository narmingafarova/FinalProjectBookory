import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import ScrollToTop from '../components/ScrollToTop'

const Shop: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      {/* Main part */}
      <BreadCrumb page='Shop' />
    </>
  )
}

export default Shop