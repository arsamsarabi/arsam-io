import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { CvHeading } from '../cvHeading'

const StyledSection = styled.section`
  position: relative;
  /* border: 1px solid gold; */
`

export const CvSection = ({ texts, color, hoverColor }: CvSection): ReactElement => {
  return (
    <StyledSection>
      {texts.map(
        (text: CvText): ReactElement => {
          return (
            <CvHeading color={color} hoverColor={hoverColor} size={text.size} key={text.text}>
              {text.text}
            </CvHeading>
          )
        },
      )}
    </StyledSection>
  )
}
