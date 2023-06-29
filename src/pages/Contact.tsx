import React, { useContext } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import BookStores from '../components/contact/BookStores'
import ContactForm from '../components/contact/ContactForm'
import ScrollToTop from '../components/ScrollToTop'
import { LangContext } from '../context/LangContext'

const Contact: React.FC = () => {
  const [lang] = useContext(LangContext)
  return (
    <>
      <ScrollToTop />
      {/* Main part */}
      <BreadCrumb page={lang === "en" ? "Contact" : "Əlaqə"} />
      <ContactForm />
      <BookStores />
    </>
  )
}

export default Contact