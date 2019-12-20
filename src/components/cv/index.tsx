import React, { ReactElement } from 'react'
import styled from 'styled-components'
import useHover from 'react-use-hover'
import { CvSection } from './components/cvSection'
import { arsamsCV } from './components/data/cv'

const StyledCv = styled.section`
  width: 270px;
  margin: 50px auto;
  position: Relative;
`

export const Cv = (): ReactElement => {
  const [isHovering, hoverProps] = useHover()
  return (
    <StyledCv {...hoverProps}>
      {arsamsCV.map(({ id, texts, color, hoverColor, bubble }: CvSection) => {
        return (
          <CvSection
            key={id}
            id={id}
            texts={texts}
            color={color}
            hoverColor={hoverColor}
            bubble={bubble}
            isHovering={isHovering}
          />
        )
      })}
    </StyledCv>
  )
}

export default Cv
