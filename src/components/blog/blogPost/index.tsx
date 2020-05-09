import React, { ReactElement } from 'react'
import { BlogPost, Hero, Content } from './blogPost'

interface PostProps {
  post: Post
}

const Post = ({ post }: PostProps): ReactElement => {
  const {
    document: {
      data: { title, author, date, hero_image, bgPos },
      content,
    },
  } = post
  return (
    <BlogPost>
      <Hero image={hero_image} bgPos={bgPos}>
        <div>
          <h1>{title}</h1>
          <span>
            <p>{author}</p>
            <p>{date}</p>
          </span>
        </div>
      </Hero>

      <Content>
        <p>{content}</p>
      </Content>
    </BlogPost>
  )
}

export { Post as BlogPost }
