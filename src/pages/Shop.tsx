import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import ScrollToTop from '../components/ScrollToTop'
import ShopBooks from '../components/shop/ShopBooks'

const Shop: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      {/* Main part */}
      <BreadCrumb page='Shop' page2=''/>
      <ShopBooks/>
    </>
  )
}

export default Shop