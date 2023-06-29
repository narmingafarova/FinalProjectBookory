import React, { useContext } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import ScrollToTop from '../components/ScrollToTop'
import BlogContent from '../components/blog/BlogContent'
import { LangContext } from '../context/LangContext'

const Blog: React.FC = () => {
  const [lang] = useContext(LangContext)
  return (
    <>
      <ScrollToTop />
      {/* Main part */}
      <BreadCrumb page={lang === "en" ? "Blog" : "Bloq"} />
      <BlogContent/>
    </>
  )
}

export default Blog