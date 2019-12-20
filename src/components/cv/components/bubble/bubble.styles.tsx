import styled, { css } from 'styled-components'
import { darken, rgba } from 'polished'
import posed from 'react-pose'

interface BubbleWrapper {
  theme: Theme
  config: CvConfig
  isOpen: boolean
}

const PosedBubble = posed.div({
  hidden: {
    opacity: 0,
    right: ({ config }: { config: CvConfig }): string =>
      config.side === 'right' ? '-50px' : '50px',
  },
  visible: {
    opacity: 1,
    right: ({ config }: { config: CvConfig }): string =>
      config.side === 'right' ? '-280px' : '310px',
  },
})

export const BubbleWrapper = styled(PosedBubble)<BubbleWrapper>(({ theme, config }) => {
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
    top: ${config.top};
    display: flex;
    opacity: 0;
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
      padding: 18px;
      min-height: 75px;
      background-color: ${rgba(theme.palette.primary, 0.99)};
      color: ${darken(0.035, theme.palette.contrast)};
      border: 4px solid ${darken(0.075, theme.palette.primary)};
      border-radius: 3px 10px 0 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
    }
  `
})
