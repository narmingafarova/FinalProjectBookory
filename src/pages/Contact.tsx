import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import BookStores from '../components/contact/BookStores'
import ContactForm from '../components/contact/ContactForm'
import ScrollToTop from '../components/ScrollToTop'

const Contact: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      {/* Main part */}
      <BreadCrumb page='Contact' page2=''/>
      <ContactForm />
      <BookStores />
    </>
  )
}

export default Contact