import styled, { css } from 'styled-components'
import Tooltip from '../Tooltip'

interface ContainerProps {
  isErrored: boolean
}

export const Container = styled.div<ContainerProps>`
  input {
    padding: 5px 10px;
    border: none;
    border-radius: 5px;

    max-width: 250px;

    margin-top: 4px;

    &:focus {
      border: 2px solid #6855e0;
    }

    ${props =>
      props.isErrored &&
      css`
        border: 2px solid #ff0000;
      `}
  }
`

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
`
