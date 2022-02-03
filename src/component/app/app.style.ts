import styled, { createGlobalStyle } from 'styled-components'

export const Reset = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body,
  #here {
    height: 100%;
  }

  body {
    margin: 0;
  }
`

export const App = styled.div`
  padding: 2rem;
  border: 1px solid red;
  height: 100%;
`
