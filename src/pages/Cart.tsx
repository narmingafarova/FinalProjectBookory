import React, { useContext } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import ShopCart from '../components/cart/ShopCart'
import { LangContext } from '../context/LangContext'
import ScrollToTop from '../components/ScrollToTop'

const Cart = () => {
  const [lang] = useContext(LangContext)
  return (
    <>
      <ScrollToTop />
      {/* Main part */}
      <BreadCrumb page={lang === "en" ? "Cart" : "Səbət"} />
      <ShopCart />
    </>
  )
}

export default Cart