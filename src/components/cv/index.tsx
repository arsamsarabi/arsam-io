import React, { ReactElement, useEffect } from 'react'
import useHover from 'react-use-hover'
import { useStores } from '../../stores'
import { CvSection } from './components/cvSection'
import { arsamsCV } from './components/data/cv'
import { Console } from '../console'
import { StyledCv, ConsoleWrapper } from './cv.styles'

export const Cv = (): ReactElement => {
  const [isHovering, hoverProps] = useHover()
  const { CvStore } = useStores()
  useEffect((): void => {
    if (isHovering) {
      CvStore.setIsOpen(isHovering)
    }
  })
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
      <ConsoleWrapper>
        <h2>Have you tried:</h2>
        <Console />
      </ConsoleWrapper>
    </StyledCv>
  )
}

export default Cv
