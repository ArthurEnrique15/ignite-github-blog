import { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { GithubUserProvider } from './contexts/GithubUserContext'
import { IssuesProvider } from './contexts/IssuesContext'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { setupFirebase } from './lib/firebase'
import { Router } from './Router'

export function App() {
  useEffect(() => {
    setupFirebase()
  }, [])

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <BrowserRouter>
        <GithubUserProvider>
          <IssuesProvider>
            <Router />
          </IssuesProvider>
        </GithubUserProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
