import { styled } from '@/styles'

export const ProductsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  background: '$gray800',
  width: '100%',
  height: '100vh',
  color: '$gray100',
  alignItems: 'center',
  padding: '1rem 2rem',
})

export const TableContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '3rem',

  table: {
    borderCollapse: 'separate',
    border: 'solid 1px $gray-200',

    thead: {
      tr: {
        border: 'solid 1px $gray-200',
        background: '$gray-200',

        th: {
          padding: '1rem',
        },
      },
    },

    tbody: {
      td: {
        padding: '1rem',
      },
    },
  },
})
