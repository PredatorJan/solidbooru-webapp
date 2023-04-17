import '../styles/header.css'
import { toggleTheme } from '../utils/CustomizingUtils'
import { toggleSidebar } from '../utils/NavUtils'

function Header() {

  return (
    <div className="header">
      <div className='leftDiv'>
        <button className='st-button-1' onClick={toggleSidebar}>
          Menu
        </button>
      </div>
      <div className='centerDiv'>
      </div>
      <div className='rightDiv'>
        <button className='st-button-1' onClick={toggleTheme}>Toggle Theme</button>
        <button className='st-button-1' id='loginBtn'>Login</button>
      </div>
    </div>
  )
}

export default Header