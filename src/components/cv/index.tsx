import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { CvSection } from './components/cvSection'
import { arsamsCV } from './components/data'

const StyledCv = styled.section`
  width: 270px;
  margin: 50px auto;
  position: Relative;
`

export const Cv = (): ReactElement => {
  return (
    <StyledCv>
      {arsamsCV.map(({ id, texts, color, hoverColor }: CvSection) => {
        return <CvSection key={id} texts={texts} color={color} hoverColor={hoverColor} />
      })}
    </StyledCv>
  )
}

export default Cv
