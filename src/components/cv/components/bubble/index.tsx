import React, { ReactElement } from 'react'
import styled, { css } from 'styled-components'
import { darken, rgba } from 'polished'
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
          border-left: 20px solid ${darken(0.075, theme.palette.primary)};
        `
      : css`
          border-left: 20px solid transparent;
          border-right: 20px solid ${darken(0.075, theme.palette.primary)};
        `
  const topBottomBorder =
    config.arrow === 'bottom'
      ? css`
          border-bottom: 20px solid ${darken(0.075, theme.palette.primary)};
        `
      : css`
          border-top: 20px solid ${darken(0.075, theme.palette.primary)};
        `

  const arrowPosition =
    config.arrow === 'bottom'
      ? css`
          bottom: 0;
        `
      : css`
          top: 0;
        `

  return css`
    width: 225px;
    min-height: 75px;
    position: absolute;
    left: ${config.side === 'left' ? '-280px' : '310px'};
    top: ${config.top};
    display: flex;
    justify-content: center;
    align-items: center;
    &:after {
      content: '';
      position: absolute;
      ${sideBorders}
      ${topBottomBorder};
      ${arrowPosition}
      left: ${config.side === 'left' ? '205px' : '-20px'};
      z-index: 9;
    }

    & > div {
      flex: 1;
      z-index: 10;
      padding: 16px;
      font-size: 18px;
      min-height: 75px;
      background-color: ${rgba(theme.palette.primary, 0.99)};
      color: ${darken(0.035, theme.palette.contrast)};
      border: 4px solid ${darken(0.075, theme.palette.primary)};
      border-radius: 3px 10px 0 10px;
    }
  `
})
