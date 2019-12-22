import styled, { css } from 'styled-components'

export const HeaderTitle = styled.h1(({ theme }) => {
  return css`
    font-size: 46px;
    font-family: 'beauty', sans-serif;
    color: ${theme.cv['006']};
  `
})
