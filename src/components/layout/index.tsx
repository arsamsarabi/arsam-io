import React, { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../styles/theme'
import Header from '../header'
import { StyledLayout, Content } from './layout.styles'

export const Layout = ({ children }): ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <StyledLayout>
        <Header />
        <Content>{children}</Content>
      </StyledLayout>
    </ThemeProvider>
  )
}

export default Layout
