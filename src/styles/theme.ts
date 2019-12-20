const colors: Colors = {
  tuna: '#33313b',
  morning: '#9BC5DE',
  cashmere: '#e3c4a8',
  sand: '#f6f5f5',
  pomegranate: '#c0392b',
  alizarin: '#e74c3c',
  orange: '#f39c12',
  sun: '#f1c40f',
  nephritis: '#27ae60',
  emerald: '#2ecc71',
}

const cv: CV = {
  '001': '#9BC5DE',
  '002': '#90B3C9',
  '003': '#809BB0',
  '004': '#6B7B8A',
  '005': '#8B8091',
  '006': '#B68FA2',
  '007': '#D99AB5',
}

const palette: Palette = {
  primary: colors.tuna,
  secondary: colors.morning,
  accent: colors.cashmere,
  contrast: colors.sand,
  danger: {
    light: colors.alizarin,
    dark: colors.pomegranate,
  },
  warning: {
    light: colors.sun,
    dark: colors.orange,
  },
  success: {
    light: colors.emerald,
    dark: colors.nephritis,
  },
}

export const theme: Theme = {
  palette,
  colors,
  cv,
}
