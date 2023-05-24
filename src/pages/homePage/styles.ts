import { styled } from 'styled-components'

export const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;

  background-color: #f1f1f1;
  padding: 10px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  strong {
    width: 100%;
    margin-left: 20px;
  }

  div {
    background-color: #04d361;

    display: inline-block;
    height: 380px;
    width: 300px;
    padding: 10px;

    margin: 10px;

    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s ease;

    &:hover {
      background-color: #4fe090;

      transform: translateY(-10px);
    }

    a {
      text-decoration: none;

      h1 {
        color: black;
        transition: 0.3s ease;

        &:hover {
          color: #a8a8b3;
        }
      }

      strong {
        color: black;
        transition: 0.3s ease;

        &:hover {
          color: #a8a8b3;
        }
      }

      h3 {
        color: black;
        transition: 0.3s ease;

        &:hover {
          color: #a8a8b3;
        }
      }
    }
  }
`
