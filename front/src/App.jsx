import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landing from "./views/landing/Landing"
import Home from "./views/home/Home"
import Projects from './components/projects/Projects'

function App() {
  

  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/articles" element={<Projects />}/>
        <Route path="/documentarys" element={<Projects />}/>
      </Routes>
    </div>
  )
}

export default App
