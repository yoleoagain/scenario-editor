import React from 'react'
import { ThemeProvider as Provider } from 'styled-components'
import { lightTheme } from './index'

export const ThemeProvider: React.FC = ({ children }) => <Provider theme={lightTheme}>{children}</Provider>