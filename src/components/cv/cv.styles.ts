import styled, { css } from 'styled-components'
import { noSelect } from '../../styles/helpers/noSelect'

export interface TitleProps {
  theme: Theme
}

export const StyledCv = styled.section(({ theme }: TitleProps): any => {
  const { cv } = theme
  return css`
    width: 270px;
    margin: 50px auto;
    position: Relative;
    /* border: 1px solid hotpink; */
    & > p {
      ${noSelect}
      line-height: 0.8;
      text-transform: uppercase;
      letter-spacing: 0px;
      display: block;
      text-align: justify;
      font-family: var(--font-headings);

      &:nth-of-type(1) {
        font-size: 124px;
        color: ${cv.primary.pale};
      }
      &:nth-of-type(2) {
        font-size: 128px;
        color: ${cv.primary.light};
      }
      &:nth-of-type(3) {
        font-size: 64px;
        color: ${cv.primary.medium};
      }
      &:nth-of-type(4) {
        font-size: 100px;
        color: ${cv.primary.medium};
      }
      &:nth-of-type(5) {
        font-size: 76px;
        color: ${cv.primary.dark};
      }
      &:nth-of-type(6) {
        font-size: 82px;
        color: ${cv.secondary.dark};
      }
      &:nth-of-type(7) {
        font-size: 134px;
        color: ${cv.secondary.dark};
      }
      &:nth-of-type(8) {
        font-size: 62px;
        color: ${cv.secondary.medium};
      }
      &:nth-of-type(9) {
        font-size: 166px;
        color: ${cv.secondary.medium};
      }
      &:nth-of-type(10) {
        font-size: 138px;
        color: ${cv.secondary.light};
      }
      &:nth-of-type(11) {
        font-size: 132px;
        color: ${cv.secondary.pale};
      }
    }
  `
})
