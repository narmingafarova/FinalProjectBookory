import React, { useContext } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import ScrollToTop from '../components/ScrollToTop'
import VendorList from '../components/vendor/VendorList'
import { LangContext } from '../context/LangContext'

const Vendor: React.FC = () => {
  const [lang] = useContext(LangContext)
  return (
    <>
      <ScrollToTop />
      {/* Main part */}
      <BreadCrumb page={lang === "en" ? "Store List" : "Satıcılar"} />
      <VendorList />
    </>
  )
}

export default Vendor