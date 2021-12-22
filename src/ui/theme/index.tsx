export { ThemeProvider } from './provider'

export interface IPalette {
  main: string
  contrastText: string
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
    main: '#726a95',
    contrastText: '#ffffff'
  }
}
