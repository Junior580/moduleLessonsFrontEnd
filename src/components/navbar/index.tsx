import { Link } from 'react-router-dom'
import { Container } from './styles'

export const Navbar: React.FC = () => {
  return (
    <Container>
      <h1>Navbar</h1>
      <div>
        <Link to={'/'}>
          <button>Login</button>
        </Link>
        <Link to={'/'}>
          <button>Cadastre-se</button>
        </Link>
      </div>
    </Container>
  )
}
