import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import ScrollToTop from '../components/ScrollToTop'
import VendorList from '../components/vendor/VendorList'

const Vendor: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      {/* Main part */}
      <BreadCrumb page='Store List' />
      <VendorList/>
    </>
  )
}

export default Vendor