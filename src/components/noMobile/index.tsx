import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'

const Wrapper = styled.div`
  background-color: ${({ theme }): string => rgba(theme.palette.danger.light, 0.1)};
  position: absolute;
  padding: 16px 64px;
  transform: rotateZ(45deg);
  right: -72px;
  top: 36px;
  h1 {
    font-size: 12px;
    opacity: 0.5;
  }
`

export const NoMobile = (): ReactElement => (
  <Wrapper>
    <h1>Not Resopinsive yet 🙁</h1>
  </Wrapper>
)

export default NoMobile
