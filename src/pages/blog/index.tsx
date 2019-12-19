import matter from 'gray-matter'
import React, { ReactElement } from 'react'
import Layout from '../../components/layout'

const Blog = (props): ReactElement => {
  console.log(props)
  return (
    <Layout>
      <h1>Arsam</h1>
    </Layout>
  )
}

Blog.getInitialProps = (): any => {
  // get all .md files from the src/posts dir
  const posts = ((context): any => {
    // grab all the files matching this context
    const keys = context.keys()
    // grab the values from these files
    const values = keys.map(context)
    // go through each file
    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.')
      // get the current file value
      const value: any = values[index]
      // Parse frontmatter & markdownbody for the current file
      const document = matter(value.default)
      // return the .md content & pretty slug
      return {
        document,
        slug,
      }
    })
    // return all the posts
    return data
  })(require.context('../../posts', true, /\.md$/))

  return {
    allBlogs: posts,
  }
}

export default Blog
