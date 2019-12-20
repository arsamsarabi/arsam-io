import React, { ReactElement } from 'react'
import styled from 'styled-components'
import * as Icons from '../../../../styles/icons'
import { TechIconLink } from './techIconLink'

const Wrapper = styled.div`
  flex-wrap: wrap;
  justify-content: space-around !important;
  padding-bottom: 12px !important;
  & > i {
    width: 30px;
    height: auto;
    margin-right: 8px;
  }
  & > a {
    &:nth-last-of-type(1),
    &:nth-last-of-type(2),
    &:nth-last-of-type(3) {
      margin-bottom: 0;
    }
  }
`

export const Technical = (): ReactElement => {
  return (
    <Wrapper>
      <TechIconLink
        icon={<Icons.JavaScript />}
        link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        color="#f7df1e"
      />
      <TechIconLink
        icon={<Icons.TypeScript />}
        link="https://www.typescriptlang.org/"
        color="#0077c6"
      />
      <TechIconLink icon={<Icons.Python />} link="https://www.python.org/" color="#646464" />
      <TechIconLink
        icon={<Icons.Java />}
        link="https://en.wikipedia.org/wiki/Java_(programming_language)"
        color="#646464"
      />
      <TechIconLink icon={<Icons.ReactIcon />} link="https://reactjs.org/" color="#00d8ff" />
      <TechIconLink icon={<Icons.Angular />} link="https://angular.io/" color="#b52e31" />
      <TechIconLink icon={<Icons.Vue />} link="https://vuejs.org/" color="#42b883" />
      <TechIconLink icon={<Icons.Redux />} link="https://redux.js.org/" color="#7348b7" />
      <TechIconLink icon={<Icons.GraphQL />} link="https://graphql.org/" color="#de33a5" />
      <TechIconLink icon={<Icons.Node />} link="https://nodejs.org/" color="#215732" />
      <TechIconLink
        icon={<Icons.Css />}
        link="https://developer.mozilla.org/en-US/docs/Web/CSS"
        color="#254bde"
      />
      <TechIconLink icon={<Icons.Sass />} link="https://sass-lang.com/" color="#c66594" />
      <TechIconLink
        icon={<Icons.StyledComponents />}
        link="https://sass-lang.com/"
        color="#dc8280"
      />
      <TechIconLink icon={<Icons.Jest />} link="https://jestjs.io/" color="#954059" />
      <TechIconLink icon={<Icons.MongoDB />} link="" color="#51af3f" />
      <TechIconLink icon={<Icons.Docker />} link="https://www.mongodb.com/" color="#0897e5" />
      <TechIconLink icon={<Icons.Webpack />} link="https://webpack.js.org/" color="#1d75bb" />
      <TechIconLink icon={<Icons.CircleCI />} link="https://circleci.com/" color="#555555" />
      <TechIconLink icon={<Icons.Git />} link="https://git-scm.com/" color="#e94e31" />

      <i aria-hidden="true" />
      <i aria-hidden="true" />
    </Wrapper>
  )
}
