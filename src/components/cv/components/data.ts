import { theme } from '../../../styles/theme'

export const arsamsCV: CvSection[] = [
  {
    id: 'name',
    texts: [{ text: 'Arsam', size: 124 }],
    color: theme.cv['001'],
    hoverColor: theme.cv['005'],
  },
  {
    id: 'about',
    texts: [{ text: 'About', size: 128 }],
    color: theme.cv['002'],
    hoverColor: theme.cv['006'],
  },
  {
    id: 'experience',
    texts: [
      { text: 'Employment', size: 64 },
      { text: 'History', size: 100 },
    ],
    color: theme.cv['003'],
    hoverColor: theme.cv['005'],
  },
  {
    id: 'education',
    texts: [{ text: 'Education', size: 76 }],
    color: theme.cv['004'],
    hoverColor: theme.cv['004'],
  },
  {
    id: 'technical',
    texts: [
      { text: 'Technical', size: 82 },
      { text: 'Skills', size: 134 },
    ],
    color: theme.cv['005'],
    hoverColor: theme.cv['003'],
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
  {
    id: 'contact',
    texts: [
      { text: 'Get in', size: 138 },
      { text: 'Touch', size: 130 },
    ],
    color: theme.cv['007'],
    hoverColor: theme.cv['001'],
  },
]
