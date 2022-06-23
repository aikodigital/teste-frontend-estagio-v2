import React from 'react'

import { ThemeProvider } from '@mui/material'
import theme from './constants/theme'

import Dashboard from './pages/DashboardPage'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard/>
    </ThemeProvider>
  )
}

export default App