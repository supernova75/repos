import './App.css'
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css'
import 'primeicons/primeicons.css'

import NavBar from './components/NavBar'
import MenuOverlay from './components/MenuOverlay'
import Chat from './pages/Chat'
import Account from './pages/Account'
import About from './pages/About'
import Instructions from './pages/Instructions'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <div className="font-bukra ">
      <div className="block ">
        <NavBar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      </div>
      <main className="block ">
        <Routes>
          <Route path="/chat" element={<Chat />} />
          <Route path="/account" element={<Account />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
