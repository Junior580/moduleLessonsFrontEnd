import { styled } from 'styled-components'

export const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;

  background-color: #f1f1f1;
  padding: 10px;

  display: flex;
  flex-wrap: wrap;

  div {
    background-color: #ff4d4d;
    border-radius: 10px;
    padding: 10px;
    width: 200px;

    margin: 10px;
    transition: ease 0.3s;

    &:hover {
      background-color: #ff8282;

      transform: translateX(10px);
    }
  }
`
export const Title = styled.strong`
  width: 100%;
`
