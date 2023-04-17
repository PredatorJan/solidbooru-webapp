import '../styles/header.css'
import { toggleSidebar } from '../utils/NavUtils'

function Header() {

  let currentTheme: string = "light"

  setTheme(currentTheme)

  const storedTheme = localStorage.getItem("theme")
  if(storedTheme) {
    setTheme(storedTheme)
  }

  function setTheme(theme: string) {
    currentTheme = theme
    document.documentElement.setAttribute('data-theme', theme);
  }

  function toggleTheme() {
    if(currentTheme === 'light') {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      setTheme('light')
      localStorage.setItem('theme', 'light')
    }
  }


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