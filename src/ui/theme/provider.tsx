
import React from 'react'
import { ThemeProvider as Provider } from 'styled-components'
import { lightTheme } from './index'

export const ThemeProvider = ({ children }) => <Provider theme={lightTheme}>{children}</Provider>