import { Link } from 'react-router-dom'
import { Container } from './styles'

export const Navbar: React.FC = () => {
  return (
    <Container>
      <Link to={'/'}>
        <h1>Navbar</h1>
      </Link>
      <div>
        <Link to={'/login'}>
          <button>Login</button>
        </Link>
        <Link to={'/signup'}>
          <button>Cadastre-se</button>
        </Link>
      </div>
    </Container>
  )
}
