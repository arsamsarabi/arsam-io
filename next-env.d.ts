/// <reference types="next" />
/// <reference types="next/types/global" />

declare type CV = {
  primary: {
    pale: string
    light: string
    medium: string
    dark: string
  }
  secondary: {
    pale: string
    light: string
    medium: string
    dark: string
  }
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
