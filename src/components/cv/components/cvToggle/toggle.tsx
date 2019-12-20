import React, { ReactElement } from 'react'
import styled, { css } from 'styled-components'
import { rgba } from 'polished'

const ToggleWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
`

const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 45px;
  height: 20px;
`

const Input = styled.input(({ theme }: { theme: Theme }) => {
  return css`
    opacity: 0;
    width: 0;
    height: 0;
    &:checked + span {
      background-color: ${rgba(theme.cv['001'], 0.2)};
      &:before {
        transform: translateX(26px);
        background-color: ${theme.cv['001']};
      }
    }
  `
})

const Indicator = styled.span(({ theme }: { theme: Theme }) => {
  return css`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${theme.palette.primary};
    transition: 0.4s;
    border-radius: 34px;
    &:before {
      position: absolute;
      content: '';
      height: 15px;
      width: 15px;
      left: 2px;
      bottom: 3px;
      background-color: ${rgba(theme.cv['007'], 0.4)};
      transition: 0.4s;
      border-radius: 50%;
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
      <Label>
        <Input type="checkbox" checked={checked} onChange={onClick} />
        <Indicator />
      </Label>
    </ToggleWrapper>
  )
}
