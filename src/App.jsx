import './App.css'
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css'
import 'primeicons/primeicons.css'

import NavBar from './components/NavBar'
import MenuOverlay from './components/MenuOverlay'
import Chat from './pages/Chat'

import { useState, useEffect } from 'react'

function App() {
  const [userId, setuserId] = useState('')

  useEffect(() => {
    localStorage.setItem('UserId', '1')
    setuserId('1')
  }, [])
  return (
    <div className="font-bukra ">
      <div className="block ">
        <NavBar />
      </div>
      <main className="block ">
        <Chat userId={userId} />
      </main>
    </div>
  )
}

export default App
