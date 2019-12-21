import React, { ReactElement } from 'react'
import styled, { css } from 'styled-components'
import { rgba } from 'polished'

export const Wrapper = styled.a(({ theme, color }: { theme: Theme; color: string }) => {
  return css`
    width: 30px;
    height: auto;
    margin-bottom: 12px;
    margin-right: 8px;
    pointer-events: all;
    &:hover {
      & > svg {
        fill: ${color};
      }
    }
    & > svg {
      fill: ${rgba(theme.palette.contrast, 0.8)};
      width: 30px;
      height: auto;
      transition: 0.3s all ease-in;
    }
  `
})

interface TechIconLink {
  icon: ReactElement
  color: string
  link: string
}

export const TechIconLink = ({ icon, color, link }: TechIconLink): ReactElement => {
  return (
    <Wrapper href={link} target="_blank" color={color}>
      {icon}
    </Wrapper>
  )
}
