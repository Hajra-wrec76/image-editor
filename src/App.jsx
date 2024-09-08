import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import BuyCredits from './component/BuyCredits'
import Home from './component/Home'
import BackgroundRemove from './component/BackgroundRemove'
import GenerativeFill from './component/GenerativeFill'
import ImageRestore from './component/ImageRestore'
import ObjectRecolor from './component/ObjectRecolor'
import Profile from './component/Profile'
import ObjectRemove from './component/ObjectRemove'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Router>
    <Navbar/>
<Routes>
< Route exact path="/" element={<Home/>}/>
  < Route exact path="/ImageRestore" element={<ImageRestore/>}/>
  < Route exact path="/GenerativeFill" element={<GenerativeFill/>}/>/
  < Route exact path="/ObjectRemove" element={<ObjectRemove/>}/>
  < Route exact path="/ObjectRecolor" element={<ObjectRecolor/>}/>
  < Route exact path="/BackgroundRemove" element={<BackgroundRemove/>}/>
  < Route exact path="/BuyCredits" element={<BuyCredits/>}/>
  < Route exact path="/Profile" element={<Profile/>}/>




</Routes>


   </Router>
    </>
  )
}

export default App
