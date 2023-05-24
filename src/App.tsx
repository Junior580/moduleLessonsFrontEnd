import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/routes'
import GlobalStyle from './styles/global'
import { Navbar } from './components/navbar'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>

      <GlobalStyle />
    </>
  )
}

export default App
