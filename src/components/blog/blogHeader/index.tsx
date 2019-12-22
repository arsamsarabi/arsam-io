import React, { ReactElement } from 'react'
import { BlogHeader } from './blogHeader'
import { HeaderTitle } from '../headerTitle'

const Header = (): ReactElement => {
  return (
    <BlogHeader>
      <HeaderTitle>Yet another tech Blog</HeaderTitle>
    </BlogHeader>
  )
}

export { Header as BlogHeader }
