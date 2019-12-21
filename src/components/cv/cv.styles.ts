import styled, { css } from 'styled-components'
import { rgba } from 'polished'

export const StyledCv = styled.section`
  width: 270px;
  margin: 50px auto;
  position: Relative;
`
export const ConsoleWrapper = styled.section(({ theme }) => {
  return css`
    margin-top: 32px;
    padding: 0 16px;
    h2 {
      color: ${rgba(theme.cv['005'], 0.8)};
      margin-bottom: 6px;
      font-size: 14px;
    }
  `
})
