import React, { ReactElement } from 'react'
import Link from 'next/link'
import { StyledFooter, SocialLink } from './footer.styles'
import { DevTo, Github, LinkedIn } from './icons'

export const Footer = (): ReactElement => (
  <StyledFooter>
    <Link href="/">
      <a>Arsam Sarabi</a>
    </Link>

    <SocialLink href="https://github.com/arsamsarabi" target="_blank">
      <Github />
    </SocialLink>
    <SocialLink href="https://dev.to/arsamsarabi" target="_blank">
      <DevTo />
    </SocialLink>
    <SocialLink href="https://www.linkedin.com/in/arsam/" target="_blank">
      <LinkedIn />
    </SocialLink>
  </StyledFooter>
)

export default Footer
