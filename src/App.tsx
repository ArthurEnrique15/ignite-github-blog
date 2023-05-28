import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { GithubUserProvider } from './contexts/GithubUserContext'
import { IssuesProvider } from './contexts/IssuesContext'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Router } from './Router'

export function App() {
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
