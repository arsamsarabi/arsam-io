import React, { ReactElement } from 'react'
import Header from '../header'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../../styles/global'

const StyledLayout = styled.div``

const Layout = ({ children }): ReactElement => {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyles />
      <StyledLayout>
        <Header />
        {children}
      </StyledLayout>
    </ThemeProvider>
  )
}

export default Layout
