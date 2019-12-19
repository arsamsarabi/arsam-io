import { lighten, darken } from 'polished'

const CV_PRIMARY = '#7efff5'
const CV_SECONDARY = '#67e6dc'

const colors: Colors = {
  tuna: '#33313b',
  steel: '#7efff5',
  cashmere: '#e3c4a8',
  sand: '#f6f5f5',
}

const cv: CV = {
  primary: {
    pale: lighten(0.15, CV_PRIMARY),
    light: lighten(0.05, CV_PRIMARY),
    medium: CV_PRIMARY,
    dark: darken(0.075, CV_PRIMARY),
  },
  secondary: {
    pale: lighten(0.15, CV_SECONDARY),
    light: lighten(0.05, CV_SECONDARY),
    medium: CV_SECONDARY,
    dark: darken(0.075, CV_SECONDARY),
  },
}

const palette: Palette = {
  primary: colors.tuna,
  secondary: colors.steel,
  accent: colors.cashmere,
  contrast: colors.sand,
}

export const theme: Theme = {
  palette,
  colors,
  cv,
}
