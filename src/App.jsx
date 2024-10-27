import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Button } from './components/ui/button'
import Contact from './Pages/Contact'
import Products from './Pages/Products'
import Singleproduct from './Pages/Singleproduct'
import Cart from './Pages/Cart'
import Errorpage from './Pages/Errorpage'
import Navbar from './layout/Navbar'

function App() {
  return <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={ <Products/>}/>
      <Route path="/contact" element={ <Contact/>}/>
      <Route path="/singleproduct/:id" element={<Singleproduct/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="*" element={<Errorpage/>}/>
    </Routes>
  </Router>
}

export default App