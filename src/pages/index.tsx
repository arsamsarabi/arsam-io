import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Layout, Cv } from '../components'

const StyledApp = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

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
