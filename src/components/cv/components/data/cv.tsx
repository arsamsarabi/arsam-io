import React from 'react'
import { theme } from '../../../../styles/theme'

export const arsamsCV: CvSection[] = [
  {
    id: 'name',
    texts: [
      { text: 'Arsam', size: 124 },
      { text: 'Sarabi', size: 118 },
    ],
    color: theme.cv['001'],
    hoverColor: theme.cv['005'],
    bubble: <div>Hi! my name is</div>,
  },
  {
    id: 'about',
    texts: [{ text: 'About', size: 128 }],
    color: theme.cv['002'],
    hoverColor: theme.cv['006'],
    bubble: (
      <div>
        I am a software engineer Repellat aut nisi corrupti hic rerum eveniet in ducimus est.
        Deserunt ab minima voluptate quo. Delectus ut iure eos rerum vel.
      </div>
    ),
  },
  {
    id: 'experience',
    texts: [
      { text: 'Employment', size: 64 },
      { text: 'History', size: 100 },
    ],
    color: theme.cv['003'],
    hoverColor: theme.cv['005'],
    bubble: (
      <div>
        <ul>
          <li>Technical Lead @ Sensyne Health</li>
          <li>Development Manager @ ContactPartners</li>
          <li>UI Developer @ Relayware</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'education',
    texts: [{ text: 'Education', size: 76 }],
    color: theme.cv['004'],
    hoverColor: theme.cv['004'],
    bubble: (
      <div>
        <ul>
          <li>BSc Computer Science @ Oxford Brookes University</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'technical',
    texts: [
      { text: 'Technical', size: 82 },
      { text: 'Skills', size: 134 },
    ],
    color: theme.cv['005'],
    hoverColor: theme.cv['003'],
    bubble: (
      <div>
        <ul>
          <li>Javascript | Typescript | Python | Java </li>
          <li>React, Angular, Redux, MobX, GraphQL, Node, Express, REST</li>
          <li>CSS, SASS, Less, PostCSS, styled-components</li>
          <li>Jest, Enzyme, Cypress, Puppeteer</li>
          <li>MongoDB, Mongoose</li>
          <li>Webpack, Docker, CI/CD</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'blog',
    texts: [
      { text: 'My Personal', size: 62 },
      { text: 'Blog', size: 166 },
    ],
    color: theme.cv['006'],
    hoverColor: theme.cv['002'],
  },
]
