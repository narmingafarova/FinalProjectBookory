import React, { useContext } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import ScrollToTop from '../components/ScrollToTop'
import ShopBooks from '../components/shop/ShopBooks'
import { LangContext } from '../context/LangContext'

const Shop: React.FC = () => {
  const [lang] = useContext(LangContext)
  return (
    <>
      <ScrollToTop />
      {/* Main part */}
      <BreadCrumb page={lang === "en" ? "Shop" : "Mağaza"} />
      <ShopBooks />
    </>
  )
}

export default Shop