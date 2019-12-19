import styled, { css } from 'styled-components'
import { lighten } from 'polished'
interface StyledLayoutProps {
  theme: Theme
}

export const StyledLayout = styled.section(({ theme }: StyledLayoutProps) => {
  return css`
    background-image: linear-gradient(
      to right,
      ${theme.palette.primary} 0%,
      ${lighten(0.025, theme.palette.primary)} 100%
    );
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  `
})

export const Content = styled.main`
  flex: 1;
  padding: 32px;
  display: flex;
`
