import styled, { css } from 'styled-components'

export const StyledFooter = styled.footer(({ theme }: { theme: Theme }) => {
  return css`
    box-sizing: border-box;
    width: 100vw;
    height: 48px;
    display: flex;
    justify-items: flex-end;
    align-items: center;
    padding: 0 24px 24px;

    & > a:first-of-type {
      text-decoration: none;
      color: ${theme.palette.secondary};
      margin-right: auto;
      font-family: 'beauty', sans-serif;
      font-size: 28px;
    }
  `
})

export const SocialLink = styled.a(({ theme }: { theme: Theme }) => {
  return css`
    &:not(:last-of-type) {
      margin-right: 8px;
    }
    &:hover {
      & > svg {
        fill: ${theme.palette.secondary};
      }
    }
    & > svg {
      fill: ${theme.palette.contrast};
      width: 20px;
      height: auto;
      transition: 0.3s all ease-in;
    }
  `
})
