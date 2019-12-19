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

declare type Palette = {
  primary: string
  secondary: string
  accent: string
  contrast: string
}

declare type Theme = {
  palette: Palette
  colors: Colors
  cv: CV
}
