import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Purse from './components/Purse'
import Cart from './components/Cart'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

function App() {


  return (
    <>
    <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/purchase" element={<Purse/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    </>
  )
}

export default App
