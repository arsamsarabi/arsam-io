import React, { ReactElement } from 'react'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Layout from '../../components/layout'

const BlogTemplate = (props): ReactElement => {
  // data from getInitialProps
  const markdownBody = props.content
  const frontmatter = props.data
  return (
    <Layout>
      <article>
        <h1>{frontmatter.title}</h1>
        <div>
          <ReactMarkdown source={markdownBody} />
        </div>
      </article>
    </Layout>
  )
}

BlogTemplate.getInitialProps = async (context: any): Promise<any> => {
  const { slug } = context.query
  const content = await import(`../../posts/${slug}.md`)
  return matter(content.default)
}

export default BlogTemplate
