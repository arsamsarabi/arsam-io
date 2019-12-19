import React, { ReactElement } from 'react'
import Link from 'next/link'
import styled, { css } from 'styled-components'

const StyledHeader = styled.header(({ theme }: { theme: Theme }) => {
  return css`
    box-sizing: border-box;
    width: 100vw;
    height: 48px;
    display: flex;
    justify-items: flex-end;
    align-items: center;
    padding: 0 32px;

    & > a {
      text-decoration: none;
      color: royalblue;
      color: ${theme.palette.contrast};
      &:first-of-type {
        margin-right: auto;
        font-family: var(--font-headings);
        font-size: 18px;
      }
      &:not(:first-of-type) {
        margin-left: 16px;
      }
    }
  `
})

export const Header = (): ReactElement => (
  <StyledHeader>
    <Link href="/">
      <a>Arsam</a>
    </Link>
    <Link href="/about/">
      <a>About</a>
    </Link>
    <Link href="/work/">
      <a>Work</a>
    </Link>
    <Link href="/blog/">
      <a>Blog</a>
    </Link>
  </StyledHeader>
)

export default Header
