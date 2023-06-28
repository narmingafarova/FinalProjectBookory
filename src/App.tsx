import React, { useContext, useEffect } from 'react'
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
import Dashboard from './pages/admin/Dashboard'
import { useBetween } from 'use-between'
import useSharedUser from './components/sharedHook/useSharedUser'
import AddDashboard from './pages/admin/AddDashboard'
import EditDashboard from './pages/admin/EditDashboard'
import { ThemeContext, ThemeProvider } from './context/ThemeContext'

const Main = () => {
  const [mode] = useContext(ThemeContext)
  return (
    <div className={mode}>
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
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/add' element={<AddDashboard />} />
        <Route path='/dashboard/edit/:id' element={<EditDashboard />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

const App: React.FC = () => {
  const { setUserStatus, setUserName } = useBetween(useSharedUser)

  useEffect(() => {
    if (localStorage.getItem("user")) {
      if (localStorage.getItem("user") === "admin") {
        setUserStatus("admin")
      } else {
        setUserStatus("user");
        let user: any = localStorage.getItem("user");
        setUserName(user)
      }
    }
  })

  return (
    <BrowserRouter>
      <CartProvider>
        <BookProvider>
          <ThemeProvider>
            <Main />
          </ThemeProvider>
        </BookProvider>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App