/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.svg' {
  const content: any
  export default content
}

declare type CV = {
  '001': string
  '002': string
  '003': string
  '004': string
  '005': string
  '006': string
  '007': string
}

declare type Colors = {
  [key: string]: string
}

declare type BasicColor = {
  light: string
  dark: string
}

declare type Palette = {
  primary: string
  secondary: string
  accent: string
  contrast: string
  danger: BasicColor
  warning: BasicColor
  success: BasicColor
}

declare type Theme = {
  palette: Palette
  colors: Colors
  cv: CV
}

declare type CvText = {
  text: string
  size: number
}

declare type CvSection = {
  id?: text
  texts: CvText[]
  color: string
  hoverColor: string
  bubble?: React.ReactElement
  isHovering?: boolean
}

declare type CvHeading = {
  size: number
  color: string
  hoverColor: string
}

declare type CvConfig = {
  id: string
  side: 'right' | 'left'
  arrow: 'top' | 'bottom'
  top: string
}

/**
 * STORES
 */

declare type CvStore = {
  isOpen: boolean
  setIsOpen(value: boolean): void
}

/**
 * BLOG
 */
declare type PostData = {
  title: string
  author: string
  date: string
  hero_image: string
  bgPos: string
}

declare type PostDocument = {
  content: string
  data: PostData
}

declare type Post = {
  slug: string
  document: PostDocument
}
