import { InputHTMLAttributes, useEffect, useRef, useState } from 'react'
import { Container, Error } from './styles'
import { useField } from '@unform/core'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}
export const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const { fieldName, defaultValue, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: ref => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField])

  return (
    <Container isErrored={!!error}>
      <input
        name={name}
        ref={inputRef}
        type='text'
        placeholder='Type your username'
        defaultValue={defaultValue}
        {...rest}
      />
      {error && <Error title={error}></Error>}
    </Container>
  )
}
