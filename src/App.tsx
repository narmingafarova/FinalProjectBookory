import React from 'react'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Vendor from './pages/Vendor'
import Shop from './pages/Shop'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import Pages from './pages/Pages'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/pages' element={<Pages />} />
        <Route path='/vendor' element={<Vendor />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App