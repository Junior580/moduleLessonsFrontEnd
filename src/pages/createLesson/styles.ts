import { styled } from 'styled-components'

export const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;

  background-color: #f1f1f1;
  padding: 10px;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  button {
    margin-top: 5px;

    border-radius: 5px;
    padding: 5px;

    color: #6855e0;
    background-color: #ffffff;
    border: 1px solid #6855e0;

    color: white;
    background-color: #6855e0;

    transition: 0.4s;

    &:hover {
      color: white;
      box-shadow: 0 0 20px #6852e099;
      background-color: #6855e0;
    }
  }
`
