let currentTheme: string = "light"

export function toggleTheme() {
  if (currentTheme === 'light') {
    setTheme('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    setTheme('light')
    localStorage.setItem('theme', 'light')
  }
}

export function setTheme(theme: string) {
  currentTheme = theme
  document.documentElement.setAttribute('data-theme', theme);
}