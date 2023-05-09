import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App