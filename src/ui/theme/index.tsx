export { ThemeProvider } from './provider'

export interface IPalette {
  main: string
  mainColor: string
  mainLighter: string
  borderColor: string
}

export interface ITheme {
  palette: IPalette,
  paddings: {
    main: string
    half: string
    quarter: string
  },
  borderRadius: string
}

export const lightTheme: ITheme = {
  borderRadius: '4px',
  paddings: {
    main: '16px',
    half: '6px',
    quarter: '4px',
  },
  palette: {
    main: '#313131',
    mainLighter: '#1f1c1c',
    mainColor: '#75655b',
    borderColor: '#1d1d1d'
  }
}
