import React, { ReactElement } from 'react'
import styled, { css } from 'styled-components'
import { Layout } from '../components'

const StyledApp = styled.main(({ theme }: { theme: Theme }) => {
  return css`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      font-family: var(--font-headings);
      font-size: 32px;
      line-height: 1.8;
      color: ${theme.palette.accent};
      max-width: 920px;
    }
  `
})

const App = (): ReactElement => {
  return (
    <Layout>
      <StyledApp>
        <h1>Hi I'm Arsam. A Full-Stack Javascript Engineer based in Oxford, England</h1>
      </StyledApp>
    </Layout>
  )
}

export default App
