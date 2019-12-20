import React, { ReactElement } from 'react'
import styled, { css } from 'styled-components'

const ToggleWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
`

const Label = styled.label(({ theme }: { theme: Theme }) => {
  return css`
    position: relative;
    display: block;
    width: 42px;
    height: 24px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transform: translate3d(0, 0, 0);
    &:before {
      content: '';
      position: relative;
      top: 1px;
      left: 1px;
      width: 40px;
      height: 22px;
      display: block;
      background: ${theme.cv['005']};
      border-radius: 12px;
      transition: background 0.2s ease;
    }
  `
})

const Input = styled.input(({ theme }: { theme: Theme }) => {
  return css`
    display: none;
    &:checked + label {
      &:before {
        background: ${theme.cv['001']};
      }
      & > span {
        transform: translateX(18px);
        & > svg > path {
          stroke: ${theme.cv['001']};
          stroke-dasharray: 25;
          stroke-dashoffset: 25;
        }
      }
    }
  `
})

const Indicator = styled.span(({ theme }: { theme: Theme }) => {
  return css`
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 24px;
    display: block;
    background: ${theme.palette.primary};
    border-radius: 50%;
    transition: all 0.2s ease;
    & > svg {
      margin: 7px;
      fill: none;
      & > path {
        stroke: ${theme.cv['005']};
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-dasharray: 24;
        stroke-dashoffset: 0;
        transition: all 0.5s linear;
      }
    }
  `
})

export type ToggleProps = {
  checked: boolean
  onClick: () => void
}

export const Toggle = ({ onClick, checked }: ToggleProps): ReactElement => {
  return (
    <ToggleWrapper>
      <Input type="checkbox" checked={checked} onChange={onClick} id="toggleInput" />
      <Label htmlFor="toggleInput">
        <Indicator>
          <svg width="10px" height="10px" viewBox="0 0 10 10">
            <path d="M5,1 L5,1 C2.790861,1 1,2.790861 1,5 L1,5 C1,7.209139 2.790861,9 5,9 L5,9 C7.209139,9 9,7.209139 9,5 L9,5 C9,2.790861 7.209139,1 5,1 L5,9 L5,1 Z"></path>
          </svg>
        </Indicator>
      </Label>
    </ToggleWrapper>
  )
}
