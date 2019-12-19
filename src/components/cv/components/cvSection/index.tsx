import React, { ReactElement } from 'react'
import { CvHeading } from '../cvHeading'

export const CvSection = ({ texts, color, hoverColor }: CvSection): ReactElement => {
  return (
    <>
      {texts.map(
        (text: CvText): ReactElement => {
          return (
            <CvHeading color={color} hoverColor={hoverColor} size={text.size} key={text.text}>
              {text.text}
            </CvHeading>
          )
        },
      )}
    </>
  )
}
