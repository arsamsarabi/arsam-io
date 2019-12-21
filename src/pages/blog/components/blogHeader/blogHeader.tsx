import styled, { css } from 'styled-components'

export const BlogHeader = styled.section(({ theme }) => {
  return css`
    width: 100%;
    height: 40px;
    border-bottom: 1px solid ${theme.cv['006']};
    display: flex;
    flex-direction: column;
    padding-bottom: 16px;
    margin-bottom: 64px;
  `
})
