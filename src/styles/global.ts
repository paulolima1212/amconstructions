import { globalCss } from './index'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Oswald, sans-serif',
  },

  html: {
    fontSize: '62.5%',
  },

  button: {
    cursor: 'pointer',
  },

  '&::-webkit-scrollbar': {
    display: 'none',
  },
})
