import { useCallback } from 'react'
import { api } from '../services/api'

interface IAuthState {
  token: string
  user: object
}

interface ISignInCredentials {
  email: string
  password: string
}

const signIn = useCallback(async ({ email, password }: ISignInCredentials) => {
  const response = await api.post('sessions', {
    email,
    password,
  })

  const { token, user } = response.data

  localStorage.setItem('@GoBarber:token', token)
  localStorage.setItem('@GoBarber:user', JSON.stringify(user))

  setData({ token, user })
}, [])
