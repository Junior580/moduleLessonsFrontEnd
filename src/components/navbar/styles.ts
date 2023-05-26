import styled from 'styled-components'

export const Container = styled.header`
  /* background-color: red; */
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    text-decoration: none;
    color: #6855e0;

    & + a button {
      margin-left: 10px;

      color: white;
      background-color: #6855e0;
    }
  }

  div button {
    border-radius: 5px;
    padding: 5px;

    color: #6855e0;
    background-color: #ffffff;
    border: 1px solid #6855e0;

    transition: 0.4s;

    & + button {
      margin-left: 10px;
      color: white;
      background-color: #6855e0;
    }
  }

  div button:hover {
    color: white;
    box-shadow: 0 0 20px #6852e099;
    background-color: #6855e0;
  }
`
