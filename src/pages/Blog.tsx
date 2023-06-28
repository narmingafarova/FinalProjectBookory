import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import ScrollToTop from '../components/ScrollToTop'
import BlogContent from '../components/blog/BlogContent'

const Blog: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      {/* Main part */}
      <BreadCrumb page='Blog' />
      <BlogContent/>
    </>
  )
}

export default Blog