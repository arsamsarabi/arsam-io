import React, { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../styles/theme'
import { GlobalStyles } from '../../styles/global'
import Footer from '../footer'
import NoMobile from '../noMobile'
import { StyledLayout, Content } from './layout.styles'

export const Layout = ({ children }): ReactElement => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <StyledLayout>
          <NoMobile />
          <Content>{children}</Content>
          <Footer />
        </StyledLayout>
      </ThemeProvider>
    </>
  )
}

export default Layout
