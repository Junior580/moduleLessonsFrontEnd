// import { useCallback, useRef } from 'react'
import { useCallback, useEffect, useRef } from 'react'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'

import { Input } from '../../components/input'

import { getValidationErrors } from '../../utils/getValidationErros'
import * as Yup from 'yup'
import { api } from '../../services/api'

import { Container } from './styles'

interface IUser {
  name: string
  email: string
  password: string
}

export const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>()

  const handleFormSubmit = useCallback(
    async ({ name, email, password }: IUser) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'No minimo 6 dígitos'),
        })

        await schema.validate(
          { name, email, password },
          {
            abortEarly: false,
          }
        )

        api.post('/users', { name, email, password }).then(response => {
          // console.log(response)
        })
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)
          formRef.current?.setErrors(errors)
        }
      }
    },
    []
  )

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleFormSubmit}>
        <h1>Cadastre-se</h1>

        <Input name='name' placeholder='name' />

        <Input name='email' placeholder='email' />

        <Input name='password' placeholder='password' type='password' />

        <button type='submit'>Entrar</button>
      </Form>
    </Container>
  )
}
