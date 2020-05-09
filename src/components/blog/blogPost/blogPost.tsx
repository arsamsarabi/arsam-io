import styled, { css } from 'styled-components'
import { rgba } from 'polished'

export const BlogPost = styled.section(({ theme }) => {
  return css`
    margin-bottom: 32px;
    background-color: ${theme.palette.contrast};
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 0 3px 0 ${rgba(theme.colors.black, 0.5)};
  `
})

interface HeroInterface {
  theme: Theme
  image: string
  bgPos: string
}

export const Hero = styled.div<HeroInterface>(({ theme, image, bgPos }) => {
  return css`
    background-image: url(${image});
    width: 100%;
    min-height: 300px;
    background-attachment: border;
    background-position: ${bgPos};
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: flex-end;
    & > div {
      padding: 8px 16px;
      width: 100%;
      height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: ${rgba(theme.palette.primary, 0.85)};
      color: ${rgba(theme.palette.contrast, 1)};

      h1 {
        font-family: var(--font-headings);
        font-size: 38px;
        font-weight: 700;
      }
      & > span {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
      }
    }
  `
})

export const Content = styled.div(
  ({ theme }) => css`
    padding: 32px;
    color: ${theme.palette.primary};
  `,
)
