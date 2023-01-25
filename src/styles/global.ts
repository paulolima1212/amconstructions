import { globalCss } from './index'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Roboto, sans-serif',
  },

  '&::-webkit-scrollbar': {
    display: 'none',
  },
})
