import { useEffect, useState } from 'react'
import Header from './components/Header'
import './styles/app.css'
import Sidebar from './components/Sidebar'

function App() {
  

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



