import styled, { css } from 'styled-components'

export const CvHeading = styled.p<CvHeading>(({ size, color, hoverColor }) => {
  return css`
    line-height: 0.8;
    text-transform: uppercase;
    letter-spacing: 0px;
    display: block;
    text-align: justify;
    font-family: var(--font-headings);
    transition: color 2.5s ease;
    -webkit-touch-callout: none;
    user-select: none;
    font-size: ${size}px;
    color: ${color};
    z-index: 1;
    &:hover {
      color: ${hoverColor};
    }
  `
})
