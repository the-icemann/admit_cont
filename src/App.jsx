import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideBar from './components/sideBar'
import DashBoard from './components/DashBoard'
import NavBar from './components/NavBar'
import Home from './Pages/Home'
import Widget from './components/Widget'

function App() {
 const [open,setOpen]=useState(true)

  return (
    <div >
    <Home/>
    
    </div>
  )
}

export default App
