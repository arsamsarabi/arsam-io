import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Layout, Cv } from '../components'
import { CvToggle } from '../components/cv/components/cvToggle'

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
        <CvToggle />
        <Cv />
      </StyledApp>
    </Layout>
  )
}

export default App
