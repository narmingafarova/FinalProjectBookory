import React, { useContext } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import ScrollToTop from '../components/ScrollToTop'
import { LangContext } from '../context/LangContext'

const Wishlist: React.FC = () => {
  const [lang] = useContext(LangContext)
  return (
    <>
      <ScrollToTop />
      {/* Main part */}
      <BreadCrumb page={lang === "en" ? "Wishlist" : "Bəyənilənlər"} />
      
    </>
  )
}

export default Wishlist