import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api'
import { BrowserRouter } from 'react-router-dom'
const root = createRoot(document.getElementById('root'))

root.render(
  <PrimeReactProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PrimeReactProvider>
)
