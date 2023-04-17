import { useEffect, useState } from 'react'
import Header from './components/Header'
import './styles/app.css'
import Sidebar from './components/Sidebar'
import { setTheme } from './utils/CustomizingUtils'

function App() {

  const storedTheme = localStorage.getItem("theme")
  if (storedTheme) {
    setTheme(storedTheme)
  }

  return (
    <div id='app'>
      <Header></Header>
      <Sidebar></Sidebar>
      <div className='content'>
      </div>
    </div>
  )
}

export default App



