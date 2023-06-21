import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import ShopCart from '../components/cart/ShopCart'

const Cart = () => {
  return (
    <>
        <BreadCrumb page='Cart'/>
        <ShopCart/>
    </>
  )
}

export default Cart