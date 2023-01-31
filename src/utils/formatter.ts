import dayjs from 'dayjs'

export const moneyFormatter = Intl.NumberFormat('pt-pt', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 2,
})

export function dateFormatted(date: Date) {
  const dateFormatted = dayjs(date).format('DD-MM-YYYY HH:mm')

  return dateFormatted
}
