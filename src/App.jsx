import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
//import Navbar from "./components/Navbar"
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import PowerfulFeatures from './pages/Powerfulfeatures.jsx'
import Dashboard from './pages/Dashboard.jsx'
import About from './pages/About.jsx'

import HiddenCost from './pages/Hiddencost.jsx'
import Pricing from "./pages/Pricing.jsx";
import OurSolution from "./pages/OurSolution.jsx";
import Login from './pages/Login.jsx'
import Bookdemo from './pages/Book demo.jsx'
import PowerfulFeatures from './pages/PowerfulFeatures.jsx';

import Register from './pages/Register.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter> 
          
          <Routes>
            {/* Dono routes par hum abhi <Home /> component hi load kar rahe hain */}
            <Route path="Home" element={<Home />} />
            <Route path="/Solution" element={<Home />} />
               <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Oursolution" element={<OurSolution />} />
      {/* <Route path="/Powerfulfeatures" element={<PowerfulFeatures />} /> */}
       <Route path="/Hiddencost" element={<HiddenCost />} />
           <Route path="/Pricing" element={<Pricing />} /> 
           <Route path="/About" element={<About/>} /> 
           <Route path="/Register" element={<Register/>} /> 
            <Route path="/Login" element={<Login />} /> 
             <Route path="/Bookdemo" element={<Bookdemo />} />
              <Route path="/powerfulfeatures" element={<PowerfulFeatures/>} />
          </Routes>
         <Footer/>
        </BrowserRouter>
     
                 
    </>
  )
}

export default App
