import { useEffect, useState } from 'react'
import { Container, Title } from './styles'
import { api } from '../../services/api'
import { useResolvedPath } from 'react-router-dom'
import { format, parseISO } from 'date-fns'

interface IGetLesson {
  id: string
  name: string
  date: string
}

export const LessonPage: React.FC = () => {
  const [lesson, setLesson] = useState<IGetLesson[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const { pathname } = useResolvedPath('')

  lesson.sort(function (a, b) {
    const datea = parseISO(a.date)
    const dateb = parseISO(b.date)
    return datea - dateb
  })

  useEffect(() => {
    setIsLoading(true)
    api
      .get(`${pathname}`)
      .then(response => {
        setLesson(response.data)
        setIsLoading(false)
      })
      .catch(err => {
        setErrorMessage('Ops! ocorreu um erro: ' + err)
        setIsLoading(false)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [pathname])

  const lessonLinst = lesson.map(data => {
    const dateFormatted = format(
      parseISO(data.date),
      "dd/MM/yyyy 'às' HH:mm'h'"
    )

    return (
      <div key={data.id}>
        <h1>{data.name}</h1>
        <strong>{dateFormatted}</strong>
      </div>
    )
  })

  return (
    <>
      <Container>
        <Title>Proximas aulas: </Title>
        {isLoading ? <h2>Carregando...</h2> : lessonLinst}
        {errorMessage && <h2>{errorMessage}</h2>}
      </Container>
    </>
  )
}
