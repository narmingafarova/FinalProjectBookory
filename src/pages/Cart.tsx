import React, { useContext } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import ShopCart from '../components/cart/ShopCart'
import { LangContext } from '../context/LangContext'

const Cart = () => {
  const [lang] = useContext(LangContext)
  return (
    <>
        <BreadCrumb page={lang === "en" ? "Cart" : "Səbət"}/>
        <ShopCart/>
    </>
  )
}

export default Cart