import { useEffect, useState } from 'react'
import { Container } from './styles'
import { api } from '../../services/api'
import { Link } from 'react-router-dom'

interface IGetModule {
  id: string
  name: string
  moduleID: string
}

interface ISortList {
  name: string
}

export const HomePage: React.FC = () => {
  const [module, setModule] = useState<IGetModule[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  function sortList(array: ISortList[]) {
    const list = array.sort((a, b) => {
      if (a.name > b.name) {
        return 1
      }
      if (a.name < b.name) {
        return -1
      }
      return 0
    })
    return list
  }

  useEffect(() => {
    setIsLoading(true)

    api
      .get('/modules')
      .then(response => {
        setModule(response.data)
        return response.data
      })
      .then(data => {
        sortList(data)
        setIsLoading(false)
      })
      .catch(err => {
        setErrorMessage('Ops! ocorreu um erro: ' + err)
        setIsLoading(false)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  const moduleList = module.map(data => {
    return (
      <div key={data.id}>
        <Link to={`/lessons/${data.id}`}>
          <h1>{data.name}</h1>
          <strong>Clique Para ver as aulas</strong>
        </Link>
      </div>
    )
  })

  return (
    <Container>
      <strong>Modulos:</strong>
      {isLoading ? <h2>Carregando...</h2> : moduleList}
      {errorMessage && <h2>{errorMessage}</h2>}
    </Container>
  )
}
