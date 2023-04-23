import { createContext, useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import './styles/app.css'
import { Outlet } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { PaletteMode } from '@mui/material'

export const ColorModeContext = createContext({toggleColorMode: () => {}})

function App() {


  const storedMode = localStorage.getItem('colorMode')
  const defaultMode = storedMode === 'light' ? 'light' : 'dark'

  const [mode, setMode] = useState<'light' | 'dark'>(defaultMode);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  useMemo(() => localStorage.setItem('colorMode', mode), [mode])

  // set body backgroundcolor
  document.documentElement.style.setProperty('--background-color', theme.palette.background.default)

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <div id='app'>
          <Header></Header>
          <div className='content'>
            <Outlet />
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App