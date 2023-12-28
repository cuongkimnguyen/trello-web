import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { CssBaseline } from '@mui/material'
import theme from './theme'
import App from './App'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <App />
    </CssVarsProvider>
  </>
)
