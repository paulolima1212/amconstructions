import { styled } from '@/styles'

export const TableContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '3rem',

  table: {
    borderCollapse: 'collapse',
    borderSpacing: '0 0.5rem',
    marginTop: '1.5rem',

    thead: {
      tr: {
        border: 'solid 1px $gray100',
        th: {
          padding: '1rem',
        },
      },
    },

    tbody: {
      tr: {
        border: 'solid 1px $gray100',
        td: {
          padding: '1rem',
        },
      },
    },
  },
})
