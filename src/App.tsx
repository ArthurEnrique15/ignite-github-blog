import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { GithubUserProvider } from './contexts/GithubUserContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <BrowserRouter>
        <GithubUserProvider>
          <Router />
        </GithubUserProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
