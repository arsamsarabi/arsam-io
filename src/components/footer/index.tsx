import React, { ReactElement } from 'react'
import Link from 'next/link'
import styled, { css } from 'styled-components'

const StyledFooter = styled.footer(({ theme }: { theme: Theme }) => {
  return css`
    box-sizing: border-box;
    width: 100vw;
    height: 48px;
    display: flex;
    justify-items: flex-end;
    align-items: center;
    padding: 0 24px 24px;

    & > a {
      text-decoration: none;
      color: royalblue;
      color: ${theme.palette.secondary};
      &:first-of-type {
        margin-right: auto;
        font-family: 'beauty', sans-serif;
        font-size: 28px;
      }
    }
  `
})

export const Footer = (): ReactElement => (
  <StyledFooter>
    <Link href="/">
      <a>Arsam Sarabi</a>
    </Link>
  </StyledFooter>
)

export default Footer
