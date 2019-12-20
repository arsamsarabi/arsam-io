import React from 'react'
import { theme } from '../../../../styles/theme'
import { About, Blog, Name, Education, Experience, Technical } from '../info'

export const arsamsCV: CvSection[] = [
  {
    id: 'name',
    texts: [
      { text: 'Arsam', size: 124 },
      { text: 'Sarabi', size: 118 },
    ],
    color: theme.cv['001'],
    hoverColor: theme.cv['005'],
    bubble: <Name />,
  },
  {
    id: 'about',
    texts: [{ text: 'About', size: 128 }],
    color: theme.cv['002'],
    hoverColor: theme.cv['006'],
    bubble: <About />,
  },
  {
    id: 'experience',
    texts: [
      { text: 'Employment', size: 64 },
      { text: 'History', size: 100 },
    ],
    color: theme.cv['003'],
    hoverColor: theme.cv['005'],
    bubble: <Experience />,
  },
  {
    id: 'education',
    texts: [{ text: 'Education', size: 76 }],
    color: theme.cv['004'],
    hoverColor: theme.cv['004'],
    bubble: <Education />,
  },
  {
    id: 'technical',
    texts: [
      { text: 'Technical', size: 82 },
      { text: 'Skills', size: 134 },
    ],
    color: theme.cv['005'],
    hoverColor: theme.cv['003'],
    bubble: <Technical />,
  },
  {
    id: 'blog',
    texts: [
      { text: 'My Personal', size: 62 },
      { text: 'Blog', size: 166 },
    ],
    color: theme.cv['006'],
    hoverColor: theme.cv['002'],
    bubble: <Blog />,
  },
]
