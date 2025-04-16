import { Route, Routes } from 'react-router-dom'
import Courses from './courses/Courses'
import React from 'react'
import './index.css'
import Home from './Home/Home'
import Signup from './components/Signup'

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={<Courses />} />
      <Route path="/signup" element={<Signup />} />
      
    </Routes>
   
    </>
  )
}

export default App
