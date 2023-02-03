import { styled } from '@/styles'

export const TableContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '3rem',
  color: '$gray900',
  width: '100%',
  padding: '1rem 2rem',

  table: {
    borderCollapse: 'collapse',
    borderSpacing: '0 0.5rem',
    marginTop: '1.5rem',

    '@bp4': {
      fontSize: '1.5rem',
    },

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
        textAlign: 'center',

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
