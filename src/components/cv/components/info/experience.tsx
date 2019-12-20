import React, { ReactElement } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  p {
    width: 100%;
    color: ${({ theme }): string => theme.palette.contrast};
    &:not(:last-of-type) {
      margin-bottom: 8px;
    }
    span {
      color: ${({ theme }): string => theme.palette.accent};
      display: block;
      font-size: 12px;
      font-weight: 700;
      padding-left: 8px;
    }
  }
`

export const Experience = (): ReactElement => {
  return (
    <Wrapper>
      <p>
        Technical Lead <span>@ Sensyne Health</span>
      </p>
      <p>
        Development Manager <span>@ ContactPartners</span>
      </p>
      <p>
        UI Developer <span>@ Relayware</span>
      </p>
    </Wrapper>
  )
}
