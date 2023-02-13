import React from 'react'

export const themes = {
  light: {
    bgColorA: '#ffffff',
    bgColorB: '#eeeeee',
    sfColorA: '#c6c6c6',
    sfColorB: '#eeeeee',
  },
  dark: {
    bgColorA: '#3d3a3a',
    bgColorB: '#5e5e5e',
    sfColorA: '#282828',
    sfColorB: '#2d2d2d',
  },
  color: {
    bgColorA: '#73007f',
    bgColorB: '#ff7d58',
    sfColorA: '#b1344f',
    sfColorB: '#e44019',
  },
}

export const ThemeContext = React.createContext(themes.color)
