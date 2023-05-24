import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/routes'
import GlobalStyle from './styles/global'

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>

      <GlobalStyle />
    </>
  )
}

export default App
