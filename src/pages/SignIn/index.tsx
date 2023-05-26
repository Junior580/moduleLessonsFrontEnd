// import { useCallback, useRef } from 'react'
import { useCallback, useEffect, useRef } from 'react'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'

import { Input } from '../../components/input'

import { getValidationErrors } from '../../utils/getValidationErros'
import * as Yup from 'yup'

import { Container } from './styles'
import { useAuth } from '../../services/auth'

interface IUser {
  email: string
  password: string
}

export const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>()

  const { signIn } = useAuth()

  const handleFormSubmit = useCallback(
    async ({ email, password }: IUser) => {
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
          { email, password },
          {
            abortEarly: false,
          }
        )

        signIn({
          email: email,
          password: password,
        })
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)
          formRef.current?.setErrors(errors)
        }
      }
    },
    [signIn]
  )

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleFormSubmit}>
        <h1>Login</h1>

        <Input name='email' placeholder='email' />

        <Input name='password' placeholder='password' type='password' />

        <button type='submit'>Entrar</button>
      </Form>
    </Container>
  )
}
