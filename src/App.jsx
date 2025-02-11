import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Purse from './components/Purse'
function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/order" element={<Purse/>}></Route>
      </Routes>
    </>
  )
}

export default App
