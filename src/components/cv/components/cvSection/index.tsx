import React, { ReactElement } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { Bubble } from '../bubble'
import { CvHeading } from '../cvHeading'

const StyledSection = styled.section`
  position: relative;
`

export const CvSection = ({
  texts,
  color,
  hoverColor,
  bubble,
  id,
  isHovering,
}: CvSection): ReactElement => {
  return (
    <StyledSection>
      {texts.map(
        (text: CvText): ReactElement => {
          const el = (
            <CvHeading
              color={color}
              hoverColor={hoverColor}
              size={text.size}
              key={text.text}
              id={id}
            >
              {text.text}
            </CvHeading>
          )
          if (id === 'blog') {
            return (
              <Link href="/blog" key={text.text}>
                {el}
              </Link>
            )
          }
          return el
        },
      )}
      {bubble ? (
        <Bubble id={id} isHovering={isHovering}>
          {bubble}
        </Bubble>
      ) : (
        ''
      )}
    </StyledSection>
  )
}
