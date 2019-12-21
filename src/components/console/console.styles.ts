import styled, { css, keyframes } from 'styled-components'

export const Window = styled.div`
  background-color: #1c1d1c;
  min-height: 100px;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  overflow: hidden;
`
export const Header = styled.div`
  background-color: #303030;
  min-height: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

interface Button {
  color: string
}
export const Button = styled.div<Button>(({ color }) => {
  return css`
    width: 10px;
    height: 10px;
    border-radius: 50px;
    background-color: ${color};
    color: #ffffff;
    margin-left: 4px;
  `
})

export const Body = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: Consolas, Menlo, Courier New, monospace, serif;
`

export const Dollar = styled.p`
  font-size: 16px;
  margin-right: 12px;
`
export const Command = styled.p`
  margin-right: 12px;
`
const blink = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const Blinker = styled.span`
  min-width: 1px;
  min-height: 16px;
  border: 1px solid #555;
  margin-top: 2px;
  animation: ${blink} 1s ease-in-out 0s infinite;
`
