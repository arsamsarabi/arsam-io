import React from 'react'
import styled, { keyframes } from 'styled-components'
import { lighten, darken } from 'polished'
import { Cv } from '../../src/components'

const backgroundAnimation = keyframes`
  0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(
    -45deg,
    ${({ theme }) => lighten(0.05, theme.palette.primary)},
    ${({ theme }) => lighten(0.025, theme.palette.primary)},
    ${({ theme }) => theme.palette.primary},
    ${({ theme }) => darken(0.025, theme.palette.primary)},
    ${({ theme }) => darken(0.05, theme.palette.primary)}
  );
  background-size: 400% 400%;
  animation: ${backgroundAnimation} 10s ease infinite;
`

export default {
  CV: (
    <Wrapper>
      <Cv />
    </Wrapper>
  ),
}
