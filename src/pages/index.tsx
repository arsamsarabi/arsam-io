import React, { ReactElement } from 'react'
import styled, { css } from 'styled-components'
import { Layout, Cv } from '../components'

const StyledApp = styled.main(({ theme }: { theme: Theme }) => {
  return css`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      font-family: var(--font-headings);
      font-size: 64px;
      line-height: 1.8;
      color: ${theme.palette.accent};
      max-width: 1024px;
    }
  `
})

const App = (): ReactElement => {
  return (
    <Layout>
      <StyledApp>
        <Cv />
      </StyledApp>
    </Layout>
  )
}

export default App
