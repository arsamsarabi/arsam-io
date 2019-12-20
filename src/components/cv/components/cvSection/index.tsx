import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Bubble } from '../bubble'
import { CvHeading } from '../cvHeading'

const StyledSection = styled.section`
  position: relative;
  /* border: 1px solid gold; */
`

export const CvSection = ({ texts, color, hoverColor, bubble, id }: CvSection): ReactElement => {
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
      {bubble ? <Bubble id={id}>{bubble}</Bubble> : ''}
    </StyledSection>
  )
}
