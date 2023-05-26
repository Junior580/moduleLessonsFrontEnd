import { FormHandles } from '@unform/core'
import React, { useCallback, useEffect, useRef } from 'react'
import * as Yup from 'yup'
import { api } from '../../services/api'
import { getValidationErrors } from '../../utils/getValidationErros'
import { Container } from './styles'
import { Form } from '@unform/web'
import { Input } from '../../components/input'

export const CreateLesson: React.FC = () => {
  const formRef = useRef<FormHandles>()

  const handleFormSubmit = useCallback(
    async ({ name, module, date }: IUser) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          module: Yup.string().required('Módulo obrigatório'),
          date: Yup.string().required('Data obrigatória'),
        })

        await schema.validate(
          { name, module, date },
          {
            abortEarly: false,
          }
        )

        api.post('/users', { name, module, date }).then(response => {
          console.log(response)
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

        <Input name='module' placeholder='module' />

        <Input name='date' placeholder='date' />

        <button type='submit'>Enviar</button>
      </Form>
    </Container>
  )
}
