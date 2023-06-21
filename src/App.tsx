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
import About from './pages/About'
import { BookProvider } from './context/BookContext'
import ProductDetails from './pages/ProductDetails'
import { CartProvider } from 'react-use-cart'
import Cart from './pages/Cart'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <BookProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/shop/:id' element={<ProductDetails />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/about' element={<About />} />
            <Route path='/vendor' element={<Vendor />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </BookProvider>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App