import { useEffect, useState } from 'react'
import { toggleSidebar } from '../utils/NavUtils'
import '../styles/sidebar.css'

function Sidebar() {

  return (
    <div id='sidebar' className='sidebar'>
      <div id='navBtnWrapper'>
        <button className='st-button-1' onClick={toggleSidebar}>
          Menu
        </button>
      </div>
      <div id='menuItems'>
        <button className='nav-button'>
          <a>1</a>
          <a>Test</a>
        </button>
        <button className='nav-button'>
          <a>2</a>
          <a>Test</a>
        </button>
        <button className='nav-button'>
          <a>3</a>
          <a>Test</a>
        </button>
        <button className='nav-button'>
          <a>4</a>
          <a>Test</a>
        </button>
      </div>
    </div>
  )
}

export default Sidebar
