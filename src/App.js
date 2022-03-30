import React from 'react'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import About from'./pages/About'
import Blog from './pages/Blog'

function App() {
  return (
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path='/about' element={<About/>}/>
    <Route path='/blog' element={<Blog/>}/>
  </Routes>


    
  )
}

export default App