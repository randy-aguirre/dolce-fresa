import { ThemeProvider } from '@mui/material'
import './App.css'
import Router from './pages'
import { theme } from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  )
}

export default App
