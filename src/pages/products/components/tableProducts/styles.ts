import { styled } from '@/styles'

export const TableContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '3rem',
  color: '$gray900',

  table: {
    borderCollapse: 'collapse',
    borderSpacing: '0 0.5rem',
    marginTop: '1.5rem',

    thead: {
      tr: {
        border: 'solid 1px $gray900',
        background: '$gray300',
        th: {
          padding: '1rem',
        },
      },
    },

    tbody: {
      tr: {
        border: 'solid 1px $gray900',
        td: {
          padding: '1rem',
        },

        '&:nth-child(even)': {
          background: '$gray100',
        },

        '&:nth-child(odd)': {
          background: '$baseButton',
        },
      },
    },
  },
})
