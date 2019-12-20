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
      color: ${({ theme }): string => theme.palette.secondary};
      display: block;
      font-size: 12px;
      font-weight: 700;
      padding-left: 8px;
    }
  }
`

export const Education = (): ReactElement => {
  return (
    <Wrapper>
      <p>
        Bsc Computer Science <span>@ Oxford Brookes University</span>
      </p>
    </Wrapper>
  )
}
