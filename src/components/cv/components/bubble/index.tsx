import React, { ReactElement } from 'react'
import styled, { css } from 'styled-components'
import { config } from '../data'

interface Bubble {
  id: string
  children: ReactElement
}

interface BubbleWrapper {
  theme: Theme
  config: CvConfig
}

export const Bubble = ({ id, children }: Bubble): ReactElement => {
  const _config: CvConfig = config.find(c => c.id === id)
  if (!_config) {
    return null
  }
  console.log(_config)
  return <BubbleWrapper config={_config}>{children}</BubbleWrapper>
}

export const BubbleWrapper = styled.span<BubbleWrapper>(({ theme, config }) => {
  const sideBorders =
    config.side === 'left'
      ? css`
          border-right: 20px solid transparent;
          border-left: 20px solid gold;
        `
      : css`
          border-left: 20px solid transparent;
          border-right: 20px solid gold;
        `
  return css`
    width: 225px;
    min-height: 75px;
    position: absolute;
    left: ${config.position.left};
    top: ${config.position.top};
    display: flex;
    justify-content: center;
    align-items: center;
    &:after {
      content: '';
      ${sideBorders}
      border-bottom: 20px solid gold;
      position: absolute;
      bottom: 0;
      left: ${config.side === 'left' ? '205px' : '-20px'};
      z-index: 9;
    }

    & > div {
      flex: 1;
      z-index: 10;
      padding: 16px;
      font-size: 18px;
      min-height: 75px;
      background-color: ${theme.palette.contrast};
      color: ${theme.palette.primary};
      border: 4px solid gold;
      border-radius: 3px 10px 0 10px;
    }
  `
})
