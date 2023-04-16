import '../styles/header.css'

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

      </div>
      <div className='centerDiv'>
        <h1 className='title'>Solidbooru</h1>
      </div>
      <div className='rightDiv'>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <button id='loginBtn'>Login</button>
      </div>
    </div>
  )
}

export default Header