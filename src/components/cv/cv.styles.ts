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
      transition: color 2.5s ease;
      &:nth-of-type(1) {
        font-size: 124px;
        color: ${cv['001']};
        &:hover {
          color: ${cv['007']};
        }
      }
      &:nth-of-type(2) {
        font-size: 128px;
        color: ${cv['002']};
        &:hover {
          color: ${cv['006']};
        }
      }
      &:nth-of-type(3) {
        font-size: 64px;
        color: ${cv['003']};
        &:hover {
          color: ${cv['005']};
        }
      }
      &:nth-of-type(4) {
        font-size: 100px;
        color: ${cv['003']};
        &:hover {
          color: ${cv['005']};
        }
      }
      &:nth-of-type(5) {
        font-size: 76px;
        color: ${cv['004']};
      }
      &:nth-of-type(6) {
        font-size: 82px;
        color: ${cv['005']};
        &:hover {
          color: ${cv['003']};
        }
      }
      &:nth-of-type(7) {
        font-size: 134px;
        color: ${cv['005']};
        &:hover {
          color: ${cv['003']};
        }
      }
      &:nth-of-type(8) {
        font-size: 62px;
        color: ${cv['006']};
        &:hover {
          color: ${cv['002']};
        }
      }
      &:nth-of-type(9) {
        font-size: 166px;
        color: ${cv['006']};
        &:hover {
          color: ${cv['002']};
        }
      }
      &:nth-of-type(10) {
        font-size: 138px;
        color: ${cv['007']};
        &:hover {
          color: ${cv['001']};
        }
      }
      &:nth-of-type(11) {
        font-size: 130px;
        color: ${cv['007']};
        &:hover {
          color: ${cv['001']};
        }
      }
    }
  `
})
